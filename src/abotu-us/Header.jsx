import React, { useState } from 'react';
import { IoReorderThreeOutline, IoCloseOutline } from 'react-icons/io5';
import '.././index.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ['Join Now','Home', 'About', 'Contact Us'];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);



  return (
    <div className=" w-full h-16 flex items-center justify-between px-4">
      {/* Logo Section */}
      <div className="text-lg font-bold ">
        <img src="src\assets\code-lint-jpg-logo.jpg" alt="Logo" className='w-14 rounded-full' />
      </div>

      {/* Menu for larger screens */}
      <div className="hidden md:flex justify-center flex-1 space-x-8 text-xl">
        {menuItems.map((item) => (
          <span
            key={item}
            className="cursor-pointer text-blue-200 hover:text-blue-200"
          >
            {item}
          </span>
        ))}
        
      </div>

      <button className='hidden md:block button-size'>Join now</button>

      {/* Hamburger Menu Toggle */}
      <div className="md:hidden " onClick={toggleMenu}>
        {menuOpen ? <IoCloseOutline size={30} /> : <IoReorderThreeOutline size={30} />}
      </div>

      {/* Overlay and Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-blue-200 w-52 shadow-lg z-20 flex flex-col  items-start pt-10 px-5 space-y-1 transition-transform duration-[600ms]  ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
          
        }`}
      >
        {menuItems.map((item) => (
          <span
            key={item}
            className="cursor-pointer hover:text-blue-200 border-slate-800 border-2 rounded bg-black text-white px-1 py-1 gap-0 w-full"
            onClick={closeMenu}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Overlay for closing the menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
};

export default Header;