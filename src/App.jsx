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


function App() {

  return (

    

      
     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/dubai" element={<Dubai/>}/>
      <Route path="/abuDhabi" element={<AbuDhabi/>}/>
      <Route path="/fujairah" element={<Fujairah/>}/>
      <Route path="/sharjah" element={<Sharjah/>}/>
      <Route path="/rasAlKhaima" element={<RasAlKhaima/>}/>
      <Route path="/activity" element={<ActivityPage/>}/>
      <Route path="/singleactivity" element={<SingleActivity/>}/>
      
     </Routes>
    
  );
}

export default App;
