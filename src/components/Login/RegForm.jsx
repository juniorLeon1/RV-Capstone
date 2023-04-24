import React, { useState } from "react";
import "../../styles/LoginForms.css"

const RegForm = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`${name} ${email} ${pass}`);
  };

  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="name-label">
          Full Name:{" "}
        </label>
        <input
          className="name-input"
          value={name}
          onChange={(event) => setName(event.target.value)}
          id="name"
          name="name"
          placeholder="John Doe"
          required
        />
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
        <button type="submit" className="register-submit">
          Register
        </button>
      </form>
      <button
        onClick={() => props.onFormSwitch("login")}
        className="login-switch-button"
      >
        Already have an account? Log in Here!
      </button>
    </div>
  );
};

export default RegForm;
