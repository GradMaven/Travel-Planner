import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          TravelEazzy
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition duration-300">
            About Us
          </a>
          <a href="#blog" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Blog
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Contact Us
          </a>
        </div>

        {/* Login and Sign Up Buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-blue-600 transition duration-300">
            Login
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;