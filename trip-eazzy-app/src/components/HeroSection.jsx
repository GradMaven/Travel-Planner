import React from 'react';


const HeroSection = () => {
  return (
    <div
    style={{ backgroundImage: "url('/images/herosection-background.jpg')" }}
    className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center 
    justify-center text-center px-4 pb-0"
     >
 
      <div className="relative z-10 text-center text-white w-180">
        <h1 className="text-5xl font-bold mb-6 mt-16">
          Make Easy All your Travel plans with <span className='text-[#BF6A02]'>All-In-One Travel App </span>
        </h1>
        <p className="text-xl mb-8">
          Explore the world with us and create unforgettable memories.
        </p>
        <button className="bg-[#03023C] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#BF6A02] transition duration-300">
          Let's Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
