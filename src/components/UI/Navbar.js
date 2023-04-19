import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>social planet</h1>

      <Link to="/">
        <img className="world-logo" alt="our brand name's logo" src={require("../../images/World.png")} />
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/destinations">Destinations</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
