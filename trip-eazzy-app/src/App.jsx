
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 
'react-router-dom';
import Navbar from './components/Navbar';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from './pages/Home';
import "./App.css";



function App() {
 

  return (
    <>
    <Router>
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
    </Routes >  
    </Router>
    </>
      
  )
}

export default App
