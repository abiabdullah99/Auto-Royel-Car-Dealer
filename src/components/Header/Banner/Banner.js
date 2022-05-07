import React from "react";
import Slide from "../../../image/slide.png";
import banner from "../../../image/banner.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className="banner-container">
        <div className="banner-details font-mono">
          <img className="silde" src={Slide} alt="" />
          <h1 className="text-white text-4xl md:pl-20 pl-10 pb-4 font-bold">
            Best <span>Luxurious Cars</span> Here
          </h1>
          <h2 className="text-6xl md:pl-20 pb-4 pl-10 font-semibold">
            <span>Popular Vehicle Dealership</span>
          </h2>
          <p className="text-white text-xl pl-10 md:pl-20 pb-4">
            Find the <span>Perfect Car</span> With Our Car Finder Tool
          </p>
          <button className="ml-20 banner-btn">GO.</button>
        </div>
        <div className="banner-image">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
