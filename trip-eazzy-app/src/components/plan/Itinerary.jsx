import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Itinerary() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    tripName: '',
    tripType: '',
    travelType: '',
    startDate: '',
    endDate: '',
    packingList: '',
    documents: []
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (e.target.type === 'file') {
      setFormData({ ...formData, [name]: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {
    // Navigate to the next page with form data
    navigate('/accommodation', { state: formData });
  };

  return (
    <div className='bg-[#D9D9D9]'>
      <form className='max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-4'>
        <div>
          <label htmlFor="tripName" className='block text-lg font-semibold text-[#03023C]'>Trip Name</label>
          <input
            name="tripName"
            type="text"
            placeholder='Give your trip a name...'
            value={formData.tripName}
            onChange={handleChange}
            className='bg-[#F3E3C0] w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring'
          />
        </div>

        <div>
          <label htmlFor="tripType" className='block text-lg font-semibold text-[#03023C]'>Type</label>
          <select
            name="tripType"
            value={formData.tripType}
            onChange={handleChange}
            className='w-full mt-1 p-3 border border-gray-300 rounded-lg bg-[#F3E3C0] focus:outline-none focus:ring-2 focus:ring-[#D4A373]'
          >
            <option value="">Select Trip Type</option>
            <option value="adventure">Adventure</option>
            <option value="vacation">Vacation</option>
            <option value="business">Business</option>
          </select>
        </div>

        <div>
          <select
            name="travelType"
            value={formData.travelType}
            onChange={handleChange}
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-[#F3E3C0] focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
          >
            <option value="">Select Type of Travel</option>
            <option value="solo">Solo</option>
            <option value="group">Group</option>
          </select>
        </div>

        <div>
          <label htmlFor="startDate" className='block text-lg font-semibold text-[#03023C]'>Start Date</label>
          <input
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
            className='bg-[#F3E3C0] w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A373]'
          />
        </div>

        <div>
          <label htmlFor="endDate" className='block text-lg font-semibold text-[#03023C]'>End Date</label>
          <input
            name="endDate"
            type="date"
            value={formData.endDate}
            onChange={handleChange}
            className='bg-[#F3E3C0] w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A373]'
          />
        </div>

        <div>
          <label htmlFor="packingList" className="block text-lg font-semibold text-gray-700">Packing List</label>
          <textarea
            name="packingList"
            placeholder="List your items here..."
            value={formData.packingList}
            onChange={handleChange}
            rows="4"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-[#F3E3C0] focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
          ></textarea>
        </div>

        <div>
          <label htmlFor="documents" className="block text-lg font-semibold text-gray-700">Documents</label>
          <input
            name="documents"
            type="file"
            multiple
            onChange={handleChange}
            className='w-full mt-1 p-3 border border-gray-300 rounded-lg bg-[#F3E3C0] focus:outline-none focus:ring-2 focus:ring-[#D4A373]'
          />
        </div>

        <div>
          <button
            type="button"
            onClick={handleSubmit}
            className='bg-[#BF6A02] text-white px-8 py-3 mt-4 mx-auto rounded-lg text-lg font-semibold hover:bg-[#03023C]'
          >
            Create a Plan
          </button>
        </div>
      </form>
    </div>
  );
}

export default Itinerary;
