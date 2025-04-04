import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#BF6A02] text-[#03023C] px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/trip-ez-logo.svg"
            alt="TripEZ Logo"
            className="h-16 w-16 rounded-full object-cover"
          />
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm font-medium">
          <a
            href="#about"
            className="hover:text-white transition duration-300"
          >
            Product
          </a>
          <a
            href="#contact"
            className="hover:text-white transition duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-4">
          <img src="/icons/Instagram.png" alt="Instagram" className="w-8 h-8" />
          <img src="/icons/Facebook.png" alt="Facebook" className="w-8 h-8" />
          <img src="/icons/TikTok.png" alt="TikTok" className="w-8 h-8" />
          <img src="/icons/LinkedIn.png" alt="LinkedIn" className="w-8 h-8" />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-6 text-center text-xs sm:text-sm text-[#03023C]">
        © Copyright 2025 TripEZ. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
