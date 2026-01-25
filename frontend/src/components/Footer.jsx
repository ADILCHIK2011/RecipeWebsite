import React from "react";
import logo from "../assets/logo.png";
import {
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full h-[450px] bg-base-content/10 mt-5 flex justify-center items-center gap-[50px]">
      <div className="space-y-5">
        <figure>
          <img src={logo} className="w-[200px]" alt="" />
        </figure>
        <div className="w-[200px] h-[50px] border-3 bg-base-100 border-solid border-secondary">
          <h1 className="text-center mt-2 text-lg">Yana tashrif buyuring!</h1>
        </div>
        <div className="space-y-3">
          <h1>Bizni kuzatib boring</h1>
          <div className="flex items-center gap-[50px] text-3xl text-base-content/50">
            <FaFacebook />
            <FaInstagram />
            <FaPinterest />
            <FaTiktok />
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="space-y-6">
      <div className="text-base font-bold flex gap-[10px]">
        <p>O'zbek </p>
        <p>Yevropa </p>
        <p>Xitoy </p>
        <p>Koreys </p>
        <p>Yapon </p>
        <p>Amerika </p>
        <p>Hind taomalari</p> 
        <p>Misr </p>
        <p>Arabiston </p>
        <p>Rus </p>
        <p>Dubay taomalari</p>
        <p>Italyan </p>
        <p>Fransuz </p>
      </div>
       <div className="flex items-center gap-[20px]">
       <IoCallOutline className="text-4xl"/>
       <h1 className="font-semibold">+998 (50) 540-21-22</h1>
       </div>
      </div>
    </footer>
  );
};

export default Footer;
