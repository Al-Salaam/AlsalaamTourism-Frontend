// App.js
import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Activity from "./pages/Activity";
import Login from "./pages/authetication/login/index";
import { message } from 'antd';
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="main">
      {isLogin ? <Navbar /> : <Login setIsLogin={setIsLogin} />}
    
     <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/activity" element={<Activity />} />
     </Routes>
    </div>
  );
}

export default App;
