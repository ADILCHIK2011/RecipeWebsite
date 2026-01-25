import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { MdChecklist } from "react-icons/md";
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
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
        <nav>
            <Navbar/>
        </nav>
      <button 
        onClick={() => navigate(-1)} 
        className="btn btn-xl mb-6"
      >
        ← Orqaga
      </button>

      <div className="card max-w-4xl mx-auto bg-base-100 shadow-2xl">
        <figure className="h-[350px] overflow-hidden">
          <img 
            src={food.img} 
            alt={food.name} 
            className="w-full h-full object-contain"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-4xl">
            {food.name} taomi
          </h2>

          <div className="flex items-center gap-3 my-3">
            <IoTimeOutline className="text-5xl text-warning" />
            <p className="text-2xl">{food.cook_time} daqiqa</p>
          </div>

          <div className="flex items-center gap-3 my-2">
            <MdChecklist className="text-5xl text-warning" />
            <p className="text-2xl">Masalig'lar:</p>
          </div>

          <ol className="list-decimal marker:text-warning mx-6 font-semibold text-lg">
            {food.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ol>

          {food.description && (
            <p className="mt-4 text-lg leading-relaxed">
              {food.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodsDetail;