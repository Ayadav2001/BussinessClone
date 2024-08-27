import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import './App.css'
import Footer from './Component/Footer/Footer'
import Contact from './Component/Contact/Contact'
import Tech from './Component/Home/TechIcon'
import {Routes, Route} from "react-router-dom";
import Prices from './Component/Pages/Prices'

import Features from './Component/Pages/Features'
import FreeQuates from './Component/Pages/FreeQuates'
import TestimonialSlider from './Component/Pages/TestimonialSlider'
// import  from './Component/Pages/Features'


function App() {
 

  return (
    <>
      <Navbar/> 
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/Prices" element={<Prices />}/>
      <Route path="/TestimonialSlider" element={<TestimonialSlider />}/>
      <Route path="/Features" element={<Features />}/>
      <Route path="/FreeQuates" element={<FreeQuates />}/>
    </Routes>

  
    <Tech/>
    <Footer/> 
 
    </>
  )
}

export default App
