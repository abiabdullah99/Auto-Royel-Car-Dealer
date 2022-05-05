import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { TiThMenuOutline } from "react-icons/ti";
import { GiCarWheel } from "react-icons/gi";
import './Navbar.css'
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
 
          {/* Navbar Icons */} 
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden text-white absolute right-0 top-10 icon"
        >
          {open ? <ImCross></ImCross> : <TiThMenuOutline></TiThMenuOutline>}
        </div>
        <div className="navbar">
          <div className="logo">
            <p className="logo font-mono">
              <GiCarWheel></GiCarWheel> Auto Royel
            </p>
          </div>
          <div
            className={`absolute md:static font-mono duration-500 ease-in ${
              open ? "top-20 flex flex-col" : "top-[-120px]"
            }`}
          >
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/gallery"
            >
              About
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/blog"
            >
              Products
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/about"
            >
              Contact
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/login"
            >
              LogIn
            </NavLink>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
