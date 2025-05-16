import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-navy/60 backdrop-blur-md">
      <nav className="flex justify-between items-center px-6 md:px-20 py-4">
        <a
          href="#home"
          className="text-xl font-display font-bold text-white"
        >
          Bliss Café
        </a>
        <ul className="flex space-x-6 font-sans text-white text-sm font-medium">
          <li>
            <a href="#about" className="hover:text-lavender transition">
              About
            </a>
          </li>
          <li>
            <a href="#menu" className="hover:text-lavender transition">
              Menu
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-lavender transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
