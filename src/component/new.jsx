import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { TypeAnimation } from "react-type-animation";
import Avatar from "./Avatar";
import wall from "../assets/font/wall.jpg";
import { motion } from "framer-motion";
import black from "../assets/black.png";
import SplitType from "split-type";


// 🔥 FLOATING HOOK
function useFloat(ref) {

  useEffect(() => {
    let angle = 0;
    const animate = () => {
      angle += 0.02;
      if (ref.current) {
        ref.current.style.transform = `translateY(${Math.sin(angle) * 12}px)`;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);
}

const Home = () => {
  const ref = useRef();
  const btnRef = useRef();

  useFloat(ref);

  // 🔥 MAGNETIC BUTTON
  const handleMagnetic = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btnRef.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const resetMagnetic = () => {
    btnRef.current.style.transform = "translate(0px,0px)";
  };

  // 🔥 TEXT SPLIT
  const name = "Aman Verma".split("");

  // 🔥 VARIANTS
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const letterAnim = {
    hidden: {
      y: 80,
      opacity: 0,
      filter: "blur(10px)",
      letterSpacing: "8px",
    },
    show: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      letterSpacing: "0px",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="w-full min-h-screen bg-[#020617] text-white overflow-hidden">
      <Navbar />

      <div className="relative min-h-screen">
        {/* 🔥 PARALLAX BG */}
        <motion.img
          src={black}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute w-full h-full object-cover opacity-20"
        />

        {/* 🔥 GLOW LIGHTS */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full animate-pulse"></div>

        <section className="min-h-screen flex items-center px-6 md:px-16 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-6xl mx-auto">

            {/* 🔥 LEFT SIDE */}
            <motion.div
              variants={container}
               initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
              transition={{ delay:2.2 }}
            >
              <motion.h3
                variants={letterAnim}
                transition={{ delay:2.5 }}
                className="text-2xl text-gray-400 mb-2 ml-2"
              >
                Hello, I'm
              </motion.h3>

              {/* 🔥 NAME (LETTER ANIMATION) */}
              <motion.h1 className="text-6xl md:text-7xl font-bold mb-4 flex flex-wrap">
                {name.map((char, i) => (
                  <motion.span
                    key={i}
                    variants={letterAnim}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>

              {/* 🔥 TYPE ANIMATION */}
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay:2.5 }}
                className="text-2xl md:text-4xl font-semibold text-blue-400 mb-6"
              >
                <TypeAnimation
                  sequence={[
                    "Frontend Developer", 2000,
                    "React Developer", 2000,
                    "UI/UX Designer", 2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </motion.h2>

              {/* 🔥 DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay:3 }}
                className="text-gray-400 max-w-lg leading-relaxed mb-8"
              >
                I build modern, responsive, and user-friendly web interfaces
                using React and Tailwind.
              </motion.p>

              {/* 🔥 BUTTONS */}
              <motion.div
                
                className="flex gap-4"
              >
                <motion.button
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay:3,duration:0.3 }}
                  ref={btnRef}
                  onMouseMove={handleMagnetic}
                  onMouseLeave={resetMagnetic}
                  className="px-6 py-3 bg-blue-600 rounded-full transition hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]"
                >
                  Hire Me
                </motion.button>

                <motion.a
                initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay:3,duration:0.3 }}
                  href="/resume.pdf"
                  download
                  className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition"
                >
                  Download CV
                </motion.a>
              </motion.div>
            </motion.div>

            {/* 🔥 RIGHT SIDE */}
            <div className="relative flex justify-center">
              <div className="absolute w-72 h-72 bg-blue-500/30 blur-[100px] rounded-full"></div>

              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8, rotate: 270 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 2,delay:3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                }}
              >
                <Avatar />
              </motion.div>
            </div>

          </div>
        </section>  
      </div>
    </div>
  );
};

export default Home;