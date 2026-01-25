import React from 'react'
import home_banner from "../assets/home_banner.png"
const Banner = () => {
  return (
    <div>
      <section
        className="w-full h-[400px] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${home_banner})` }}
      ></section>
    </div>
  )
}

export default Banner