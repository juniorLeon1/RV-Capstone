import React, { useState } from "react";
import LoginForm from "../../components/Login/LoginForm";
import RegForm from "../../components/Login/RegForm";
import "../../styles/Login.css"

const Login = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="auth-container">
      {currentForm === "login" ? (
        <LoginForm onFormSwitch={toggleForm} />
      ) : (
        <RegForm onFormSwitch={toggleForm} />
      )}
    </div>
  );
};

export default Login;
