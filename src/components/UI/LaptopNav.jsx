import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import "../../styles/LaptopNav.css";
import { ProfileContext } from "../../context/profile-context";
import ProfileIcon from "./ProfileIcon";

const LaptopNav = () => {
  const [destDrpdwnToggle, setDestDrpdwnToggle] = useState(false);
  const [profileDrpdwnToggle, setProfileDrpdwnToggle] = useState(false);
  const { loggedIn, setLoggedIn, setRole } = useContext(ProfileContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    setLoggedIn(false);
    setRole("");
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar-container">
        {/* left side */}
        <h1 className="web-name">AvoTraveler</h1>

        {/* center */}
        <Link to="/" className="logo-link">
          <img
            className="world-logo"
            alt="AvoTraveler logo"
            src={require("../../images/Travel Agent Logo.png")}
          />
        </Link>

        {/* right side */}
        <ul className="navbar-links-container">
          {loggedIn === false ? (
            <li className="navigation-item">
              <Link to="/login" className="navigation-link">
                Login
              </Link>
            </li>
          ) : (
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
                <ProfileIcon />
              </Link>
              <ul className={`logout-drpdwn ${profileDrpdwnToggle === true ? "active" : "inactive"}`}>
                <li className="logout-item">
                  <button className="logout-button" onClick={logoutHandler}>
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          )}

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
        </ul>
      </nav>
    </div>
  );
};

export default LaptopNav;
