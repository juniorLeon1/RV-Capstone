import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styles/Destinations.css";

function DestinationCards() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    callSql();
  }, []);

  const callSql = async () => {
    try {
      const response = await fetch("http://localhost:8800/destinations");
      const data = await response.json();
      console.log("Fetch complete");
      setInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="DestinationContainer">
      {info.map((info) => (
        <div className="item" key={info.id}>
          {info.img && <img src={info.img} alt={info.location} />}
          <h1>{info.location}</h1>
          <Link className="Button" to={info.pathing}>More Info</Link>
        </div>
      ))}
    </div>
  );
}

export default DestinationCards;
