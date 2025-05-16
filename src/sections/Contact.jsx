import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-caramel text-dark py-20 px-6 md:px-20 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Visit Us or Say Hello!
        </h2>
        <p className="text-base md:text-lg mb-6">
          Whether you're grabbing a quick cup or staying a while, we’d love to see you.
        </p>
        <p className="text-sm font-medium mb-2">
          📍 123 Bliss Avenue, Brewtown, USA
        </p>
        <p className="text-sm font-medium mb-2">
          📞 (555) 123-4567
        </p>
        <p className="text-sm font-medium">
          ✉️ hello@blisscafe.com
        </p>
        <a
          href="mailto:hello@blisscafe.com"
          className="inline-block mt-6 px-6 py-3 bg-dark text-cream rounded-full hover:bg-coffee transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Contact;
