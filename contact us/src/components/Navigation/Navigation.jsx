import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="images/logo.png" alt="logo" />
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navigation;
