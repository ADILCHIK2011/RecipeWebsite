import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import yevropa_banner from '../assets/europe_banner.png'
import { IoTimeOutline } from 'react-icons/io5'
import { MdChecklist } from 'react-icons/md'
import { BiDish } from 'react-icons/bi'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const Yevropa = () => {
  const [yevropa, setYevropa] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const getYevropa = async () => {
      try {
        const req = await fetch('http://localhost:3000/foods')
        const res = await req.json()
        setYevropa(res)
      } catch (e) {
        console.error(e);
      }
    }

    getYevropa()
  }, [])

  return (
    <div>
      <Navbar />
      
      {/* Banner */}
      <section
        style={{ backgroundImage: `url(${yevropa_banner})` }}
        className="bg-no-repeat bg-cover bg-center w-full h-48 sm:h-64 lg:h-[450px]"
      ></section>
      
      <p className="max-w-3xl mx-auto text-center my-3 text-sm md:text-base italic text-base-content/80 leading-relaxed px-4">
        Boshqa davlatlarning taomlarini ko'rmoq uchun, tepadagi uch chiziq orqali kategoriyalar sahifasiga qaytadan kirib tanlang.
      </p>
      
      {/* Title */}
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl text-base-content font-bold my-4 sm:my-6 px-4">
        YEVROPA
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        {yevropa
          ?.filter(food => food.category === "european")
          .map((food) => (
            <div key={food.id} className="card w-full max-w-[350px] sm:max-w-[380px] lg:max-w-[400px] bg-base-100 shadow-2xl hover:shadow-warning/20 transition-all duration-500 overflow-hidden border border-base-content/5">
              
              {/* Image */}
              <figure className="relative h-48 sm:h-56 lg:h-64 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-base-content/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={food.img} 
                  alt={food.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 z-20 badge badge-warning badge-lg font-bold shadow-lg">
                  🇪🇺 Yevropa
                </div>
              </figure>
              
              {/* Card Body */}
              <div className="card-body p-4 sm:p-5 lg:p-6 space-y-4">
                
                {/* Title */}
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-base-content mb-2">
                    <span className="font-serif bg-gradient-to-r from-warning to-orange-500 bg-clip-text text-transparent">
                      {food.name}
                    </span>
                    <span className="text-base-content/70"> taomi</span>
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-warning to-transparent rounded-full"></div>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-2 gap-3">
                  
                  {/* Cook Time */}
                  <div className="flex items-center gap-2 bg-warning/5 p-3 rounded-xl border border-warning/20 hover:bg-warning/10 transition-colors">
                    <div className="bg-warning/20 p-2 rounded-lg">
                      <IoTimeOutline className="text-2xl sm:text-3xl text-warning" />
                    </div>
                    <div>
                      <p className="text-xs text-base-content/60 font-medium uppercase tracking-wider">
                        Vaqt
                      </p>
                      <p className="text-base sm:text-lg font-bold text-base-content">
                        {food.cook_time}<span className="text-xs">     daq</span>
                      </p>
                    </div>
                  </div>

                  {/* Servings */}
                  <div className="flex items-center gap-2 bg-success/5 p-3 rounded-xl border border-success/20 hover:bg-success/10 transition-colors">
                    <div className="bg-success/20 p-2 rounded-lg">
                      <BiDish className="text-2xl sm:text-3xl text-success" />
                    </div>
                    <div>
                      <p className="text-xs text-base-content/60 font-medium uppercase tracking-wider">
                        Miqdor
                      </p>
                      <p className="text-base sm:text-lg font-bold text-base-content">
                        4-6<span className="text-xs">   kishi</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ingredients */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-warning/20 p-2 rounded-lg">
                      <MdChecklist className="text-2xl sm:text-3xl text-warning" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-base-content">
                      Masalliqlar
                    </h3>
                  </div>

                  <div className="bg-base-200/50 rounded-xl p-4 border border-base-content/5">
                    <ol className="space-y-2">
                      {food.ingredients?.slice(0, 5).map((ingredient, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 group hover:translate-x-1 transition-transform"
                        >
                          <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 bg-warning/20 text-warning font-bold rounded-full text-xs group-hover:bg-warning group-hover:text-base-100 transition-colors">
                            {idx + 1}
                          </span>
                          <span className="text-sm sm:text-base font-medium text-base-content/80 pt-0.5">
                            {ingredient}
                          </span>
                        </li>
                      ))}
                      {food.ingredients?.length > 5 && (
                        <li className="text-xs text-base-content/50 italic pl-8">
                          +{food.ingredients.length - 5} ta yana...
                        </li>
                      )}
                    </ol>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex gap-2">
                  <button 
                    onClick={() => navigate(`/foods/${food.id}`)} 
                    className="btn btn-warning flex-1 text-sm sm:text-base font-bold shadow-lg hover:shadow-warning/50 transition-all duration-300 hover:scale-105"
                  >
                    <BiDish className="text-lg" />
                    Batafsil
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Yevropa