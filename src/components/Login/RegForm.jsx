import React, { useState } from "react";
import "../../styles/LoginForms.css";

const RegForm = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email)
  };

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
          className={`switch-button ${props.formValue === "register" ? "active-switch": "inactive-switch"}`}
        >
          Sign Up
        </button>
      </div>

      <form className="register-form" onSubmit={handleSubmit}>
        <input
          className="name-input"
          value={name}
          onChange={(event) => setName(event.target.value)}
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
          value={pass}
          onChange={(event) => setPass(event.target.value)}
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />

        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegForm;
