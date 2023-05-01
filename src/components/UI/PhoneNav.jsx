import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/PhoneNav.css";
import { ProfileContext } from "../../context/profile-context";
import ProfileIcon from "./ProfileIcon";

const PhoneNav = () => {
  const { loggedIn, setLoggedIn, setRole } = useContext(ProfileContext);
  const [profileDrpdwnToggle, setProfileDrpdwnToggle] = useState(false);
  const navigate = useNavigate();

  const logoutHandler = () => {
    setLoggedIn(false);
    setRole("");
    navigate("/");
  };

  return (
    <div>
      <nav className="phone-navbar-container">
        {loggedIn === true ? (
          <div className="profile-icon-container">
            <div className="icon-and-caret">
              <Link to="/profile">
                <ProfileIcon />
              </Link>
              <div className="caret-icon">
                <i
                  onClick={() => setProfileDrpdwnToggle(!profileDrpdwnToggle)}
                  className={`fa-solid fa-caret-down fa-rotate-90 fa-2xl drpdwn-arrow ${
                    profileDrpdwnToggle === true ? "active" : "inactive"
                  }`}
                ></i>
              </div>
            </div>
            <ul
              className={`logout-drpdwn ${
                profileDrpdwnToggle === true ? "active" : "inactive"
              }`}
            >
              <li className="logout-item">
                <button className="logout-button" onClick={logoutHandler}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <img
              src={require("../../images/user.png")}
              alt="login icon"
              className="phone-login-icon"
            />
          </Link>
        )}

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
