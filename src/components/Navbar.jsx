import React from "react";
import logo from "../assets/karya logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#ff6200] p-2 text-white flex justify-between">
      <h1 className="text-xl font-semibold">
        <img className="w-[50px] h-auto" src={logo} alt="" />
      </h1>
      <ul className="flex gap-5 items-center">
        <a href="/">Home</a>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
