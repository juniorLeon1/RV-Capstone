import React, { useContext } from "react";
import "../../styles/UserIcon.css";
import { ProfileContext } from "../../context/profile-context";

const UserIcon = () => {
  const { userInfo } = useContext(ProfileContext);

  const nameInitial = [];
  const nameArray = userInfo.userNames.split("");
  nameInitial.push(nameArray[0].toUpperCase());

  return (
    <div>
      <div className="user-icon">
        <h1 className="user-name-initial">{nameInitial[0]}</h1>
      </div>
    </div>
  );
};

export default UserIcon;
