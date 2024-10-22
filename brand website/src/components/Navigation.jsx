import React from "react";

import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <div className="brand-logo">
        <img src="/images/brand_logo.png" alt="brand logo" />
      </div>
      <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="login_button">Login</button>
    </nav>
  );
};

export default Navigation;
