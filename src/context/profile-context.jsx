import React, { useState, createContext, useEffect } from "react";

export const ProfileContext = createContext(null);

const ProfileContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8800/users");
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  const tempUserInfo = [
    {
      id: 0,
      roles: "",
      userNames: "",
      email: "",
      passwords: "",
    },
  ];
  const [userInfo, setUserInfo] = useState(tempUserInfo);

  const contextValue = {
    data,
    loggedIn,
    setLoggedIn,
    role,
    setRole,
    userInfo,
    setUserInfo,
  };

  return (
    <ProfileContext.Provider value={contextValue}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
