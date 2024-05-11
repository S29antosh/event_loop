import React from "react";
import logo from "../assets/karya logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-black  mb-14 shadow-md px-10 py-2 bg-white flex justify-between gap-5  ">
      <h1 className="text-xl p-1 bg-[#ff6200] rounded-full font-semibold">
        <img className="w-[50px] p-1 rounded-full h-auto" src={logo} alt="" />
      </h1>
      <ul className="flex gap-5 items-center">
        <a className="hover:font-semibold" href="/">
          Home
        </a>
        <a className="hover:font-semibold" href="/">
          About
        </a>
        <a className="hover:font-semibold" href="/">
          Contact
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
