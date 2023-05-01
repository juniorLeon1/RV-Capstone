import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Profile/Login";
import Error from "./pages/Error";
import Destinations from "./pages/Destinations/Destinations";
import Profile from "./pages/Profile/Profile";
import Brazil from "./pages/Destinations/Brazil";
import Charlotte from "./pages/Destinations/Charlotte";
import London from "./pages/Destinations/London";
import PRico from "./pages/Destinations/PRico";
import ProfileContextProvider from "./context/profile-context";

const App = () => {
  return (
    <ProfileContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="destinations" element={<Destinations />} />
            <Route path="destinations/charlotte" element={<Charlotte />} />
            <Route path="destinations/brazil" element={<Brazil />} />
            <Route path="destinations/london" element={<London />} />
            <Route path="destinations/puerto-rico" element={<PRico />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProfileContextProvider>
  );
};

export default App;
