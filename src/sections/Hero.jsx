import React from "react";
import heroImg from "../assets/hero-coffee.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center px-6 border-b border-cool"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-mocha/60 z-0" />
      <div className="relative z-10 text-center text-white max-w-2xl drop-shadow-lg">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
          Bliss Café
        </h1>
        <p className="text-lg md:text-xl font-sans mb-6">
          Where every cup tells a story — handcrafted, cozy, unforgettable.
        </p>
        <a
          href="#menu"
          className="inline-block bg-espresso text-cream px-6 py-3 rounded-full font-semibold hover:bg-taupe transition"
        >
          View Our Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;
