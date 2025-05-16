import React from "react";

const testimonials = [
  {
    quote:
      "Bliss Café is my go-to spot. The vibe is calm, and the coffee? Always perfect.",
    name: "Samantha R.",
  },
  {
    quote:
      "Their chai latte changed my life. Cozy, flavorful, and the friendliest baristas.",
    name: "Jordan W.",
  },
  {
    quote:
      "I love studying here. Great ambiance, fast Wi-Fi, and the best pastries in town.",
    name: "Elena M.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-cream py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-coffee mb-3">
          What Our Guests Say
        </h2>
        <p className="text-dark text-base max-w-xl mx-auto">
          Real experiences from our amazing customers.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-card border border-caramel/20"
          >
            <p className="text-sm text-dark/90 italic mb-4">"{t.quote}"</p>
            <h4 className="text-sm font-semibold text-coffee">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
