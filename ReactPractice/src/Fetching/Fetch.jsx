import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Fetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/info")
      .then((res) => {
        setData([...res.data]);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data);
  return (
    <>
      <h1 className="text-primary mt-4">map</h1>
      <ul>
        {data.map((i, idx) => (
          <li key={idx}>
            {i.name} : {i.age}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Fetch;
