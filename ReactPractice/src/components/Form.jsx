import React, { useState } from "react";
import axios from "axios";
import Home1 from "../pages/Home1";

function Form() {
  const [data, setData] = useState({
    PlayerName: "",
    PlayerType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setData((curr) => {
      return { ...curr, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://67524035d1983b9597b5b438.mockapi.io/project", data)
      .then((res) => alert("Data submitted"))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <form action="" className="flex" onSubmit={handleSubmit}>
        <label htmlFor="">
          Name :
          <input
            type="text"
            name="PlayerName"
            value={data.PlayerName}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="" onChange={handleChange}>
          PlayerType :{" "}
          <input
            type="text"
            name="PlayerType"
            value={data.PlayerType}
            onChange={handleChange}
          />
        </label>
        <button>submit</button>
      </form>
    </>
  );
}

export default Form;
