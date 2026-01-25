import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import m from '../assets/misr_banner.png'
import Category from '../components/Category'
import { IoTimeOutline } from 'react-icons/io5'
import { MdChecklist } from 'react-icons/md'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
const Misr = () => {
  const [misr, setMisr] = useState([])
  const navigate = useNavigate()

 useEffect(()=>{
  const getMisr = async () => {
    try {
      const req = await fetch('http://localhost:3000/foods')
      const res = await req.json()
      setMisr(res)
    } catch (e) {
      console.error(e);
    }
  }

getMisr()
 }, [])

  return (
    <div>
      <Navbar />
      <section
        style={{ backgroundImage: `url(${m})` }}
        className="bg-no-repeat bg-cover bg-center w-full h-[450px]"
      ></section>
    <Category/>
      <h1 className="text-center text-5xl text-base-content font-bold my-6">MISR</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center  px-4">
        {misr
          ?.filter(food => food.category === "egyptian")
          .map((food) => (
            <div key={food.id} className="card w-[350px] md:w-[400px] bg-base-100 shadow-2xl">
              <figure className="h-[250px] md:h-[300px] overflow-hidden">
                <img 
                  src={food.img} 
                  alt={food.name} 
                  className="w-full h-full object-contain" 
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl md:text-3xl mb-2">
                  <span className="font-serif">{food.name}</span> 
                </h2>

                <div className="mb-2">
                  <div className="flex items-center gap-2 md:gap-3 mb-1">
                    <IoTimeOutline className="text-3xl md:text-5xl text-warning" />
                    <p className="text-lg md:text-2xl"><strong>{food.cook_time}</strong> daqiqa</p>
                  </div>

                  <div className="flex items-center gap-2 md:gap-3 mb-1">
                    <MdChecklist className="text-3xl md:text-5xl text-warning" />
                    <p className="text-lg md:text-2xl">Masalig'lar:</p>
                  </div>

                  <ol className="list-decimal marker:text-warning mx-4 md:mx-6 font-semibold text-sm md:text-lg">
                    {food.ingredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ol>
                </div>

                <div className="justify-end flex mt-2">
                    onClick={() => navigate(`/foods/${food.id}`)}
                  <button  className="btn btn-warning">Ko'rish</button>
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

export default Misr