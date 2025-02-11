import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [update, setUpdate] = useState({
    Name: "",
    Age: "",
    Gender: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${id}`)
      .then((res) => setUpdate(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdate((curr) => {
      return { ...curr, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/user/${id}`, update)
      .then((res) => console.log("successs"));

    navigate("/").catch((err) => console.log(err));
  };

  return (
    <>
      <div className="text-center fw-bolder m-3">Edit</div>
      <form
        action=""
        className="d-flex flex-column justify-content-center align-items-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="">
          Name :{" "}
          <input
            type="text"
            name="Name"
            value={update.Name}
            onChange={handleChange}
            id=""
          />
        </label>
        <br />
        <br />
        <label htmlFor="">
          Age :{" "}
          <input
            type="number"
            name="Age"
            value={update.Age}
            onChange={handleChange}
            id=""
          />
        </label>
        <br />
        <br />

        <label htmlFor="">
          Gender :{" "}
          <input
            type="text"
            name="Gender"
            value={update.Gender}
            onChange={handleChange}
            id=""
          />
        </label>
        <br />
        <br />
        <button>Update</button>
      </form>
    </>
  );
}

export default Edit;
