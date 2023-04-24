import React, { useState } from "react";
import "../../styles/LoginForms.css";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
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

        <button
          onClick={() => props.onFormSwitch("forgot")}
          className="forgot-button"
        >
          Forgot your password?
        </button>

        <button type="submit" className="submit-button">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
