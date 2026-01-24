import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="flex justify-content items-center">
      <div>
        <img src={logo} className="w-[200px]" alt="" />
      </div>
      <div>
            <input type="search" required placeholder="Search" className="input w-[400px] h-[38px] focus:outline-none border-neutral border-solid" />
      </div>
    </div>
  );
};

export default Navbar;
