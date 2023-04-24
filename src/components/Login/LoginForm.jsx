import React, { useState } from "react";
import "../../styles/LoginForms.css"

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="email-label">
          Email:{" "}
        </label>
        <input
          className="email-input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          id="email"
          name="email"
          placeholder="youremail@email.com"
          required
        />

        <label htmlFor="password" className="password-label">
          Password:{" "}
        </label>
        <input
          className="password-input"
          value={pass}
          onChange={(event) => setPass(event.target.value)}
          type="password"
          id="password"
          name="password"
          placeholder="****"
          required
        />
        <button type="submit" className="login-submit">Log In</button>
      </form>
      <button
        onClick={() => props.onFormSwitch("register")}
        className="register-switch-button"
      >
        Don't have an account? Register Here!
      </button>
    </div>
  );
};

export default LoginForm;
