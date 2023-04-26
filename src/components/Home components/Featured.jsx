import React from "react";
import { Link } from "react-router-dom";
import Circle from "../../images/Yellow.png";
import "../../styles/Featured.css";
import Person1 from "../../images/Person1.png";

export default function Featured() {
  return (
    <div className="Backdrop">
      <img className="Item Person" src={Person1}></img>
      <img className="Item Circle" src={Circle}></img>
      <div className="Item FeaText">
        <h1>Review ofAvoTravles</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          possimus, veritatis iure autem nostrum odio corporis fugiat, neque quo
          commodi aut placeat provident doloribus quidem eos ab officiis ea
          assumenda.
        </p>
        <Link className="FeaButton">Learn More</Link>
      </div>
    </div>
  );
}
