import React from 'react';
import { useNavigate } from 'react-router-dom';

function CardPlanner() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div className='bg-[#D9D9D9] px-4 py-10'>
      <div className='flex flex-col items-center text-center gap-4'>
        <p className='text-base sm:text-lg mb-2'>Plan Your Trip in Just 2 Minutes</p>
        <h2 className='text-[#03023C] text-2xl sm:text-3xl font-bold'>
          Your <span className='text-[#BF6A02]'>Trip Planner</span>
        </h2>
        <p className='text-[#03023C] font-semibold max-w-2xl mx-auto mb-6 text-sm sm:text-base'>
          Generate tailored itinerary in a matter of minutes and get started with your travel plan. Customize
          and personalize your trip according to your need.
        </p>
        <button className='bg-[#03023C] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#BF6A02] transition duration-300'>
          Learn More
        </button>
      </div>

      <div className='bg-white shadow-lg rounded-lg p-6 mt-10 border border-gray-200 w-full max-w-2xl mx-auto text-center'>
        <h3 className='text-lg sm:text-xl font-bold text-[#03023C] mb-3'>
          What <span className='text-[#BF6A02] font-semibold'>kind of trip</span> are you planning for?
        </h3>
        <p className='text-sm sm:text-base text-gray-700 mb-6'>
          Explore the beautiful places in Africa and make beautiful memories.
        </p>

        <div className='flex flex-col items-center gap-4'>
          {[
            { icon: "Holiday.png", title: "Vacation" },
            { icon: "Theatre Mask.png", title: "Culture and Adventure" },
            { icon: "Business Building.png", title: "Business" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between w-full max-w-sm bg-[#F9F9F9] shadow rounded-lg p-4"
            >
              <img src={`/icons/${item.icon}`} alt={`${item.title} icon`} className='w-6 h-6 sm:w-8 sm:h-8' />
              <h4 className='text-gray-700 font-medium text-sm sm:text-base'>{item.title}</h4>
              <img src="/icons/Forward.png" alt="forward" className='w-6 h-6 sm:w-8 sm:h-8' />
            </div>
          ))}

          <button
            onClick={handleClick}
            className='bg-[#BF6A02] text-white px-6 sm:px-8 py-2 sm:py-3 mt-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#03023C] transition duration-300'
          >
            Add to Plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPlanner;
