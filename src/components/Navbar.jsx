import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-cream shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center px-6 md:px-20 py-4">
        <a href="#" className="text-xl font-display font-bold text-coffee">
          Bliss Café
        </a>
        <ul className="flex space-x-6 font-sans text-dark text-sm font-medium">
          <li><a href="#about" className="hover:text-caramel">About</a></li>
          <li><a href="#menu" className="hover:text-caramel">Menu</a></li>
          <li><a href="#contact" className="hover:text-caramel">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
