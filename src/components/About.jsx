import React from "react";
import "../assets/about.css";
import myimg from "../assets/jett.png";
export const About = () => {
  return (
    <div className="about-us">
      <div className="info">
        <h1>Heading content</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla error
          quo, corporis doloribus amet sint ex vero odio similique ipsa? Animi
          fugit deleniti ullam enim suscipit sit ex iure, qui repellendus
          placeat iste vitae!
        </p>
      </div>
      <div className="image-info">
        <img src={myimg} alt="about-image" />
      </div>
    </div>
  );
};
