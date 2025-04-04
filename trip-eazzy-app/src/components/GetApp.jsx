import React from 'react';
import { useNavigate } from 'react-router-dom';

function GetApp() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup'); // Navigate to the sign up page
  };

  return (
    <div
      style={{ backgroundImage: "url('/images/background2.jpg')" }}
      className="bg-cover bg-center bg-no-repeat px-4 py-10 flex flex-col items-center text-center"
    >
      <div className="max-w-xl w-full">
        <h3 className="text-gray-700 font-bold text-base sm:text-lg mb-2">SIGN UP NOW</h3>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#03023C] mb-4">Start Your Journey</h2>
        <button
          onClick={handleClick}
          className="bg-[#BF6A02] text-white px-6 py-3 mt-2 rounded-lg text-base sm:text-lg font-semibold transition duration-300 hover:bg-[#03023C]"
        >
          Sign up free
        </button>
        <p className="mt-4 text-sm sm:text-base">or download the app</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          {/* App Store Button */}
          <button className="flex items-center border-4 border-[#03023C] px-4 py-3 rounded-lg w-full sm:w-auto">
            <img src="/icons/icon-apple.png" alt="apple" className="w-8 h-8 mr-4" />
            <div className="text-left text-[#BF6A02]">
              <span className="text-xs block">Download on</span>
              <span className="font-semibold text-base">App Store</span>
            </div>
          </button>

          {/* Google Play Button */}
          <button className="flex items-center border-4 border-black px-4 py-3 rounded-lg w-full sm:w-auto">
            <img src="/icons/icon-android.png" alt="android" className="w-8 h-8 mr-4" />
            <div className="text-left text-[#BF6A02]">
              <span className="text-xs block">Get it on</span>
              <span className="font-semibold text-base">Google Play</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetApp;
