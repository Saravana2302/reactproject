import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      // .get("https://67524035d1983b9597b5b438.mockapi.io/project")
      .get("https://reactproject-server.onrender.com/user")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="text-center fw-bold m-3">Table</div>
      <div className="tableHeight d-flex justify-content-center align-items-center">
        <table border="2" className="mx-3">
          <tr className="mx-3">
            <th className="">Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
          {data.map((i) => (
            <tr>
              <td className="p-2 m-3">{i.Name}</td>
              <td>{i.Age}</td>
              <td>{i.Gender}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default Table;
