import React, { useState } from "react";
import LoginForm from "../../components/Login components/LoginForm";
import RegForm from "../../components/Login components/RegForm";
import ForgotPassForm from "../../components/Login components/ForgotPassForm";
import "../../styles/Login.css";

const Login = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  console.log(currentForm);

  const renderForms = () => {
    if (currentForm === "login") {
      return <LoginForm onFormSwitch={toggleForm} formValue={currentForm} />;
    } else if (currentForm === "register") {
      return <RegForm onFormSwitch={toggleForm} formValue={currentForm} />;
    } else if (currentForm === "forgot") {
      return (
        <ForgotPassForm onFormSwitch={toggleForm} formValue={currentForm} />
      );
    }
  };

  return (
    <div className="auth-container">
      {renderForms()}
    </div>
  );
};

export default Login;
