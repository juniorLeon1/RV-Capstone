import React from "react";
import { Link } from "react-router-dom";
import Circle from "../../images/Yellow.png";
import "../../styles/Featured.css";
import Person1 from "../../images/Person1.png";

export default function Featured() {
  return (
    <div className="Backdrop">
      <section className="imageFlex">
        <img className="Item Person" src={Person1}></img>
        <img className="Item Circle" src={Circle}></img>
      </section>
      <section>
        <div className="Item FeaText">
          <h1>Review ofAvoTravles</h1>
          <p>
            "Avo Traveler has helped me see the world while creating the least harm to the enviornment. Any time I plan a trip I check Avo Traveler first."
<br />
            - Tom Smith
          </p>
          <Link className="FeaButton">Learn More</Link>
        </div>
      </section>
    </div>
  );
}
