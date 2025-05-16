import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Menu from "./sections/Menu";

const App = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Menu />
    </div>
  );
};

export default App;
