
import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { TypeAnimation } from "react-type-animation";
import Avatar from "./Avatar";
import wall from "../assets/font/wall.jpg";
import { motion } from "framer-motion";
import black from "../assets/black.png";
import SplitType from "split-type";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// 🔥 FLOATING HOOK
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
   const containerRef = useRef();
  const nameRef = useRef();
  const btnRef = useRef();
  const avatarRef = useRef();
   const ref = useRef();

  // 🔥 MAGNETIC BUTTON (GSAP Version for smoother feel)
  const handleMagnetic = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btnRef.current, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const resetMagnetic = () => {
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
  };

  useGSAP(() => {
    // 1. Split only the NAME into characters
    const nameSplit = new SplitType(nameRef.current, { types: "chars" });
    const chars = nameSplit.chars;

    const tl = gsap.timeline();

    // 2. Entrance Animation for the Name
    tl.from(chars, {
      y: 80,
      opacity: 0,
      rotateX: -90,
      stagger: 0.03,
      duration: 1.2,
      ease: "expo.out",
      delay: 0.5,
    });

    // 3. Symbol Swap Loop (The Premium Motion Effect)
    const symbols = ["*", "□", "!", "×", "#","$","^"];
    
    const swapEffect = () => {
      // Pick a random character from the name
      const randomIdx = Math.floor(Math.random() * chars.length);
      const originalChar = chars[randomIdx].innerText;
      
      if (originalChar === " " || !originalChar) return; 

      gsap.to(chars[randomIdx], {
        opacity: 0,
        y: -10,
        duration: 0.2,
        onComplete: () => {
          chars[randomIdx].innerText = symbols[Math.floor(Math.random() * symbols.length)];
          gsap.to(chars[randomIdx], {
            opacity: 1,
            y: 0,
            duration: 0.2,
            onComplete: () => {
              gsap.to(chars[randomIdx], {
                opacity: 0,
                delay: 0.8,
                duration: 0.2,
                onComplete: () => {
                  chars[randomIdx].innerText = originalChar;
                  gsap.to(chars[randomIdx], { opacity: 1, duration: 0.2 });
                }
              });
            }
          });
        }
      });
    };

    const interval = setInterval(swapEffect, 2500);

    // Avatar Float
    gsap.to(avatarRef.current, {
      y: 15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    return () => clearInterval(interval);
  }, { scope: containerRef });
  return (
    <div ref={containerRef} className="w-full min-h-screen bg-[#020617] text-white overflow-hidden">
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
               initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
              transition={{ delay:2.2 }}
            >
              <motion.h3
                transition={{ delay:2.5 }}
                className="text-2xl text-gray-400 mb-2 ml-2"
              >
                Hello, I'm
              </motion.h3>

              {/* 🔥 NAME (LETTER ANIMATION) */}
              <h1 
                ref={nameRef} 
                className="text-5xl md:text-8xl font-bold mb-4 tracking-tighter leading-none"
              >
                Aman Verma
              </h1>

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
                initial={{ opacity: 0, scale: 0.8,  }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 2,delay:3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 2,
                  rotate: 10,
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