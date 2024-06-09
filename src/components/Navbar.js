import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-new.png'; 

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // If we are scrolling down, hide the navbar
      setShowNavbar(false);
    } else {
      // If we are scrolling up, show the navbar
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed w-full bg-opacity-50 bg-blue-900 p-5 text-white z-50 transition-transform duration-300 ease-in-out ${
        showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <ul className="flex items-center">
        <li className="mr-auto">
          <img src={logo} alt="Neptune's Eye" className="h-15 w-20" /> 
        </li>
        <li className="hover:underline font-poppins ml-auto"><a href="#home">Home</a></li>
        <li className="hover:underline font-poppins ml-7"><a href="#analysis">Analysis</a></li>
        <li className="hover:underline font-poppins ml-7"><a href="#explore">Explore</a></li>
        <li className="hover:underline font-poppins ml-7"><a href="#learn">Learn</a></li>
        <li className="hover:underline font-poppins ml-7"><a href="#contact">Contact Us</a></li>
        <li className="ml-5">
          <a href="http://localhost:8501/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Live Demo
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
