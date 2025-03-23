import React from 'react';


const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-[url('/public/images/herosection background.jpg')] bg-cover bg-center flex items-center justify-center"
      
    >
      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Make Easy All your Travel plans with All-In-One Travel App
        </h1>
        <p className="text-xl mb-8">
          Explore the world with us and create unforgettable memories.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
          Let's Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;