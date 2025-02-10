import React from "react";
import "../assets/navbar.css";

export const Navbar = () => {
  return (
    <div className="pages">
      <div className="nav-left">
        <a href="#" className="nav">
          Navbar
        </a>
      </div>
      <div className="nav-right">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Services</a>
        <a href="#">Products</a>
      </div>
    </div>
  );
};
