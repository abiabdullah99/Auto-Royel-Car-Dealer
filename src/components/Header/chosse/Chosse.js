import React from "react";
import { ImPriceTags } from "react-icons/im";
import { AiFillCar } from "react-icons/ai";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import "./Chosse.css";
const Chosse = () => {
  return (
    <section>
      <h1 className="text-center pb-20 text-5xl text-white font-mono font-semibold">
        Why <span>Choose</span> Us?
      </h1>
      <div className="chosse-info font-mono">
        <div className="icons-part">
          <ImPriceTags />
        </div>
        <div className="description">
          <h1>Best Price </h1>
          <p>
            Our stress free finance department that can find financial solutions
            to save you money.
          </p>
        </div>
        <div className="icons-part">
          <AiFillCar />
        </div>
        <div className="description">
          <h1>Trusted By Thousands </h1>
          <p>
            We are known for our proven ability to maintain open responsiveness
            to our clients throughout the transaction process and beyond.
          </p>
        </div>
        <div className="icons-part">
          <VscWorkspaceTrusted />
        </div>
        <div className="description">
          <h1>Wide Range of Brands </h1>
          <p>
            We are working with a variety of partners to ensure that this
            innovative and highly effective products
          </p>
        </div>
      </div>
    </section>
  );
};

export default Chosse;
