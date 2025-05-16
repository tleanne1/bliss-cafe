import React from "react";
import aboutImg from "../assets/about-coffee.jpg"; // Add this image to your assets folder

const About = () => {
  return (
    <section className="bg-cream py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src={aboutImg}
            alt="About Bliss Café"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-coffee mb-4">
            About Bliss Café
          </h2>
          <p className="text-dark text-base leading-relaxed mb-4">
            Tucked into the heart of the city, Bliss Café was born from a love of slow mornings, warm cups, and good conversations. We serve more than coffee — we serve connection, calm, and community.
          </p>
          <p className="text-dark text-base leading-relaxed">
            Whether you're grabbing your daily latte or settling in with a book, our space is designed to make you feel at home.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
