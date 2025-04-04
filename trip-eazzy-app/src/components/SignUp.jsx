import React from 'react'
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className='bg-bg-[#D9D9D9]'>
        <div className='bg-[#03023C] w-full max-w-2xl mx-auto mt-4 flex flex-col items-center rounded-md p-6 shadow-lg bg-opacity-20 relative'>
        <h2 className='text-4xl text-white text-center mb-4'>Sign Up</h2>
        <form action="">
        <div className='relative my-4 flex flew-row'>
       
        <input type="text" placeholder="Your Name" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-200'/>
        </div>

        <div className='relative my-4 flex flew-row'>
        <input type="email" placeholder="Your Email" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-200'/>
        </div>

        <div className= 'relative my-4 flex flew-row'>
        <input type="password"  placeholder="Your Password" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-200'/>
        </div>
        <div className= 'relative my-4 flex flew-row'>
        <input type="password" placeholder="Confirm Your Password" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-200'/>
        </div>
        <div>
            <div>
            <input type="checkbox" name="" id=""/>
            <label htmlFor="Remember Me" className='text-white'>Remember Me</label>
            </div>
        </div>

        <button className="bg-[#BF6A02] text-white px-6 py-2 rounded-lg ring-inset hover:ring-4 hover:border-[#03023C]  transition duration-300"
        type="submit">Sign Up</button>
        <div className='text-white'>
            <span>Already Registered?<Link to= '/Login'>Login</Link></span>
        </div>
        </form>
        </div>
     </div>
  )
}

export default SignUp;