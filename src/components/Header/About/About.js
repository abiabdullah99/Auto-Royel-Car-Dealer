import React from "react";
import image from "../../../image/About.png";
import "./About.css";
const About = () => {
  return (
    <section>
      <div className="about-container">
        <div className="about-details font-mono" data-aos="fade-right" data-aos-duration="2000">
          <h1 className="text-2xl font-bold mb-4 text-white">
            <span>Best Luxury Cars</span>
          </h1>
          <h1 className="text-white text-3xl md:text-7xl font-semibold">
            Modern <br /> <span>Incredible </span>2022
          </h1>
        </div>
        <div className="about-image" data-aos="fade-left" data-aos-duration="2000">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
