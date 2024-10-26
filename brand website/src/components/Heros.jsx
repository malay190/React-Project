import React from "react";

import "./Heros.css";

const Heros = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon image" />
            <img src="/images/flipkart.png" alt="flipkart image" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="shoe image" />
      </div>
    </main>
  );
};

export default Heros;
