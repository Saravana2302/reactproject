import React, { useEffect, useState } from "react";
import axios from "axios";

function Home1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://67524035d1983b9597b5b438.mockapi.io/project")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      {data.map((i) => {
        return (
          <>
            <div>{i.PlayerName}</div>
            <div>{i.PlayerType}</div>
          </>
        );
      })}
    </div>
  );
}

export default Home1;
