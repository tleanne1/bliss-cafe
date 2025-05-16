import React from "react";

const menuItems = [
  {
    name: "Classic Latte",
    desc: "Fresh espresso with steamed milk and a touch of foam.",
    price: "$4.50",
  },
  {
    name: "Vanilla Cold Brew",
    desc: "Smooth cold brew served over ice with vanilla syrup.",
    price: "$5.00",
  },
  {
    name: "Caramel Macchiato",
    desc: "Layered espresso with creamy milk and rich caramel drizzle.",
    price: "$5.25",
  },
  {
    name: "Chai Tea Latte",
    desc: "Spiced black tea blended with milk and honey.",
    price: "$4.75",
  },
  {
    name: "Mocha Bliss",
    desc: "Espresso meets dark chocolate and whipped cream.",
    price: "$5.50",
  },
];

const Menu = () => {
  return (
    <section id="menu" className="bg-taupe py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-espresso mb-3">
          Our Featured Menu
        </h2>
        <p className="text-espresso text-base max-w-xl mx-auto">
          Sip, savor, repeat. These are a few of our café favorites.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-cream rounded-xl p-6 shadow-card border border-espresso/20"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-espresso">{item.name}</h3>
              <span className="text-sm font-medium text-espresso">{item.price}</span>
            </div>
            <p className="text-sm text-espresso/80">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
