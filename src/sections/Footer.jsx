import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-cream text-center py-6 px-4 text-sm">
      <p>
        &copy; {new Date().getFullYear()} Bliss Café. Crafted with ☕ by Tracey Buentello.
      </p>
      <div className="mt-2 space-x-4">
        <a
          href="https://tleanne.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-caramel transition"
        >
          Portfolio
        </a>
        <a
          href="https://github.com/tleanne1/bliss-cafe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-caramel transition"
        >
          GitHub
        </a>
        <a
          href="mailto:hello@blisscafe.com"
          className="hover:text-caramel transition"
        >
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
