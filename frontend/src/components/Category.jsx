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
import italy from "../assets/italy.png"
import uae from "../assets/uae.png"
import france from "../assets/france.gif"
import { Link } from "react-router-dom";

const Category = () => {
  const bgColors = [
    "bg-primary",
    "bg-secondary",
    "bg-accent",
    "bg-info",
    "bg-success",
    "bg-warning",
    "bg-error",
  ];
  return (
    <div>
      <h1 className=" text-warning text-5xl text-center font-bold py-4">
        Xalqaro taomlar
      </h1>

      <div className="flex px-15 flex-wrap gap-[20px] mt-10 justify-center">
     <Link to="/uzbek">
     <div className="flex items-center justify-center flex-col flex-1">
      <section
        className="w-[85px] h-[85px] rounded-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${uzbek})` }}
      ></section>
          <p className="text-center py-4 font-bold text-sm">O'zbek <br /> taomlari</p>
        </div>
     </Link>
        <Link to="/yevropa">
        <div className="flex items-center justify-center flex-col flex-1">
        <section
        className="w-[85px] h-[85px] rounded-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${europe})` }}
      ></section>
          <p className="text-center py-4 font-bold text-sm">Yevropa <br /> taomlari</p>
        </div>
        </Link>
     <Link to="/xitoy">
     <div className="flex items-center justify-center flex-col flex-1">
      <section
        className="w-[85px] h-[85px] rounded-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${china})` }}
      ></section>
          <p className="text-center py-4 font-bold text-sm">Xitoy <br />taomlari</p>
          </div>
     </Link>
      <Link to="/koreya">
      <div className="flex items-center justify-center flex-col flex-1">
       <section
        className="w-[85px] h-[85px] rounded-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${korea})` }}
      ></section>
          <p className="text-center py-4 font-bold text-sm">Koreys <br /> taomlari</p>
        </div> 
      </Link>
       <Link to="/yapon">
       <div className="flex items-center justify-center flex-col flex-1">
        <section
        className="w-[85px] h-[85px] rounded-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${japan})` }}
      ></section>
          <p className="text-center py-4 font-bold text-sm">Yapon <br /> taomlari</p>
        </div>
       </Link>
     <Link to="/amerika">
     <div className="flex items-center justify-center flex-col flex-1">
       <section
        className="w-[85px] h-[85px] rounded-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${usa})` }}
      ></section>
          <p className="text-center py-4 font-bold text-sm">Amerika <br /> taomlari</p>
        </div> 
     </Link>
     <Link to="/hind">
     <div className="flex items-center justify-center flex-col flex-1">
       <section
        className="w-[85px] h-[85px] rounded-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${india})` }}
      ></section>
          <p className="text-center py-4 font-bold text-sm">Hind <br /> taomlari</p>
        </div> 
     </Link>
      <Link to="/misr">
      <div className="flex items-center justify-center flex-col flex-1">
       <section
        className="w-[85px] h-[85px] rounded-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${egypt})` }}
      ></section>
          <p className="text-center py-4 font-bold text-sm">Misr <br /> taomlari</p>
        </div> 
      </Link>
      <Link to="/saudiya">
      <div className="flex items-center justify-center flex-col flex-1">
       <section
        className="w-[85px] h-[85px] rounded-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${saudi})` }}
      ></section>
          <p className="text-center py-4 font-bold text-sm">Arabiston <br /> taomlari</p>
        </div> 
      </Link>
     <Link to="/rus">
     <div className="flex items-center justify-center flex-col flex-1">
       <section
         className="w-[85px] h-[85px] rounded-full bg-no-repeat bg-cover bg-center"
         style={{ backgroundImage: `url(${russia})` }}
       ></section>
           <p className="text-center py-4 font-bold text-sm">Rus <br /> taomlari</p>
        </div> 
     </Link>
     <Link to="/italyan">
     <div className="flex items-center justify-center flex-col flex-1">
      <section
         className="w-[85px] h-[85px] rounded-full bg-no-repeat bg-cover bg-center"
         style={{ backgroundImage: `url(${italy})` }}
       ></section>
           <p className="text-center py-4 font-bold text-sm">Italyan <br /> taomlari</p>
        </div> 
     </Link>
     <Link to="/dubay">
     <div className="flex items-center justify-center flex-col flex-1">
       <section
         className="w-[85px] h-[85px] rounded-full bg-no-repeat bg-cover bg-center"
         style={{ backgroundImage: `url(${uae})` }}
       ></section>
           <p className="text-center py-4 font-bold text-sm">Dubay <br /> taomlari</p>
        </div> 
     </Link>
      <Link to="/fransuz">
      <div className="flex items-center justify-center flex-col flex-1">
       <section
         className="w-[85px] h-[85px] rounded-full bg-no-repeat bg-cover bg-center"
         style={{ backgroundImage: `url(${france})` }}
       ></section>
           <p className="text-center py-4 font-bold text-sm">Fransuz <br /> taomlari</p>
        </div>
      </Link>
      </div>
    </div>
  );
};

export default Category;
