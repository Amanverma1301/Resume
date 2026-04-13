import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ProjectCard from "./projectpage/Projectcard";
import ProjectPage1 from "./projectpage/Projectcard1";
import ProjectPage2 from "./projectpage/Projectcard2";
import ProjectPage3 from "./projectpage/Projectcard3";
import ProjectPage4 from "./projectpage/Projectcard4";
import ProjectPage5 from "./projectpage/Projectcard5";
import Fullscreennav from "./component/Fullscreennav";
import SideNav from './component/Sidebar';

function AnimatedRoutes() {
  const location = useLocation();

  return (
   <>
   
    <AnimatePresence mode="wait">
      
      <Routes location={location} key={location.pathname}>
        <Route path="/work" element={<ProjectCard />} />
        <Route path="/work1" element={<ProjectPage1 />} />
        <Route path="/work2" element={<ProjectPage2 />} />
        <Route path="/work3" element={<ProjectPage3 />} />
        <Route path="/work4" element={<ProjectPage4 />} />
        <Route path="/work5" element={<ProjectPage5 />} />
      </Routes>
    </AnimatePresence></> 
   
  );
}

export default function App() {
  return <AnimatedRoutes />;
}