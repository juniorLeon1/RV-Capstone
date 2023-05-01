import React, { useContext } from "react";
import "../../styles/AccountHero.css";
import UserIcon from "./UserIcon";
import { ProfileContext } from "../../context/profile-context";

const LoggedIn = () => {
  const { userInfo, role } = useContext(ProfileContext);

  const roleTag = () => {
    if (role === "Admin") {
      return <p className="user-email">{userInfo.roles}</p>;
    }
    return;
  };

  return (
    <div>
      <div className="header-background">
        <div className="left-info">
          <UserIcon />
          <div className="user-info">
            <h1 className="full-name">{userInfo.userNames}</h1>
            <p className="user-email">{userInfo.email}</p>
            {roleTag()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggedIn;
