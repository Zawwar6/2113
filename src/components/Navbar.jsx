import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ['Home', 'Services', 'About Us'];

  return (
    <div className="w-full h-20 bg-gradient-to-r from-white via-orange-500 to-gray-700 shadow-md fixed top-0 left-0 z-50 flex items-center justify-between px-8 md:px-16">

      
      {/* Left: Logo */}
      <div className="flex items-center gap-3 ">
      <a href="/">  <img src="/logo1.png" alt="Logo" className="h-18 drop-shadow-[0_4px_6px_rgba(255,255,255,1)] " /></a>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-12">
        {links.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase().replace(' ', '')}`}
            className="relative text-black font-semibold text-[18px] hover:text-black transition-all duration-300 group"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Right: Contact Button */}
      <div className="hidden md:flex">
        <a
          href="#contact"
          className="border-2 border-orange-500 text-orange-500 py-2 px-6 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 font-semibold"
        >
          Contact Us
        </a>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white text-2xl focus:outline-none"
        >
          <FaBars />
        </button>
      </div>

      {/* Full Screen Overlay Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-8 text-white text-2xl font-semibold transform ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-500 ease-in-out z-50`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-8 right-8 text-3xl focus:outline-none"
        >
          <FaTimes />
        </button>

        {links.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase().replace(' ', '')}`}
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-500 transition-all"
          >
            {item}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="border-2 border-orange-500 py-2 px-8 rounded-full hover:bg-orange-500 hover:text-white transition-all"
        >
          Contact Us
        </a>
      </div>

    </div>
  );
};

export default Navbar;
