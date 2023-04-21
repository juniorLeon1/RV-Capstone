import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [destDrpdwnToggle, setDestDrpdwnToggle] = useState(false);
  const [profileDrpdwnToggle, setProfileDrpdwnToggle] = useState(false);

  return (
    <nav className="navbar-container">
      {/* left side */}
      <h1 className="web-name">AvoTraveler</h1>

      {/* center */}
      <Link to="/" className="logo-link">
        <img
          className="world-logo"
          alt="AvoTraveler logo"
          src={require("../../images/World.png")}
        />
      </Link>

      {/* right side */}
      <ul className="navbar-links-container">
        <li
          className="navigation-item"
          onMouseLeave={() => {
            setDestDrpdwnToggle(!destDrpdwnToggle);
          }}
        >
          <Link
            to="/destinations"
            className="navigation-link"
            onMouseEnter={() => {
              setDestDrpdwnToggle(!destDrpdwnToggle);
            }}
          >
            Destinations{" "}
            <i
              className={`fa-solid fa-caret-down fa-rotate-90 drpdwn-arrow ${
                destDrpdwnToggle ? "active" : "inactive"
              }`}
            ></i>
          </Link>
          <Dropdown
            toggled={destDrpdwnToggle}
            menu={[
              {
                item: "Brazil",
                url: "/destinations/brazil",
              },
              {
                item: "Charlotte",
                url: "/destinations/charlotte",
              },
              {
                item: "London",
                url: "/destinations/london",
              },
              {
                item: "Puerto Rico",
                url: "/destinations/puerto-rico",
              },
            ]}
          />
        </li>
        <li
          className="navigation-item"
          onMouseLeave={() => {
            setProfileDrpdwnToggle(!profileDrpdwnToggle);
          }}
        >
          <Link
            to="/profile"
            className="navigation-link"
            onMouseEnter={() => {
              setProfileDrpdwnToggle(!profileDrpdwnToggle);
            }}
          >
            Profile{" "}
            <i
              className={`fa-solid fa-caret-down fa-rotate-90 drpdwn-arrow ${
                profileDrpdwnToggle ? "active" : "inactive"
              }`}
            ></i>
          </Link>

          <Dropdown
            toggled={profileDrpdwnToggle}
            menu={[
              {
                item: "Login",
                url: "/login",
              },
              {
                item: "Register",
                url: "/registration",
              },
            ]}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
