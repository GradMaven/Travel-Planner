import React, { useState, useEffect }  from 'react';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={` top-0 left-0 w-full h-25 z-50 sticky transition duration-300 ${
      isScrolled ? 'bg-[#BF6A02] shadow-lg' : 'bg-[#D9D9D9]'
    }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
     
        <div >
          <img src="/trip-ez-logo.svg" alt="logo" className='h-18, w-18 rounded-full object-cover' />
        </div>
        <div className="hidden md:flex space-x-10">
          <a href="#about" className="text-[#03023C] hover:text-[#F5F5F5] transition duration-300">
            About Us
          </a>
          <a href="#blog" className="text-[#03023C] hover:text-[#F5F5F5] transition duration-300">
            Blog
          </a>
          <a href="#contact" className="text-[#03023C] hover:text-[#F5F5F5] transition duration-300">
            Contact Us
          </a>
        </div>

        <div className="flex items-center space-x-6">
          <button className="bg-[#D9D9D9] text-[#03023C] px-6 py-2 rounded-lg ring-inset hover:ring-4 hover:border-[#03023C]  transition duration-300">
            Login
          </button>
          <button className="bg-[#BF6A02] text-white px-6 py-2 rounded-lg hover:bg-[#03023C] transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
