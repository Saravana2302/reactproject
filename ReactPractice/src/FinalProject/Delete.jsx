import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Delete() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .delete(`http://localhost:3000/user/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className="text-center fw-bold d-flex justify-content-center align-items-center">
        Deleted Successfully
      </div>
      <button
        className="m-5"
        onClick={() => {
          navigate("/home");
        }}
      >
        Back
      </button>
    </>
  );
}

export default Delete;
