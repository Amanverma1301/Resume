import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img from "../assets/font/im.jpg";
import wall from "../assets/font/wall.jpg";
import black from "../assets/skilln.png";
 


gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);
  const btnRef = useRef(null);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // 🎬 ABOUT SECTION GSAP
  
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 100%",
        end: "top 50%",
        scrub: 1.2,
      },
    });

    tl.from(aboutRef.current, {
      y: 150,
      opacity: 0,
      scale: 0.9,
      filter: "blur(20px)",
      duration: 1.5,
      ease: "power4.out",
    });

    tl.from(
      aboutRef.current.querySelector("h2"),
      {
        y: 80,
        opacity: 0,
        letterSpacing: "10px",
        duration: 1,
      },
      "-=1"
    );

    tl.from(
      aboutRef.current.querySelector("p"),
      {
        y: 50,
        opacity: 0,
        duration: 1,
      },
      "-=0.8"
    );

    tl.from(
      btnRef.current,
      {
        scale: 0.7,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      "-=0.6"
    );

    // 🌊 Parallax
    gsap.to(aboutRef.current, {
      y: -80,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // 💡 Glow Pulse
    gsap.to(aboutRef.current, {
      boxShadow: "0 0 80px rgba(255,255,255,0.08)",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });
  }, []);

  // 🖼️ IMAGE ANIMATION
  useGSAP(() => {
    gsap.fromTo(
      imgRef.current,
      { scale: 1.5, y: 80 },
      {
        scale: 1,
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );

    gsap.to(".parallax-slow", {
      y: -50,
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
      },
    });

    gsap.to(".parallax-fast", {
      y: -120,
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
      },
    });
  }, []);

  // 🌟 Mouse Glow
  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // 🧲 Magnetic Button (GSAP)
  const handleMagnetic = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btnRef.current, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const resetMagnetic = () => {
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <img
        src={black}
        className="absolute w-full h-full object-cover opacity-10"
      />

      <section
        id="about"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen overflow-hidden px-8 md:px-16 py-24 flex flex-col lg:flex-row items-center justify-between gap-16"
      >
        {/* 🌟 Mouse Glow */}
        <div
          className="pointer-events-none absolute w-[400px] h-[400px] rounded-full blur-[120px] bg-white/10"
          style={{
            left: mouse.x - 200,
            top: mouse.y - 200,
          }}
        />

        {/* Ambient Glow */}
        <div className="parallax-slow absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-purple-500/10 blur-[120px] rounded-full"></div>
        <div className="parallax-fast absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

        {/* LEFT CONTENT */}
        <div ref={aboutRef} className="relative z-10 w-full lg:w-[48%]">
        
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(255,255,255,0.04)]">
            
            <h2 className=" text-4xl md:text-6xl font-bold text-white mb-8">
              About <span className="text-white/60">Us</span>
            </h2>

            <div className=" w-28 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent mb-8"></div>

            <p className="text-white/60 leading-8 mb-6">
              We create modern and immersive digital experiences that blend
              design, motion, and interactivity into one seamless system.
            </p>

            <button
              ref={btnRef}
              onMouseMove={handleMagnetic}
              onMouseLeave={resetMagnetic}
              onMouseEnter={() =>
                gsap.to(btnRef.current, {
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(255,255,255,0.4)",
                })
              }
              className="px-7 py-3 rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
            >
              Discover More →
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative z-10 w-full lg:w-[48%] flex justify-center"> 
          <div className="relative overflow-hidden rounded-3xl border border-white/10
           bg-white/5 backdrop-blur-md shadow-[0_0_50px_rgba(255,255,255,0.06)]"> 
           
           <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10
            via-transparent to-cyan-500/10 z-10"></div>
             <img ref={imgRef} src={img} alt="Team" className="w-full max-w-[1000px]
              h-[700px] object-cover rounded-3xl" /> </div>
               </div>
      </section>
    </div>
  );
}

export default About;