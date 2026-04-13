import myImage from "../image/image1.jpg";
import hoverEffect from "hover-effect";
import wall from "../assets/font/wall.jpg";
import { section } from "framer-motion/client";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import obeyimg from "../assets/obeyimg.png";
import blog from "../assets/blog.png";
import refokus from "../assets/refokus.png";
import refokus1 from "../assets/refokus1.png";
import blog1 from "../assets/blog1.png";
import obeyimg1 from "../assets/obeyimg1.png";
import disp from "../assets/disp.png";









const cardvariant={
  hidden:{opacity:0,y:20},
  visible:{
    opacity:1,
    y:0,
    transition:{
    type:"spring",
    stiffness:100,
    damping:10,
    ease:"easeInOut"
  }
  }
}
const containervariants={
  hidden: {opacity:1},
  visible:{
    opacity:1,
    transition:{
      delay:0.6,
      staggerChildren :0.4,
    }
  }
}

export default function PortfolioSection() {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
 

  const cards = [
    leftRef.current,
    centerRef.current,
    rightRef.current
  ];

 gsap.from(leftRef.current, {
  scrollTrigger: {
    trigger: "#projects",
    start: "top 60%",
  },
 x: -300,
    opacity: 0,
    scale: 0.7,
    rotateY: 90,
    filter: "blur(20px)",
    duration: 2,
    ease: "power4.out",
});


gsap.from(centerRef.current, {
  scrollTrigger: {
    trigger: "#projects",
    start: "top 15%",
  },
  y: 150,
scale: 0.8,
  opacity: 0,
   duration: 1,
});

gsap.from(rightRef.current, {
  scrollTrigger: {
    trigger: "#projects",
    start: "top 25%",
  },
  x: 150,
scale: 0.8,
opacity: 0,
filter: "blur(10px)",
duration: 1,
});
gsap.from("#project", {
   scrollTrigger: {
    trigger: '#projects',
    start: "top 60%",
  },
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1,
 
});
}, []);


  const containerRef = useRef(null);
  const leftRef = useRef(null);
const centerRef = useRef(null);
const rightRef = useRef(null);
 const handleMouseMove = (e, el) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * -10;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = (el) => {
    el.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  };

useEffect(() => {
  const createEffect = (ref, img1, img2) => {
    if (!ref.current) return;

    return new hoverEffect({
      parent: ref.current,
      intensity: 0.4,
      speedIn: 1.5,
      speedOut: 1.5,
      image1: img1,
      image2: img2,
      displacementImage: disp,
    });
  };

  const leftEffect = createEffect(
    leftRef,
   obeyimg,
obeyimg1  );

  const centerEffect = createEffect(
    centerRef,
    blog,
blog1  );

  const rightEffect = createEffect(
    rightRef,
refokus,
refokus1  );
  
  return () => {
    [leftRef, centerRef, rightRef].forEach((ref) => {
      if (ref.current) ref.current.innerHTML = "";
    });
  };
}, []);
  return (

   <section  id="projects">
    <div className="min-h-screen   text-gray-200 relative overflow-hidden">
    < div className="block-container">
 <h1 id="project" className=" text-center text-5xl font-bold pt-10 pb-[2vh]">
        Selected Web, Mobile, Video Projects...
      </h1>
<div id="blocks"></div>
 </div>
 <div  className="relative min-h-screen">
   <img
     src={wall}
     className="absolute w-full h-full object-cover opacity-25"
   />
      {/* Heading */}
     

      {/* LEFT CARD */}
  <Link to="work">
  <motion.div
    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
    onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
    className="
      absolute 
      top-20 
      left-[8vw]
      w-[90vw] 
      max-w-[550px] 
      aspect-[16/9]
      transition-transform duration-200
    "
  >
    <motion.div
      variant={cardvariant}
      ref={leftRef}
      className="w-full h-full overflow-hidden "
    />

    {/* TEXT */}
    <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-32 z-10">
      <h2 className="text-lg md:text-2xl font-semibold leading-none">
        OBEY <br /> AGENCY
      </h2>

      <div className="w-32 md:w-48 mt-3 h-[2px] bg-white"></div>
      <p className="mt-3 text-sm opacity-60">00</p>
    </div>
  </motion.div>
  <div className="absolute top-[23rem] left-[10vw] w-[40vw] max-w-[550px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-20 right-10 w-48 md:w-72 h-48 md:h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

</Link>
      {/* CENTER CARD */}
      {/* CENTER CARD */}
<Link to="/work2">
  <div
    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
    onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
    className="
      absolute
      right-[5vw]
      top-[25rem]
      w-[85vw]
      max-w-[320px]
      aspect-[3/5]
      transition-transform duration-200
    "
  >
    <div
      ref={centerRef}
      className="w-full h-full overflow-hidden "
    />

    {/* TEXT */}
    <div className="absolute -left-16 bottom-6 z-10">
      <h2 className="text-lg md:text-2xl font-semibold leading-tight">
        BLOGGING
      </h2>
      <h2 className="text-lg md:text-2xl font-semibold leading-tight">
        APPLICATION
      </h2>

      <div className="w-32 md:w-48 h-[2px] bg-white mt-2"></div>
      <p className="mt-2 text-sm opacity-60">02</p>
    </div>
  </div>
</Link>


{/* RIGHT CARD */}
<Link to="/work1">
  <div
    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
    onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
    className="
      absolute
      top-[70%]
      left-1/2
      translate-x-[-50%]
      translate-y-[-50%]
      w-[90vw]
      max-w-[550px]
      aspect-[16/9]
      z-10
      transition-transform duration-200
    "
  >
    <div
      ref={rightRef}
      className="w-full h-full overflow-hidden "
    />

    {/* TEXT */}
   <div className=" z-10 -left-20 top-[-120px] relative">
     <h2 className="text-[1.5vw] font-semibold">REFOKUS</h2>
      <div className="w-60 h-[3px] bg-white mt-2"></div> 
   <p className="mt-2 text-sm opacity-60">01</p> </div>
  </div>
</Link>
</div>
      

    </div>    </section>
  );
}
