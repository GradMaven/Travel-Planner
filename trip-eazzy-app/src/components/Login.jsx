import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); // Prevent form submission
    navigate('/userprofile');
  };

  return (
    <div className='bg-[#D9D9D9] min-h-screen flex items-center justify-center'>
      <div className='bg-[#03023C] w-full max-w-2xl flex flex-col items-center rounded-md p-6 shadow-lg bg-opacity-20 relative'>
        <h2 className='text-4xl text-white font-bold text-center mb-4'>Login</h2>
        <form onSubmit={handleClick}>
          <div className='relative my-4'>
            <input
              type="email"
              placeholder="Your Email"
              className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-200'
              required
            />
          </div>

          <div className='relative my-4'>
            <input
              type="password"
              placeholder="Your Password"
              className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-200'
              required
            />
          </div>

          <div className='flex justify-between items-center w-full px-2 mb-4 text-white text-sm'>
            <div>
              <input type="checkbox" id="remember" className='mr-1' />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <span className='cursor-pointer hover:underline'>Forgot Password?</span>
          </div>

          <button
            className="bg-[#D9D9D9] text-[#03023C] px-6 py-2 mb-4 rounded-lg ring-inset hover:ring-4 hover:border-[#03023C] transition duration-300"
            type="submit"
          >
            Login
          </button>

          <div>
            <span className='text-[#BF6A02]'>
              New Here? <Link to="/SignUp" className='underline'>Create Account</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
