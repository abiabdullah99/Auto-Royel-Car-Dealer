import React from "react";
import image from "../../../image/About.png";
import "./About.css";
const About = () => {
  return (
    <section>
      <div className="about-container">
        <div className="about-details font-mono">
          <h1 className="text-7xl font-bold mb-4 text-white">
            <span>About</span> Us
          </h1>
          <h1 className="text-white text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur suscipit consectetur minima earum delectus assumenda
            velit magni vitae deserunt iste adipisci doloribus, tenetur beatae
            dignissimos vel, quis sequi sint libero.
          </h1>
        </div>
        <div className="about-image">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
