import React, { useState } from "react";
import "../../styles/ForgotPassForm.css";

const ForgotPassForm = (props) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <button
        onClick={() => props.onFormSwitch("login")}
        className="back-button"
      >
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <h2 className="forgot-title">Password Reset</h2>
      <p className="forgot-desc">
        Please enter an email address we can send your reset password link
      </p>

      <form className="forgot-form" onSubmit={handleSubmit}>
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

        <button className="submit-button" type="submit">
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ForgotPassForm;
