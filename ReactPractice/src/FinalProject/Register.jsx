import axios from "axios";
import React, { useState } from "react";

function Register() {
  const [data, setData] = useState({
    Name: "",
    Age: "",
    Gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((curr) => {
      return { ...curr, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      // .post("https://67524035d1983b9597b5b438.mockapi.io/project", data)
      .post("http://localhost:3000/user", data)

      .then((res) => alert("submitted successfully"));
    setData({
      Name: "",
      Age: "",
      Gender: "",
    });
    e.target.reset().catch((err) => console.log(err));
  };

  return (
    <div className="text-center m-5">
      <h4> Register</h4>

      <form action="" className="" onSubmit={handleSubmit}>
        <label htmlFor="" className="mb-2">
          Name : <br />
          <input
            type="text"
            name="Name"
            value={data.Name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="" className="mb-2 m-2">
          {/* <pre> */}
          Age : <br />
          <input
            type="text"
            name="Age"
            value={data.Age}
            id=""
            onChange={handleChange}
          />
          {/* </pre> */}
        </label>
        <br />
        <br />
        <label htmlFor="">
          Gender : <br />
          <input
            type="text"
            name="Gender"
            value={data.Gender}
            onChange={handleChange}
            id=""
          />
        </label>
        <br />
        <br />
        <button>Sumbit</button>
      </form>
    </div>
  );
}

export default Register;
