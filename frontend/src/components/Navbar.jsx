import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Bosh sahifa" },
    { to: "/kategoriyalar", label: "Kategoriyalar" },
    { to: "/add-recipe", label: "Retsept qo'shish" },
    { to: "/biz-haqimizda", label: "Biz haqimizda" },
    { to: "/contact", label: "Murojaat qilish" },
  ];

  return (
    <nav className="w-full py-4 bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <Link to="/" className="flex-shrink-0">
            <img 
              src={logo} 
              className="w-20 sm:w-24 lg:w-28 hover:scale-105 transition-transform duration-300" 
              alt="Logo" 
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.to}>
                <Link 
                  to={link.to}
                  className="px-4 py-2 rounded-lg text-base font-medium text-base-content/80 hover:text-error hover:bg-error/10 transition-all duration-300"
                >
                  {link.label}
                </Link>
                {index < navLinks.length - 1 && (
                  <span className="text-base-content/30 select-none">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden btn btn-ghost btn-circle text-2xl"
            aria-label="Menu"
          >
            {isOpen ? <IoClose /> : <HiMenuAlt3 />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-lg text-base font-medium text-base-content/80 hover:text-error hover:bg-error/10 transition-all duration-300 border border-base-content/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;