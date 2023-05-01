import React from "react";
import "../../styles/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-text">
          <h1>AvoTraveler</h1>
          <p>At AvoTraveler our goal is to promote sustainable travel by providing users with information about eco-friendly accommodations accross our various locations. Explore this years expert aproved places to travel the most sustainable way possible with our guides. AvoTraveler was born from the idea that a better way to travel is possible. Explore how below.
</p>
          <br />
          <Link to='/profile' className="hero-button">Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
