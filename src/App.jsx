import React from "react"
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from "./components/common/Navbar"
import Activity from "./pages/Activity"

function App() {
  

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/activity" element={<Activity/>}/>
     </Routes>
    </>
  )
}

export default App
