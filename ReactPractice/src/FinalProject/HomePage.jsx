import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Delete from "./Delete";
import FinalFooter from "./FinalFooter";

function HomePage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      // .get("https://67524035d1983b9597b5b438.mockapi.io/project")
      .get("http://localhost:3000/user")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="text-center fw-bold mt-2">HomePage</div>
      <div className="row d-flex justify-content-center">
        {data.map((i) => (
          <div className="card text-center col-4 m-5 ">
            <div className="card-body ">
              <p className="card-header bg-info-subtle">{i.Name}</p>
              <p className="">{i.Age}</p>
              <p className="">{i.Gender}</p>
              <div className="d-flex flex-column gap-2 flex-sm-row justify-content-around">
                {/* <Link to="/view/:id"> */}
                <button
                  className="border-0 btn btn-primary bg-opacity-75"
                  onClick={() => {
                    navigate(`/view/${encodeURIComponent(i._id)}`);
                  }}
                >
                  View
                </button>
                {/* </Link> */}
                <button
                  className="border-0 btn btn-success"
                  onClick={() => navigate(`/edit/${encodeURIComponent(i._id)}`)}
                >
                  Edit
                </button>
                <button
                  className="border-0 btn btn-danger"
                  onClick={() => {
                    navigate(`/delete/${i._id}`);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <FinalFooter></FinalFooter>
    </>
  );
}

export default HomePage;
