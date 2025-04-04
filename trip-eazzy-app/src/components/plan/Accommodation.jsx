import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Accommodation() {
  const location = useLocation();
  const itineraryData = location.state;  // Get data from the previous route (Itinerary)

  const [countries, setCountries] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [hotelQuery, setHotelQuery] = useState('');
  const [selectedHotel, setSelectedHotel] = useState('');
  const [selectedTransport, setSelectedTransport] = useState('');
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [savedSelections, setSavedSelections] = useState(null);

  // Fetch country list
  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const countries = await response.json();
      countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
      setCountries(countries);
    }
    fetchCountries();
  }, []);

  // Fetch hotels based on search query
  useEffect(() => {
    if (hotelQuery) {
      async function searchHotels() {
        const response = await fetch(`https://api.booking.com/v1/hotels?search=${hotelQuery}`, {
          headers: {
            'Authorization': 'Bearer YOUR_BOOKING_COM_API_KEY',
          },
        });
        const data = await response.json();
        setHotels(data);
      }
      searchHotels();
    }
  }, [hotelQuery]);

  // Handle multiple activities selection
  function handleActivityChange(event) {
    const selectedOptions = Array.from(event.target.selectedOptions).map(option => option.value);
    setSelectedActivities(selectedOptions);
  }

  // Save selections and combine with itinerary data
  function handleSaveSelections(event) {
    event.preventDefault();

    const selections = {
      country: selectedCountry || itineraryData?.country, // Combine with itinerary data
      hotel: selectedHotel,
      transport: selectedTransport,
      activities: selectedActivities
    };

    localStorage.setItem('travelSelections', JSON.stringify(selections));
    setSavedSelections(selections);
  }

  // Load stored selections 
  useEffect(() => {
    const storedSelections = JSON.parse(localStorage.getItem('travelSelections'));
    if (storedSelections) {
      setSavedSelections(storedSelections);
    }
  }, []);

  return (
    <div className='bg-[#D9D9D9]'>
      <form onSubmit={handleSaveSelections} action="" className='max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-4'>
        <div>
          <label htmlFor="country" className='block text-lg font-semibold text-[#03023C]'>Which country are you visiting?</label>
          <select
            name="country"
            id="countryvisit"
            className='w-full mt-1 p-3 border border-gray-300 rounded-lg bg-[#F3E3C0] focus:outline-none focus:ring-2 focus:ring-[#D4A373]'
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.name.common} value={country.name.common}>
                {country.name.common}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="hotel" className='block text-lg font-semibold text-[#03023C]'>Which hotel are you staying at?</label>
          <input
            type="text"
            id="hotel"
            placeholder="Search for a hotel..."
            className='w-full mt-1 p-3 border border-gray-300 rounded-lg bg-[#F3E3C0] focus:outline-none focus:ring-2 focus:ring-[#D4A373]'
            value={hotelQuery}
            onChange={(e) => setHotelQuery(e.target.value)}
          />
          <ul id="hotelResults" className="mt-2 bg-white border border-gray-300 rounded-lg shadow-md">
            {hotels.map((hotel) => (
              <li
                key={hotel.name}
                className="p-2 cursor-pointer hover:bg-[#F3E3C0]"
                onClick={() => {
                  setSelectedHotel(hotel.name);
                  setHotelQuery(hotel.name);
                }}
              >
                {hotel.name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <label htmlFor="transport" className='block text-lg font-semibold text-[#03023C]'>Mode of Transport</label>
          <select
            name="transport"
            id="transportmode"
            className='w-full mt-1 p-3 border border-gray-300 rounded-lg bg-[#F3E3C0] focus:outline-none focus:ring-2 focus:ring-[#D4A373]'
            value={selectedTransport}
            onChange={(e) => setSelectedTransport(e.target.value)}
          >
            <option value="">Select mode of transport</option>
            <option value="flight">Flight</option>
            <option value="train">Train</option>
            <option value="bus">Bus</option>
          </select>
        </div>

        <div>
          <label htmlFor="activity" className='block text-lg font-semibold text-[#03023C]'>Activities</label>
          <select
            name="activity"
            id="activity"
            multiple
            className='w-full mt-1 p-3 border border-gray-300 rounded-lg bg-[#F3E3C0] focus:outline-none focus:ring-2 focus:ring-[#D4A373]'
            onChange={handleActivityChange}
          >
            <option value="attending_conferences">Attending Conferences</option>
            <option value="meeting_friends">Meeting Friends</option>
            <option value="professional_meetings">Professional Meetings</option>
            <option value="beach">Beach</option>
            <option value="hiking">Hiking</option>
            <option value="swimming">Swimming</option>
            <option value="mountain_climbing">Mountain Climbing</option>
            <option value="club_partying">Club and Partying</option>
          </select>
        </div>

        <button
          type='submit'
          className='bg-[#BF6A02] text-white px-8 py-3 mt-4 mx-auto rounded-lg text-lg font-semibold hover:bg-[#03023C]'
        >
          Complete!
        </button>
      </form>

      {savedSelections && (
        <div className="mt-6 bg-white p-6 rounded-2xl shadow-lg max-w-xl mx-auto">
          <h2 className="text-lg font-bold text-[#03023C] mb-4">My Travel Plan</h2>
          <p><strong>Country:</strong> {savedSelections.country || "Not selected"}</p>
          <p><strong>Hotel:</strong> {savedSelections.hotel || "Not selected"}</p>
          <p><strong>Transport:</strong> {savedSelections.transport || "Not selected"}</p>
          <p><strong>Activities:</strong> {savedSelections.activities.length > 0 ? savedSelections.activities.join(", ") : "None selected"}</p>
        </div>
      )}
    </div>
  );
}

export default Accommodation;
