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
    <footer className="w-full bg-base-content/10 mt-5 flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-center items-center lg:gap-20 xl:gap-[300px] gap-10 py-10 px-4 sm:px-6">
        
        <div className="space-y-5 flex flex-col items-center lg:items-start">
          <figure>
            <img src={logo} className="w-40 sm:w-[200px]" alt="Logo" />
          </figure>
    
          <div className="w-full sm:w-[200px] h-[50px] border-2 bg-base-100 border-error rounded-xl shadow-md flex items-center justify-center">
            <h1 className="text-center text-base sm:text-lg font-medium px-2">
              Yana tashrif buyuring!
            </h1>
          </div>
    
          <div className="space-y-3">
            <h1 className="font-semibold text-center lg:text-left">
              Bizni kuzatib boring
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-[40px] text-2xl sm:text-3xl text-base-content/50">
              <FaFacebook className="hover:text-base-content/70 transition-colors cursor-pointer" />
              <FaInstagram className="hover:text-base-content/70 transition-colors cursor-pointer" />
              <FaPinterest className="hover:text-base-content/70 transition-colors cursor-pointer" />
              <FaTiktok className="hover:text-base-content/70 transition-colors cursor-pointer" />
              <FaYoutube className="hover:text-base-content/70 transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
    
        <div className="space-y-6 flex flex-col items-center lg:items-start">
          <div className="text-sm sm:text-base font-bold flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 max-w-[300px] sm:max-w-[350px]">
            <p>O'zbek</p>
            <p>Yevropa</p>
            <p>Xitoy</p>
            <p>Koreys</p>
            <p>Yapon</p>
            <p>Amerika</p>
            <p>Hind</p>
            <p>Misr</p>
            <p>Arab</p>
            <p>Rus</p>
            <p>Dubay</p>
            <p>Italyan</p>
            <p>Fransuz</p>
          </div>
    
          <div className="flex items-center gap-3 sm:gap-4">
            <IoCallOutline className="text-3xl sm:text-4xl" />
            <h1 className="font-semibold text-base sm:text-lg">
              +998 (12) 345-67-89
            </h1>
          </div>
        </div>
    
      </div>
    
      <div className="w-full bg-error/10 border-t border-error/30 py-6 px-4">
        <p className="max-w-3xl mx-auto text-center text-sm md:text-base italic text-base-content/80 leading-relaxed">
          Ba'zi texnik sabablarga ko'ra hozircha ijtimoiy tarmoqlardagi sahifalarimiz
          ishlamayapti. Buni imkon qadar tezroq tuzatishga harakat qilamiz.
          Noqulayliklar uchun uzr so'raymiz.
        </p>
      </div>
    
    </footer>
  );
};

export default Footer;