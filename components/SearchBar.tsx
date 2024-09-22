import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar: React.FC = () => {
  return (
    <div className="relative w-full h-[60vh] bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: 'url("/bgsearch.jpg")' }}>
      {/* Semi-transparent overlay for better contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Search bar container */}
      <div className="relative z-10 w-full max-w-2xl px-4 md:px-0 flex ">
        <input
          type="text"
          placeholder="WHO / WHEN / WHERE ?"
          className="w-full p-4 rounded-l-md border-8 border-r-4 border-black focus:outline-none"
        />
        <button className="bg-quimba p-4 rounded-r-md border-8 border-l-0 border-black flex items-center justify-center">
          <FaSearch className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
