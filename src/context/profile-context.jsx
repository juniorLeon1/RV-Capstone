import React, { useState, useEffect, createContext } from "react";

export const ProfileContext = createContext(null);

const ProfileContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  const [userInfo, setUserInfo] = useState({});

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8800/users");
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  const contextValue = {
    users,
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
