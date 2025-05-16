import React from "react";
import heroImg from "../assets/hero-coffee.jpg"; // Add image to assets folder

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center px-6"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-dark/50 z-0" />
      <div className="relative z-10 text-center text-cream max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
          Bliss Café
        </h1>
        <p className="text-lg md:text-xl font-sans mb-6">
          Where every cup tells a story — handcrafted, cozy, unforgettable.
        </p>
        <a
          href="#menu"
          className="inline-block bg-caramel text-dark px-6 py-3 rounded-full font-semibold hover:bg-cream transition"
        >
          View Our Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;
