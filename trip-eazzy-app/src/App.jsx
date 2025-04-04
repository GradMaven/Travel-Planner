import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'; // Removed BrowserRouter import
import Navbar from './components/Navbar';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from './pages/Home';
import "./App.css";
import Itinerary from './components/plan/Itinerary';
import Accommodation from './components/plan/Accommodation';
import UserProfile from './components/UserProfile';

function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <Navbar />}

      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/accommodation" element={<Accommodation />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Layout /> 
  );
}

export default App;
