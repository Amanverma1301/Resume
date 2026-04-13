import React, { useRef } from "react";
import myImage from "../image/image1.jpg";
import { useEffect } from "react";
import hoverEffect from "hover-effect";
import wall from "../assets/font/wall1.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import disp from "../assets/disp.png";
import eco from "../assets/ecommerce.png";
import eco1 from "../assets/ecommerce1.png";
import k7 from "../assets/k7.png";
import k71 from "../assets/k71.png";
import project6 from "../assets/project6.png";
import project61 from "../assets/project61.png";






import gsap from "gsap";

export default function Work1() {

  gsap.registerPlugin(ScrollTrigger);

   useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const cards = [
    left2Ref.current,
    center2Ref.current,
    right2Ref.current
  ];

 gsap.from(left2Ref.current, {
  scrollTrigger: {
    trigger: "#projects",
    start: "top -20%",
  },
 x: -300,
    opacity: 0,
    scale: 0.7,
    rotateY: 90,
    filter: "blur(20px)",
    duration: 2,
    ease: "power4.out",
});


gsap.from(center2Ref.current, {
  scrollTrigger: {
    trigger: "#projects",
    start: "top -50%",
  },
  y: 150,
scale: 0.8,
  opacity: 0,
   duration: 1,
});

gsap.from(right2Ref.current, {
  scrollTrigger: {
    trigger: "#projects",
    start: "top -70%",
  },
  x: 150,
scale: 0.8,
  opacity: 0,
  filter: "blur(10px)",
   duration: 1,
});

}, []);


   const containerRef = useRef(null);
 const left2Ref = useRef(null);
 const center2Ref = useRef(null);
 const right2Ref = useRef(null);
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
  intensity: 0.3,
  speedIn: 2.0,
  speedOut: 2.0,
  image1: img1,
  image2: img2,
  displacementImage: 
disp,
  imagesRatio: 1.5, // Matches the aspect ratio of your "About" images
});
  };
   const left2Effect = createEffect(
  left2Ref,
k7,
k71);

const center2Effect = createEffect(
  center2Ref,
  eco,
eco1);

const right2Effect = createEffect(
  right2Ref,
project6,  
project61
);
 return () => {
    [left2Ref, center2Ref, right2Ref].forEach((ref) => {
      if (ref.current) ref.current.innerHTML = "";
    });
  };
}, []);
  return (
    <div className="min-h-screen  text-gray-200 relative overflow-hidden">
     < div className="block-container">

<div id="blocks"></div>
 </div>
   <div className="relative min-h-screen">
      <img
        src={wall}
        className="absolute w-full h-full object-cover opacity-20"
      />   

<Link to='work3'><div
  onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
  onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
  className="
    absolute
    top-12
    left-[8vw]
    w-[90vw]
    max-w-[550px]
    aspect-[16/9]
    transition-transform duration-200
  "
>
  <div
    ref={left2Ref}
    className="w-full h-full overflow-hidden "
  />

  {/* TEXT */}
  <div className="absolute -left-16 md:-left-20 top-2/3 -translate-y-1/2 w-32 md:w-40 z-10">
    <h2 className="text-lg md:text-2xl font-semibold leading-none">
      K7 <br /> WEBSITE <br /> UI
    </h2>

    <div className="w-32 md:w-48 mt-3 h-[2px] bg-white"></div>
    <p className="mt-3 text-sm opacity-60">03</p>
  </div>
</div></Link>

{/* CENTER CARD */}
<Link to="/work5">
  <div
    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
    onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
    className="
      absolute
      right-[5vw]
      top-[12rem]
      w-[85vw]
      max-w-[300px]
      aspect-[3/5]
      transition-transform duration-200
    "
  >
    <div
      ref={center2Ref}
      className="w-full h-full overflow-hidden "
    />

    {/* TEXT */}
    <div className="absolute -left-16 md:-left-20 top-2/3 -translate-y-1/2 z-10">
      <h2 className="text-lg md:text-2xl font-semibold leading-tight">
        ECOMMERCE
      </h2>
      <h2 className="text-lg md:text-2xl font-semibold leading-tight">
        WEBSITE
      </h2>

      <div className="w-32 md:w-48 h-[2px] bg-white mt-2"></div>
      <p className="mt-2 text-sm opacity-60">05</p>
    </div>
  </div>

  {/* Glow Effects */}
  <div className="absolute top-[23rem] left-[10vw] w-[40vw] max-w-[550px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-20 right-10 w-48 md:w-72 h-48 md:h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>
</Link>


{/* RIGHT CARD */}
<Link to="/work4">
  <div
    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
    onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
    className="
      absolute
      bottom-20
      right-[40vw]
      w-[100vw]
      max-w-[280px]
      aspect-[3/4]
      transition-transform duration-200
    "
  >
    <div
      ref={right2Ref}
      className="w-full h-full overflow-hidden "
    />

    {/* TEXT */}
    <div className="absolute -left-16 md:-left-20 -bottom-1 z-10">
      <h2 className="text-lg md:text-2xl font-semibold">
        AI Project
      </h2>

      <div className="w-32 md:w-48 h-[2px] bg-white mt-2"></div>
      <p className="mt-2 text-sm opacity-60">04</p>
    </div>
  </div>
</Link>
</div>
      {/* CENTER DOT */}

    </div>
  );
}
