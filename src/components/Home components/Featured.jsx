import React from "react";
import { Link } from "react-router-dom";
import Circle from "../../images/Yellow.png";
import "../../styles/Featured.css";
import Person1 from "../../images/Person1.png";

export default function Featured() {
  return (
    <div className="Backdrop">
      <section className="imageFlex">
        <img className="Item Person" src={Person1} alt="guy walking down the street"></img>
        <img className="Item Circle" src={Circle} alt="big orange circle"></img>
      </section>
      <section>
        <div className="Item FeaText">
          <h1>Review of AvoTravles</h1>
          <p>
            "Every time I travel I use AvoTraveler. I can always count on them to provide me with accurate, up-to-date information on my destinations in an easy-to-use format. I cannot recommend it enough!"
          </p>
          <p> - Andres Barreras (founder of Queen City Calendar")</p>
          <Link className="FeaButton" to='/destinations'>Learn More</Link>
        </div>
      </section>
    </div>
  );
}
