import React, { useContext, useState, useEffect } from "react";
import "../../styles/LoginForms.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../../context/profile-context";

const RegForm = (props) => {
  const [email, setEmail] = useState("");
  const [passwords, setPasswords] = useState("");
  const [userNames, setUserNames] = useState("");
  const roles = "User";
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn, setRole, setUserInfo, users } =
    useContext(ProfileContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = { roles, userNames, email, passwords };
    postIntoData(data);
    console.log(data);
  };

  const postIntoData = async (data) => {
    try {
      const res = await axios.post("http://localhost:8800/users", data);
      console.log("working in postIntoData");
      return res;
    } catch {
      console.log("might be broken");
    }
  };

  const registerHandler = () => {
    const duplicateFinder = users.filter((user) => user.email === email);

    const tempUser = {
      roles: "User",
      userNames: userNames,
      email: email,
    };

    try {
      if (duplicateFinder.length > 0) {
        throw new Error("Email already in use!");
      } else {
        setLoggedIn(true);
        setRole(tempUser.roles);
        setUserInfo(tempUser);
      }
    } catch (error) {
      return alert(`${error.message}`);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/profile");
    }
  });

  return (
    <div className="auth-form-container">
      <div className="switch-auth">
        <button
          onClick={() => props.onFormSwitch("login")}
          className="switch-button"
        >
          Log In
        </button>
        <button
          onClick={() => props.onFormSwitch("register")}
          className={`switch-button ${
            props.formValue === "register" ? "active-switch" : "inactive-switch"
          }`}
        >
          Sign Up
        </button>
      </div>

      <form className="register-form" onSubmit={handleSubmit}>
        <input
          className="name-input"
          value={userNames}
          onChange={(event) => setUserNames(event.target.value)}
          id="name"
          name="name"
          placeholder="Your name"
          required
        />

        <input
          className="email-input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          required
        />

        <input
          className="password-input"
          value={passwords}
          onChange={(event) => setPasswords(event.target.value)}
          type="password"
          id="passwords"
          name="passwords"
          placeholder="passwords"
          required
        />

        <button
          type="submit"
          className="submit-button"
          onClick={() => registerHandler()}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegForm;
