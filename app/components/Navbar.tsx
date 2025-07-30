import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container flex items-center justify-between">
        <ul className="flex gap-8">
          <li>
            <a 
              href="#home" 
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium"
            >
              About Me
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar