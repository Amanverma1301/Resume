import React, { useEffect, useRef } from "react";
import obey3 from "../assets/obey3.png";
import obey2 from "../assets/obey2.png";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./projectcard.css";
import Transition from "../component/transition";
import { motion } from "framer-motion";
import obey from "../assets/obey.mp4";


const ProjectPage = () => {
  const navigate = useNavigate();
  const cursorRef = useRef(null);

  // 🔥 Cursor GSAP
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
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // 🔥 TEXT SPLIT
  const text = "OBEY AGENCY";
  const letters = text.split("");

  // 🔥 VARIANTS (PRO LEVEL)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterAnim = {
    hidden: {
      y: 80,
      opacity: 0,
      filter: "blur(10px)",
      letterSpacing: "10px",
      scale: 0.9,
    },
    show: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      letterSpacing: "0px",
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col md:flex-row min-h-screen text-white"
    >
      <Transition />

      {/* 🔥 CUSTOM CURSOR */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 border border-white/40 rounded-full pointer-events-none z-50 flex items-center justify-center"
      >
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>

      {/* 🔥 LEFT SIDE */}
      <motion.div
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full md:w-2/3 h-screen flex flex-col overflow-y-auto custom-scroll"
      >
        <video muted loop autoPlay src={obey} className="video-player"></video>

        {[obey2,obey3].map((img, i) => (

          <motion.img
            key={i}
            src={img}
            className="w-full h-screen object-cover"
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: i * 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </motion.div>

      {/* 🔥 RIGHT SIDE */}
      <motion.div
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-screen bg-[#070717] relative overflow-hidden px-8 md:px-20 py-16"
      >
        {/* Back */}
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-10 left-10 w-12 h-12 flex items-center justify-center rounded-full bg-purple-600"
        >
          ←
        </motion.button>

        {/* Next */}
        <motion.button
          whileHover={{ x: 8 }}
          className="absolute top-10 right-10 text-2xl opacity-70"
        >
          →
        </motion.button>

        {/* 🔥 CONTENT */}
        <div className="max-w-3xl mt-20">
          {/* Tags */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-gray-400 text-sm mb-6"
          >
            #Design, #UX, #PHP, #Wordpress, #jQuery, #Vue
          </motion.p>

          {/* 🔥 TITLE (PRO LEVEL) */}
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            transition={{ delay: 1.7 }}

            className="text-4xl md:text-5xl font-bold mb-8 flex flex-wrap"
          >
            {letters.map((char, i) => (
              <motion.span
                key={i}
                variants={letterAnim}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-gray-300 leading-8 mb-10"
          >
            Our agency is about people who
 love creating, designing and developing wow projects. In the   same time we are a boutique   agency that is more than the collective.

            <br /><br />
During my time working with Apple, I was a lead designer on various
        campaign landing pages featured on Apple.com. Please contact me
        directly to discuss further.          </motion.p>
        

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(139,92,246,0.8)" }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.4 }}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600"
          ><a href="https://amanverma1301.github.io/obey-agency/" target='_blank'>
 VISIT</a>
           
          </motion.button>
        </div>

        {/* 🔥 PROGRESS BAR */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 2.6 }}
          className="absolute bottom-10 left-20 right-20 flex items-center gap-4 origin-left"
        >
          <div className="flex-1 h-[2px] bg-white/20 relative overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.5, delay: 2 }}
              className="absolute top-0 h-full w-full bg-white"
            />
          </div>
          <span className="text-gray-400 text-sm">00</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectPage;