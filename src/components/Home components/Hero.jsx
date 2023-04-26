import React from "react";
import "../../styles/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-text">
          <h1>AvoTravels</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <br />
          <Link to='/profile' className="hero-button">Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
