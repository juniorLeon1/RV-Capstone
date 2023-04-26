import React from "react";
import { Link } from "react-router-dom";
import "../../styles/PhoneNav.css"

const PhoneNav = () => {
  return (
    <div>
      <nav className="phone-navbar-container">
        <Link to="/login">
          <img
            src={require("../../images/user.png")}
            alt="login icon"
            className="phone-login-icon"
          />
        </Link>

        <Link to="/">
          <img
            src={require("../../images/Travel Agent Logo.png")}
            alt="login icon"
            className="phone-login-icon"
          />
        </Link>

        <Link to="/destinations">
          <img
            src={require("../../images/placeholder (2).png")}
            alt="login icon"
            className="phone-login-icon"
          />
        </Link>
      </nav>
    </div>
  );
};

export default PhoneNav;
