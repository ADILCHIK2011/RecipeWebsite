import React, { useEffect, useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { MdChecklist } from "react-icons/md";

const Trend = () => {
  const [trendda, setTrendda] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div className="text-center">Yuklanmoqda...</div>;

  return (
    <div className="my-2">
      <h1 className="text-5xl text-center font-bold text-warning">
        Hozir trendda
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {trendda.length > 0 ? (
          trendda
            .filter((food) => Number(food.id) === 34)
            .map((food) => (
              <div className="card card-side bg-base-100 shadow-2xl my-20">
                <figure>
                  <img src={food.img} alt="Movie" className="w-[500px]" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-3xl">
                    <span className="font-serif">{food.name}</span> taomi
                  </h2>
                  <div>
                    <div>
                      <div className="flex items-center gap-[10px]">
                        <IoTimeOutline className="text-5xl text-warning" />
                        <p className="text-3xl">{food.cook_time} daqiqa</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-[10px]">
                          <MdChecklist className="text-5xl text-warning" />
                          <p className="text-3xl">Masalig'lar:</p>
                        </div>
                      </div>
                      {trendda
                        ?.filter((food) => food.id === 34)
                        .map((food) => {
                          return (
                            <ol className="list-decimal marker:text-warning mx-8 font-semibold text-xl">
                            <li>{food.ingredients[0]}</li>
                            <li>{food.ingredients[1]}</li>
                            <li>{food.ingredients[2]}</li>
                            <li>{food.ingredients[3]}</li>
                            <li>{food.ingredients[4]}</li>
                          </ol>                          
                          );
                        })}
                    </div>
                  </div>
                    <div className="justify-end flex">
                        <button className="btn btn-warning">Ko'rish</button>
                    </div>
                </div>
              </div>
            ))
        ) : (
          <p>Hech narsa topilmadi (Check your API!)</p>
        )}
      </div>
    </div>
  );
};

export default Trend;
