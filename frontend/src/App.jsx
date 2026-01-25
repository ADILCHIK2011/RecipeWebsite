import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import DailyRec from './components/DailyRec'
import Category from './components/Category'
import Trend from './components/Trend'
import Oshpazlar from './components/Oshpazlar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="w-full h-screen">
      <nav>
        <Navbar/>
      </nav>
      <Banner/>
      <Category/>
      <DailyRec/>
      <Trend />
      <Oshpazlar/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App