import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoTimeOutline, IoArrowBack } from "react-icons/io5";
import { MdChecklist } from "react-icons/md";
import { BiDish } from "react-icons/bi";
import Navbar from "../components/Navbar";

const FoodsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState(null);

  const getFood = async () => {
    try {
      const req = await fetch(`http://localhost:3000/foods/${id}`);
      const res = await req.json();
      setFood(res);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getFood();
  }, [id]);

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <span className="loading loading-spinner loading-lg text-warning"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 via-base-100 to-base-200">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

        <div className="card bg-base-100 shadow-2xl border border-base-content/5 overflow-hidden">
          
          {/* Image Section */}
          <figure className="relative h-48 sm:h-64 lg:h-96 bg-base-200 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-base-content/30 to-transparent z-10"></div>
            <img
              src={food.img}
              alt={food.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 z-20 badge badge-warning badge-lg font-bold shadow-lg">
              <BiDish className="mr-1" />
              Retsept
            </div>
          </figure>

          <div className="card-body p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
            
            {/* Title */}
            <div className="text-center space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold">
                <span className="bg-gradient-to-r from-warning via-orange-500 to-warning bg-clip-text text-transparent">
                  {food.name}
                </span>
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="h-1 w-16 sm:w-20 bg-warning rounded-full"></div>
                <BiDish className="text-warning text-xl sm:text-2xl" />
                <div className="h-1 w-16 sm:w-20 bg-warning rounded-full"></div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              
              {/* Left Column - Info & Ingredients */}
              <div className="space-y-6">
                
                {/* Cook Time Card */}
                <div className="bg-warning/5 border border-warning/20 rounded-2xl p-4 sm:p-5 hover:bg-warning/10 transition-colors">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-warning/20 p-3 rounded-xl">
                      <IoTimeOutline className="text-3xl sm:text-4xl lg:text-5xl text-warning" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-base-content/60 font-medium uppercase tracking-wider">
                        Tayyorlash vaqti
                      </p>
                      <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-base-content">
                        {food.cook_time} <span className="text-sm sm:text-base">daqiqa</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ingredients Section */}
                <div className="bg-base-200/50 border border-base-content/5 rounded-2xl p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4 sm:mb-5">
                    <div className="bg-warning/20 p-2 sm:p-3 rounded-xl">
                      <MdChecklist className="text-3xl sm:text-4xl lg:text-5xl text-warning" />
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-base-content">
                      Masalliqlar
                    </h3>
                  </div>

                  <ol className="space-y-2 sm:space-y-3">
                    {food.ingredients.map((ing, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 group hover:translate-x-1 transition-transform"
                      >
                        <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-warning/20 text-warning font-bold rounded-full text-sm group-hover:bg-warning group-hover:text-base-100 transition-colors">
                          {i + 1}
                        </span>
                        <span className="text-sm sm:text-base lg:text-lg font-medium text-base-content/80 pt-0.5">
                          {ing}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Description (if exists) */}
                {food.description && (
                  <div className="bg-gradient-to-br from-warning/5 to-orange-500/5 border border-warning/20 rounded-2xl p-4 sm:p-6">
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-base-content/80 italic">
                      {food.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Right Column - Steps */}
              <div className="space-y-6">
                <div className="bg-base-200/50 border border-base-content/5 rounded-2xl p-4 sm:p-6">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-warning flex items-center gap-2 sm:gap-3">
                    <span className="bg-warning/20 p-2 rounded-lg">
                      📝
                    </span>
                    Tayyorlash bosqichlari
                  </h3>

                  <ol className="space-y-3 sm:space-y-4">
                    {food.steps.map((step, i) => (
                      <li
                        key={i}
                        className="group"
                      >
                        <div className="flex items-start gap-3 sm:gap-4 bg-base-100 p-3 sm:p-4 rounded-xl border border-base-content/10 hover:border-warning/30 hover:shadow-md transition-all">
                          <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-warning to-orange-500 text-base-100 font-bold rounded-full text-sm sm:text-base shadow-lg">
                            {i + 1}
                          </span>
                          <p className="text-sm sm:text-base lg:text-lg font-medium text-base-content/90 pt-1 leading-relaxed">
                            {step}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-base-content/10">
              <button
                onClick={() => navigate(-1)}
                className="btn btn-warning btn-lg w-full sm:w-auto px-6 sm:px-8 text-base sm:text-lg font-bold shadow-lg hover:shadow-warning/50 transition-all duration-300 hover:scale-105"
              >
                <IoArrowBack className="text-xl" />
                Orqaga qaytish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodsDetail;