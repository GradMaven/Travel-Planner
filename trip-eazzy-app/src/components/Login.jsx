import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate ();
  
    const handleClick = () => {
      navigate('/userprofile'); 
    }
  
  return (
    <div className='bg-[#D9D9D9] '>
        <div className='bg-[#03023C] w-full max-w-2xl mt-6 mx-auto flex flex-col items-center rounded-md p-6 shadow-lg bg-opacity-20 relative'>
        <h2 className='text-4xl text-white text-center mb-4'>Login</h2>
        <form action="">
        <div className='relative my-4'>
        <input type="email" placeholder='Your Email' className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-200'/>
        
        </div>

        <div className= 'relative my-4'>
        <input type="password" placeholder='Your Password' className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-200'/>
        </div>

        <div>
            <div>
            <input type="checkbox" name="" id=""/>
            <label htmlFor="Remember Me" className='text-white'>Remember Me</label>
            </div>
        <span className='text-white'>Forgot Password</span>
        </div>

        <button onClick= {handleClick} className="bg-[#D9D9D9] text-[#03023C] px-6 py-2 mt-4 mb-4 rounded-lg ring-inset hover:ring-4 hover:border-[#03023C]  transition duration-300"
        type="submit">Login</button>
        <div>
            <span className='text-[#BF6A02] '>New Here?<Link to= '/SignUp'>Create Account</Link></span>
        </div>
        </form>
        </div>
     </div>
  )
}

export default Login;