// App.js
import React, { useState } from "react";
import { Route, Routes, } from 'react-router-dom';
import Home from "./pages/home/Home";

import Activity from "./pages/Activity";
import Login from "./pages/authetication/login/index";
import { message } from 'antd';
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
      
     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/activity" element={<Activity />} />
     </Routes>
    
  );
}

export default App;
