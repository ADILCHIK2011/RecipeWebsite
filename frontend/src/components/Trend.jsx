import React, { useEffect, useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { MdChecklist } from "react-icons/md";
import { BiDish } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Trend = () => {
  const [trendda, setTrendda] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getTrendda = async () => {
      try {
        const req = await fetch("http://localhost:3000/foods");
        if (!req.ok) throw new Error("Server response was not ok");

        const res = await req.json();
        const foodsArray = Array.isArray(res) ? res : res.foods || [];
        setTrendda(foodsArray);
      } catch (err) {
        console.error("FETCH ERROR:", err);
      } finally {
        setLoading(false);
      }
    };

    getTrendda();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <span className="loading loading-spinner loading-lg text-warning"></span>
      </div>
    );
  }

  const trendFood = trendda.find((food) => Number(food.id) === 34);

  if (!trendFood) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-base-content/60">Hech narsa topilmadi</p>
      </div>
    );
  }

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-base-100 to-base-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-warning/10 px-6 py-2 rounded-full border border-warning/30">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-warning"></span>
            </span>
            <span className="text-sm font-semibold text-warning uppercase tracking-wider">
              Trendda #1
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-warning via-orange-500 to-warning bg-clip-text text-transparent">
              Hozir trendda
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-16 bg-warning rounded-full"></div>
            <BiDish className="text-warning text-2xl" />
            <div className="h-1 w-16 bg-warning rounded-full"></div>
          </div>
        </div>

        {/* Trend Card */}
        <div className="card lg:card-side bg-base-100 shadow-2xl hover:shadow-warning/20 transition-all duration-500 overflow-hidden border border-base-content/5">
          
          {/* Image Section */}
          <figure className="relative lg:w-1/2 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-base-content/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src={trendFood.img}
              alt={trendFood.name}
              className="w-full h-64 sm:h-80 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
           
          </figure>

          {/* Content Section */}
          <div className="card-body lg:w-1/2 p-6 sm:p-8 lg:p-10 space-y-6">
            
            {/* Title */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content mb-2">
                <span className="font-serif bg-gradient-to-r from-warning to-orange-500 bg-clip-text text-transparent">
                  {trendFood.name}
                </span>
                <span className="text-base-content/70"> taomi</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-warning to-transparent rounded-full"></div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Cook Time */}
              <div className="flex items-center gap-3 bg-warning/5 p-4 rounded-xl border border-warning/20 hover:bg-warning/10 transition-colors">
                <div className="bg-warning/20 p-3 rounded-lg">
                  <IoTimeOutline className="text-3xl sm:text-4xl text-warning" />
                </div>
                <div>
                  <p className="text-xs text-base-content/60 font-medium uppercase tracking-wider">
                    Tayyorlash vaqti
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-base-content">
                    {trendFood.cook_time} <span className="text-base">daq</span>
                  </p>
                </div>
              </div>

              {/* Servings (example) */}
              <div className="flex items-center gap-3 bg-success/5 p-4 rounded-xl border border-success/20 hover:bg-success/10 transition-colors">
                <div className="bg-success/20 p-3 rounded-lg">
                  <BiDish className="text-3xl sm:text-4xl text-success" />
                </div>
                <div>
                  <p className="text-xs text-base-content/60 font-medium uppercase tracking-wider">
                    Miqdori
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-base-content">
                    4-6 <span className="text-base">kishi</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-warning/20 p-2 rounded-lg">
                  <MdChecklist className="text-3xl sm:text-4xl text-warning" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-base-content">
                  Masalliqlar
                </h3>
              </div>

              <div className="bg-base-200/50 rounded-xl p-5 sm:p-6 border border-base-content/5">
                <ol className="space-y-2.5 sm:space-y-3">
                  {trendFood.ingredients?.slice(0, 5).map((ingredient, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 group hover:translate-x-1 transition-transform"
                    >
                      <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-warning/20 text-warning font-bold rounded-full text-sm group-hover:bg-warning group-hover:text-base-100 transition-colors">
                        {idx + 1}
                      </span>
                      <span className="text-base sm:text-lg font-medium text-base-content/80 pt-0.5">
                        {ingredient}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => navigate(`/foods/${trendFood.id}`)}
                className="btn btn-warning btn-lg flex-1 sm:flex-none text-base sm:text-lg font-bold shadow-lg hover:shadow-warning/50 transition-all duration-300 hover:scale-105"
              >
                <BiDish className="text-xl" />
                Batafsil ko'rish
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-warning/30 animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trend;