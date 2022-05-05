import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsBehance } from "react-icons/bs";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-area">
      <div className="foot" id="Contact">
        <div className="foot-1 font-mono">
          <h6>
            Copyright ©2022 All rights reserved | This template is made with by
            <span className="span"> Abi Abdullah</span>
          </h6>
        </div>
        <div className="foot-2 font-mono">
          <h3>Newsletter</h3>
          <h5>Stay updated with our latest trends</h5>
          <input type="text" placeholder="Enter Your E-mail Address" />
          <button>Send</button>
        </div>
        <div className="foot-3 font-mono">
          <h3>Follow Me</h3>
          <h6>Let us be social</h6>
          <div className="social-icons">
            <BsFacebook className="social" />
            <BsTwitter className="social" />
            <BsInstagram className="social" />
            <BsBehance className="social" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
