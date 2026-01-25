import React from "react";
import logo from "../assets/logo.png";
import {Link} from "react-router-dom";
import { GoHeart } from "react-icons/go";
const Navbar = () => {
  return (
    <div className="w-full py-2 bg-base-100 ">
      <div className="flex justify-center gap-[200px] items-center">
     <Link to="/">
     <div>
        <img src={logo} className="w-[200px]" alt="" />
      </div>
     </Link>
      <div>
            <input type="search" placeholder="Ovqat yoki retseptni qidiring" className="input w-[400px] h-[38px] focus:outline-none border-neutral border-solid border-warning" />
      </div>
      <div className="flex items-center gap-[20px]">
        <p className="text-2xl">Biz haqimizda</p>
        <GoHeart className="text-3xl text-warning "/>
      </div>
      </div> 
       
    </div>
  );
};

export default Navbar;
