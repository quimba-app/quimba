import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
const NavBar: React.FC = () => {
  return (
    <nav className="bg-black p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="/qlogo.png" alt="Quimba Logo" className="h-16" />
        <span className="text-quimba text-4xl font-bold">Quimba</span>
      </div>

      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <div className="bg-quimba text-black font-bold px-3 py-1 rounded">
          PR, 00918
        </div>
        <FaShoppingCart className="text-quimba text-2xl" />
        <FaUser className="text-quimba text-2xl" />
      </div>
    </nav>
  );
};

export default NavBar;
