import React from 'react'
import { useNavigate } from 'react-router-dom'

function UserProfile() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/itinerary');
  };

  return (
    <div className='bg-[#F3E3C0] flex flex-col md:flex-row items-center md:items-start text-center gap-4 min-h-screen'>

      <div className='w-full md:w-64 bg-gray-100 p-6 flex flex-col items-center shadow-md'>
        <div className='w-16 h-16 rounded-full overflow-hidden mb-4'>
          <img src="/icons/avatar-userprofile.svg" alt="User Avatar" className="w-full h-full object-cover" />
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-1">Gee Mave</h2>
        <p className="text-sm text-gray-600 mb-4">gee.mave@gmail.com</p>

        <nav className='w-full mt-4'>
          <ul className="space-y-2">
            <li><a href="#" className="block px-4 py-2 rounded hover:bg-[#F3E3C0] text-gray-700">Dashboard</a></li>
            <li><a href="#" className="block px-4 py-2 rounded hover:bg-[#F3E3C0] text-gray-700">Settings</a></li>
            <li><a href="/home" className="block px-4 py-2 rounded hover:bg-[#F3E3C0] text-gray-700">Logout</a></li>
          </ul>
        </nav>
      </div>

      
      <div className='flex flex-col items-center p-4 flex-1'>
        <div className='h-40 w-40 rounded-full overflow-hidden mb-4'>
          <img src="/images/Holiday-vacation-pic2.jpg" alt="holiday" className='w-full h-full object-cover' />
        </div>

        <div className='w-full max-w-4xl px-4'>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 mt-8 text-[#03023C]">Welcome to Trip Eazzy</h2>
          <p className='text-gray-700 mb-4 text-sm sm:text-base'>
            Planning is the first step to a lifetime journey of adventure. Create your first trip
            and embark on a journey of thrills and fulfillment.
          </p>
        </div>

        <button
          onClick={handleClick}
          className="bg-[#BF6A02] text-white px-6 py-2 mt-4 rounded-lg hover:bg-[#03023C] transition duration-300"
        >
          Create first trip
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
