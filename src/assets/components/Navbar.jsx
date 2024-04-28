import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center "> 
        <img src="https://i.ibb.co/QjLmtvM/Screenshot-2024-04-28-at-15-37-41-Logo-Maker-Create-Stunning-Logos-Instantly-2024.png" alt="FFA Logo" className="w-10 h-10 mr-2 " />
        <Link to="/" className="text-white text-lg font-kleeOne font-semibold">Food for All</Link>
      </div>
      <div className="flex justify-center"> 
        <Link to="/" className="text-white text-lg font-kleeOne font-semibold">Food for All</Link>
      </div>
      <div className="flex items-center space-x-4"> 
        <Link to="/about" className="text-white hover:text-yellow-500">About Us</Link>
        <Link to="/signup" className="text-white hover:text-yellow-500">Sign Up</Link>
        <Link to="/login" className="text-white hover:text-yellow-500">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
