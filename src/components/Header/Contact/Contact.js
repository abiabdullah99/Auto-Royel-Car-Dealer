import React from "react";
import "./Contact.css";
import logo from "../../../image/contact.png";
const Contact = () => {
  return (
    <section>
      <h1 className="text-5xl text-center font-mono font-semibold">
        <span>Get In Touch</span>
      </h1>
      <p className="text-white text-center font-semibold text-xl">
        Let'<span>s Talk About</span> Everythink
      </p>
      <div className="contact-container">
        <div className="contact-logo" data-aos="fade-right" data-aos-duration="2000">
          <img src={logo} alt="" />
        </div>
        <form className="contact-box font-mono" data-aos="fade-left" data-aos-duration="2000">
          <div className="from-group">
            <input type="text" id="name" placeholder="Enter Your Name" />
          </div>
          <div className="from-group">
            <input type="text" placeholder="Enter Your Email" />
          </div>
          <div className="from-group">
            <input type="number" placeholder="Enter Your Phone Number" />
          </div>
          <div className="from-group">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>
          <button className="text-lg"><span>Send Message &#10132;</span></button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
