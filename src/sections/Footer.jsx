import React from "react";

const Footer = () => {
  return (
    <footer className="bg-mocha text-cream text-center py-6 px-4 text-sm border-t border-taupe">
      <p className="mb-2">
        &copy; {new Date().getFullYear()} <strong>Bliss Café</strong>. Crafted with ☕ by Tracey Buentello.
      </p>
      <div className="space-x-4">
        <a
          href="https://tleanne.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-taupe transition"
        >
          Portfolio
        </a>
        <a
          href="https://github.com/tleanne1/bliss-cafe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-taupe transition"
        >
          GitHub
        </a>
        <a
          href="mailto:hello@blisscafe.com"
          className="hover:text-taupe transition"
        >
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
