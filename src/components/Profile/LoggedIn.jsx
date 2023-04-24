import React, { useState, useEffect } from "react";
import "../../styles/LoggedIn.css";

const LoggedIn = () => {
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

  return (
    <div>
      <div className="header-background">
        <div className="left-info">
          <div className="profile-icon">
            <h1 className="name-initial">J</h1>
          </div>
          <div className="user-info">
            <h1 className="full-name">John Doe</h1>
            <p className="this-email">johnD@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggedIn;
