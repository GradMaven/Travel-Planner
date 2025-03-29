import React from 'react'

function Login() {
  return (
    <div>
        <div className='bg-[#D9D9D9] border border-[#03023C] rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm
        bg-opacity-20 relative'>
        <h2 className='text-4xl text-whitefront-bold text-center mb-4'>Login</h2>
        <form action="">
        <div className='relative my-4'>
        <input type="email" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-200'/>
        <label htmlFor="email" className='absolute text-sm text-white'>Your Email</label>
        </div>

        <div className= 'relative my-4'>
        <input type="password"className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-200'/>
        <label htmlFor="email"  className='absolute text-sm text-white'>Your Password</label>
        </div>

        <div>
            <div>
            <input type="checkbox" name="" id=""/>
            <label htmlFor="Remember Me">Remember Me</label>
            </div>
        <span>Forgot Password</span>
        </div>

        <button className="bg-[#D9D9D9] text-[#03023C] px-6 py-2 rounded-lg ring-inset hover:ring-4 hover:border-[#03023C]  transition duration-300"
        type="submit">Login</button>
        <div>
            <span>New Here?<Link to= '/SignUp'>Create Account</Link></span>
        </div>
        </form>
        </div>
     </div>
  )
}

export default Login;