import React from 'react'
import { Routes, Route } from "react-router-dom"

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Tittle from './Components/Tittle/Tittle'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'

// ✅ FIXED (default import)
import Explore from './Components/Explore/Explore'

const App = () => {

  const [playState, setPlayState] = React.useState(false)

  return (
    <Routes>

      {/* HOME PAGE */}
      <Route path="/" element={
        <>
          <Navbar />
          <Hero />

          <div className="container">
            <Tittle subTittle="OUR PROGRAM" tittle="What We Offer" />
            <Programs />

            <About setPlayState={setPlayState} />

            <Tittle subTittle="Gallery" tittle="Campus Photos" />
            <Campus />

            <Tittle subTittle="TESTIMONIALS" tittle="What Our Students Says" />
            <Testimonials />

            <Tittle subTittle="CONTACT US" tittle="Get in Touch" />
            <Contact />

            <Footer />
          </div>

          <Videoplayer playState={playState} setPlayState={setPlayState} />
        </>
      } />

      {/* EXPLORE PAGE */}
      <Route path="/explore" element={<Explore />} />

    </Routes>
  )
}

export default App
