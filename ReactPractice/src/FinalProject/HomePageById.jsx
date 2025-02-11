import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function HomePageById() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://reactproject-server.onrender.com/user/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      <div className="text-center fw-bold m-2">HomePageById</div>
      <div className="card text-center">
        <div className="card-body">
          <p className="card-header">{data.Name}</p>
          <button
            onClick={() => {
              navigate("/home");
            }}
            className="bg-primary text-white border m-2"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePageById;
