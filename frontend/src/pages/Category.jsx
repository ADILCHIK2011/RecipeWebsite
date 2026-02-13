import React from "react";
import uzbek from "../assets/uzbek.jpeg"
import europe from "../assets/europe.png"
import china from "../assets/china.png"
import korea from "../assets/korea.png"
import japan from "../assets/japan.jpg"
import usa from "../assets/usa.jpg"
import india from "../assets/india.png"
import egypt from "../assets/egypt.png"
import saudi from "../assets/saudi.png"
import russia from "../assets/russia.png"
import all_foods from "../assets/all_flags.jpg"
import italy from "../assets/italy.png"
import uae from "../assets/uae.png"
import france from "../assets/france.gif"
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Category = () => {
  const categories = [
    { to: "/hammasi", img: all_foods, name: "Hammasi" },
    { to: "/uzbek", img: uzbek, name: "O'zbek" },
    { to: "/yevropa", img: europe, name: "Yevropa" },
    { to: "/xitoy", img: china, name: "Xitoy" },
    { to: "/koreya", img: korea, name: "Koreys" },
    { to: "/yapon", img: japan, name: "Yapon" },
    { to: "/amerika", img: usa, name: "Amerika" },
    { to: "/hind", img: india, name: "Hind" },
    { to: "/misr", img: egypt, name: "Misr" },
    { to: "/saudiya", img: saudi, name: "Arabiston" },
    { to: "/rus", img: russia, name: "Rus" },
    { to: "/italyan", img: italy, name: "Italyan" },
    { to: "/dubay", img: uae, name: "Dubay" },
    { to: "/fransuz", img: france, name: "Fransuz" },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      <nav>
        <Navbar/>
      </nav>
      
      {/* Title */}
      <h1 className="text-warning text-3xl sm:text-4xl lg:text-5xl text-center font-bold py-4 sm:py-6 px-4">
        Xalqaro taomlar
      </h1>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              to={category.to}
              className="group"
            >
              <div className="flex items-center justify-center flex-col">
                {/* Image Circle */}
                <div className="relative">
                  <div className="absolute inset-0 bg-warning rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <section
                    className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-no-repeat bg-cover bg-center border-4 border-base-100 shadow-lg group-hover:border-warning group-hover:scale-110 transition-all duration-300"
                    style={{ backgroundImage: `url(${category.img})` }}
                  ></section>
                </div>
                
                {/* Label */}
                <p className="text-center mt-2 sm:mt-3 font-bold text-xs sm:text-sm lg:text-base text-base-content/80 group-hover:text-warning transition-colors duration-300">
                  {category.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;