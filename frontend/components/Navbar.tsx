import React from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon, ShoppingCartIcon, UserCircleIcon, MapPinIcon } from '@heroicons/react/24/outline'; // Hero Icons for example

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
              {/* Add your logo image here */}
              <img src="/logo.png" alt="Quimba Logo" className="h-8 w-8" />
              <span className="ml-2 text-lg font-bold text-teal-400">Quimba</span>
            
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center w-full max-w-md mx-4">
          <input
            type="text"
            placeholder="WHO / WHEN / WHERE?"
            className="w-full py-2 px-4 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button className="absolute right-2">
            <MagnifyingGlassIcon className="h-5 w-5 text-teal-400" />
          </button>
        </div>

        {/* Icons and Other Links */}
        <div className="flex items-center space-x-4">
          {/* Location */}
          <div className="flex items-center">
            <MapPinIcon className="h-6 w-6 text-teal-400" />
            <span className="ml-1">PR, 00918</span>
          </div>
          
          {/* Cart */}
          <Link href="/cart">
          
              <ShoppingCartIcon className="h-6 w-6 text-teal-400" />
            
          </Link>

          {/* User Profile */}
          <Link href="/profile">
          
              <UserCircleIcon className="h-6 w-6 text-teal-400" />
            
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
