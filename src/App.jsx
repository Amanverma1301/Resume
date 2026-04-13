import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import { Menu, Sidebar } from 'lucide-react';
import DistortionCard from './component/Distort';
import LiquidProgress from './component/Man';
import PortfolioSection from './component/Work';
import Work1 from './component/Work1';
import ProjectCard from './projectpage/Projectcard';
import Navbar from './component/Navbar';
import SideNav from './component/Sidebar';

import Fullscreennav from './component/Fullscreennav';
import Navbarone from './component/Navbar1';



const App = () => {
  return (
  <>
   <div className="overflow-x-hidden w-full">
 <Routes>  
             <Route path="/" element={
            <div className="bg-[#020617]">
            <Home/>
              <PortfolioSection/>
<Work1/>
<About/>
<LiquidProgress/>
<Contact/>


            </div>
        } />
          <Route path="/about" element={
           <About />
           } />
           <Route path="/project" element={
            <><PortfolioSection/>
          </>
          } />
           <Route path="/skill" element={
            <LiquidProgress/>
          } />
           <Route path="/contact" element={
            <Contact/>
          } />
          
        

               
        </Routes>

   </div>
   
      </>
  )
}

export default App
