import React, { useContext } from "react";
import "../../styles/AccountHero.css";
import UserIcon from "./UserIcon"
import { ProfileContext } from "../../context/profile-context";

const LoggedIn = () => {
  const { userInfo } = useContext(ProfileContext)

  return (
    <div>
      <div className="header-background">
        <div className="left-info">
          <UserIcon />
          <div className="user-info">
            <h1 className="full-name">{userInfo.userNames}</h1>
            <p className="user-email">{userInfo.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggedIn;
