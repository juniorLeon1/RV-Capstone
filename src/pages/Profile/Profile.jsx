import React, { useContext } from "react";
import UserProfile from "../../components/Profile components/UserProfile";
import AdminProfile from "../../components/Profile components/AdminProfile";
import { ProfileContext } from "../../context/profile-context";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { role } = useContext(ProfileContext);
  const navigate = useNavigate();

  const profilePageType = () => {
    if (role === "Admin") {
      return <AdminProfile />;
    } else if (role === "User") {
      return <UserProfile />;
    } else if (role === "") {
      navigate("*");
    }
  };

  return (
    <div>
      {profilePageType()}
    </div>
  );
};

export default Profile;
