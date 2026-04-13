import React, { useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";
import gsap from "gsap"; // ✅ IMPORTANT
import "./projectcard.css";
import Transition from "../component/transition";
import { motion } from "framer-motion";
import wall from "../assets/k72.png";
import wal from "../assets/k73.png";



const ProjectPage = () => {
  const navigate = useNavigate();
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 12,
        y: e.clientY - 12,
        duration: 0.15,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    className="relative flex flex-col md:flex-row min-h-screen  text-white">
      <Transition/>

      {/* ✅ CUSTOM CURSOR */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 border border-white/40 rounded-full pointer-events-none z-50 flex items-center justify-center"
      >
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>

      {/* Left Side */}
      <div className="w-full md:w-2/3 h-screen flex flex-col overflow-y-auto custom-scroll">
        <img src={wall} className="w-full h-screen object-cover" />
        <img src={wal} className="w-full h-screen object-cover" />
       
      </div>

      {/* Right Side */}
      <div className="min-h-screen bg-[#070717] text-white relative overflow-hidden px-8 md:px-20 py-16">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-10 left-10 w-12 h-12 flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-700 transition"
        >
          ←
        </button>

        {/* Next */}
        <button className="absolute top-10 right-10 text-2xl opacity-70 hover:opacity-100 transition">
          →
        </button>

        {/* Content */}
        <div className="max-w-3xl mt-20">
          <p className="text-gray-400 text-sm mb-6">
            #Design, #UX, #PHP, #Wordpress, #jQuery, #Vue
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-8">
K7          </h1>

          <p className="text-gray-300 leading-8 mb-10">
           The K7 website UI combines a clean, modern aesthetic with functional, 
            layouts to create an intuitive, user-friendly experience.
            <br /><br />
            Also implemented store locator w/ filter and search - built with Vue.
          </p>

          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 
          shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:scale-105 transition-all duration-300">
            VISIT
          </button>
        </div>

        {/* Bottom */}
        <div className="absolute bottom-10 left-20 right-20 flex items-center gap-4">
          <div className="flex-1 h-[2px] bg-white/20 relative">
            <div className="absolute left-0 top-0 h-full w-[40%] bg-white"></div>
          </div>
          <span className="text-gray-400 text-sm">03</span>
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectPage;