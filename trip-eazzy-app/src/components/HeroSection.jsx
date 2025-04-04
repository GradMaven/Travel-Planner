import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div
      style={{ backgroundImage: "url('/images/herosection-background.jpg')" }}
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center px-4 py-12 sm:py-20"
    >
      <div className="relative z-10 text-white max-w-3xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Make Easy All your Travel plans with <span className="text-[#BF6A02]">All-In-One Travel App</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 px-2 sm:px-0">
          Explore the world with us and create unforgettable memories.
        </p>
        <button
          onClick={handleClick}
          className="bg-[#03023C] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#BF6A02] transition duration-300"
        >
          Let's Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
