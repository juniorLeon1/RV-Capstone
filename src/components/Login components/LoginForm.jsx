import React, { useState, useEffect, useContext } from "react";
import "../../styles/LoginForms.css";
import { ProfileContext } from "../../context/profile-context";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const [emailInput, setEmailInput] = useState("");
  const [pass, setPass] = useState("");
  const { setLoggedIn, setRole, setUserInfo } = useContext(ProfileContext);
  const navigate = useNavigate()

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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const loginHandler = () => {
    const findUser = data.filter((data) => {
      if (emailInput === data.email) {
        return data.email === emailInput;
      }
      return false;
    });

    try {
      if (!emailInput || !pass) {
        throw new Error("Please input an email and password");
      } else if (findUser[0] === undefined) {
        throw new Error("Invalid email");
      } else if (findUser[0].passwords !== pass) {
        throw new Error("Incorrect Password");
      } else {
        setLoggedIn(true);
        setRole(findUser[0].roles);
        setUserInfo(findUser[0]);
        navigate("/profile");
      }
    } catch (error) {
      return alert(`${error.message}`);
    }
  };
  
  return (
    <div className="auth-form-container">
      <div className="switch-auth">
        <button
          onClick={() => props.onFormSwitch("login")}
          className={`switch-button ${
            props.formValue === "login" ? "active-switch" : "inactive-switch"
          }`}
        >
          Log In
        </button>
        <button
          onClick={() => props.onFormSwitch("register")}
          className="switch-button"
        >
          Sign Up
        </button>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          className="email-input"
          value={emailInput}
          onChange={(event) => setEmailInput(event.target.value)}
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          required
        />

        <input
          className="password-input"
          value={pass}
          onChange={(event) => setPass(event.target.value)}
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />

        <button
          onClick={() => props.onFormSwitch("forgot")}
          className="forgot-button"
        >
          Forgot your password?
        </button>

        <button
          type="submit"
          className="submit-button"
          onClick={() => loginHandler()}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
