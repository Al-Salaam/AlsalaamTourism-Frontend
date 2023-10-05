// App.js
import React, { useState } from "react";
import { Route, Routes, } from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/authetication/login/index";
import Destinations from "./pages/destinations/index"
import { message } from 'antd';
import "./App.css";
import About from "./pages/about";
import Dubai from "./pages/destinations/dubai";
import AbuDhabi from "./pages/destinations/abuDhabi"
import Fujairah from "./pages/destinations/fujairah"
import Sharjah from "./pages/destinations/sharjah"
import RasAlKhaima from "./pages/destinations/RasAlKhaima"
import { Toaster } from "react-hot-toast";
import ActivityPage from "./pages/activityPage";
import SingleActivity from "./pages/singleActivity";
import SignUp from "./pages/authetication/signup";

import ContactUS from "./pages/contactUs";
import ContactUs from "./pages/contactUs";

function App() {

  return (

    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/" element={<Home />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/dubai" element={<Dubai />} />
        <Route path="/abuDhabi" element={<AbuDhabi />} />
        <Route path="/fujairah" element={<Fujairah />} />
        <Route path="/sharjah" element={<Sharjah />} />
        <Route path="/rasAlKhaima" element={<RasAlKhaima />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Toaster />
    </>


      
  );
}

export default App;
