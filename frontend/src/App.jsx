import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import DailyRec from './components/DailyRec'
import Trend from './components/Trend'
import Oshpazlar from './components/Oshpazlar'
import Footer from './components/Footer'
import About from "./pages/About";


const App = () => {
  return (
    <div className="w-full h-screen">
      <nav>
        <Navbar/>
      </nav>
      <Banner/>
      <DailyRec/>
      <Trend />
      <Oshpazlar/>
        <Footer/>
    </div>
  )
}

export default App