import React from 'react';

function Card() {
  return (
    <div className="bg-[#D9D9D9] px-4 py-10">
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h2 className="text-[#BF6A02] text-2xl sm:text-3xl font-bold mb-6">
          Plan and Re-live the Memories
        </h2>
        <p className="text-[#03023C] text-sm sm:text-base max-w-2xl mx-auto mb-8 px-2">
          Plan your adventure and travel with ease. Explore the stories and content
          by travel bloggers and like-minded travellers.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
          {/* Card 1 */}
          <div className="bg-white text-center shadow-lg rounded-lg p-4 w-full max-w-xs">
            <h3 className="text-lg font-semibold text-[#03023C] mb-2">Holiday Vacation</h3>
            <img
              src="/images/Holiday-vacation-pic1.jpg"
              alt="Holiday Vacation"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <button className="bg-[#03023C] text-white px-6 py-2 rounded-lg text-base font-semibold hover:bg-[#BF6A02] transition duration-300">
              View
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-center shadow-lg rounded-lg p-4 w-full max-w-xs">
            <h3 className="text-lg font-semibold text-[#03023C] mb-2">Adventure</h3>
            <img
              src="/images/Holiday-vacation-pic2.jpg"
              alt="Adventure"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <button className="bg-[#03023C] text-white px-6 py-2 rounded-lg text-base font-semibold hover:bg-[#BF6A02] transition duration-300">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
