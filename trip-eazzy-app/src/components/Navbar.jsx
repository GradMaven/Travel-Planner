import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // For hamburger icons

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`top-0 left-0 w-full z-50 sticky transition duration-300 ${
        isScrolled ? 'bg-[#BF6A02] shadow-lg' : 'bg-[#D9D9D9]'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <div>
          <img
            src="/trip-ez-logo.svg"
            alt="logo"
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>

        <div className="hidden md:flex space-x-10 text-sm">
          <a
            href="#about"
            className="text-[#03023C] hover:text-[#F5F5F5] transition duration-300"
          >
            About Us
          </a>
          <a
            href="#blog"
            className="text-[#03023C] hover:text-[#F5F5F5] transition duration-300"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-[#03023C] hover:text-[#F5F5F5] transition duration-300"
          >
            Contact Us
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={handleLoginClick}
            className="bg-[#D9D9D9] text-[#03023C] px-4 py-2 rounded-lg hover:ring-2 hover:ring-[#03023C] transition duration-300"
          >
            Login
          </button>
          <button
            onClick={handleSignupClick}
            className="bg-[#BF6A02] text-white px-4 py-2 rounded-lg hover:bg-[#03023C] transition duration-300"
          >
            Sign Up
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <X className="w-6 h-6 text-[#03023C]" /> : <Menu className="w-6 h-6 text-[#03023C]" />}
          </button>
        </div>
      </div>

   
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 text-sm">
          <a
            href="#about"
            className="block text-[#03023C] hover:text-[#BF6A02] transition duration-300"
          >
            About Us
          </a>
          <a
            href="#blog"
            className="block text-[#03023C] hover:text-[#BF6A02] transition duration-300"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="block text-[#03023C] hover:text-[#BF6A02] transition duration-300"
          >
            Contact Us
          </a>
          <hr className="border-gray-300" />
          <button
            onClick={handleLoginClick}
            className="w-full bg-[#D9D9D9] text-[#03023C] px-4 py-2 rounded-lg hover:ring-2 hover:ring-[#03023C] transition duration-300"
          >
            Login
          </button>
          <button
            onClick={handleSignupClick}
            className="w-full bg-[#BF6A02] text-white px-4 py-2 rounded-lg hover:bg-[#03023C] transition duration-300"
          >
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
