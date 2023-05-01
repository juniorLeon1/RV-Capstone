import React, { useContext } from "react";
import { ProfileContext } from "../../context/profile-context";
import "../../styles/ProfileIcon.css"

const ProfileIcon = () => {
    const { userInfo } = useContext(ProfileContext)

    const nameInitial = []
    const nameArray = userInfo.userNames.split("")
    nameInitial.push(nameArray[0].toUpperCase())

  return (
    <div className="profile-icon">
      <h3 className="name-initial">{nameInitial[0]}</h3>
    </div>
  );
};

export default ProfileIcon;
