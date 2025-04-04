<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 
=======

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 
>>>>>>> 390f080ff0a63be64e1a323dfdafb170667482b3
'react-router-dom';
import Navbar from './components/Navbar';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from './pages/Home';
import "./App.css";
<<<<<<< HEAD
import Itinerary from './components/plan/Itinerary';
import Accommodation from './components/plan/Accommodation';
import UserProfile from './components/UserProfile';
=======

>>>>>>> 390f080ff0a63be64e1a323dfdafb170667482b3



function Layout () {
  const location = useLocation();

  return (
    <>
<<<<<<< HEAD
  
    {location.pathname !== "/login" && <Navbar />}
   
=======
    <Router>
      <Navbar />
>>>>>>> 390f080ff0a63be64e1a323dfdafb170667482b3
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
<<<<<<< HEAD
        <Route path ="/userprofile" element= {<UserProfile />}/>
        <Route path ="/itinerary" element = {<Itinerary />} />
        <Route path ="/accommodation" element = {<Accommodation />} />
    </Routes >  
 
=======
    </Routes >  
    </Router>
>>>>>>> 390f080ff0a63be64e1a323dfdafb170667482b3
    </>
      
  )
}

function App() {
  return <Layout />
}

export default App
