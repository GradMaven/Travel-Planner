import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="bg-[#D9D9D9] min-h-screen flex items-center justify-center">
      <div className="bg-[#03023C] w-full max-w-2xl mx-auto mt-4 flex flex-col items-center rounded-md p-6 shadow-lg bg-opacity-90">
        <h2 className="text-4xl text-white font-bold text-center mb-6">Sign Up</h2>

        <form action="">
      
          <div className="relative my-4">
            <input
              type="text"
              placeholder="Your Name"
              className="block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none"
            />
          </div>

         
          <div className="relative my-4">
            <input
              type="email"
              placeholder="Your Email"
              className="block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none"
            />
          </div>

          
          <div className="relative my-4">
            <input
              type="password"
              placeholder="Your Password"
              className="block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none"
            />
          </div>

        
          <div className="relative my-4">
            <input
              type="password"
              placeholder="Confirm Your Password"
              className="block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none"
            />
          </div>

     
          <div className="my-4 flex items-center space-x-2">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="text-white text-sm">Remember Me</label>
          </div>

          
          <div className="my-4">
            <button
              type="submit"
              className="bg-[#BF6A02] text-white px-6 py-2 rounded-lg hover:bg-[#03023C] transition duration-300"
            >
              Sign Up
            </button>
          </div>

          <div className="text-white text-sm mt-4">
            <span>Already Registered? <Link to="/login" className="underline hover:text-[#BF6A02]">Login</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
