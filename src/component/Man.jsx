import { useState } from "react";
import "./wave.css";
import wal from "../assets/font/wall1.jpg";
import wall from "../assets/font/wall.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import black from "../assets/skillnu.png";

// Logos
import reactLogo from "../assets/react.png";
import jsLogo from "../assets/js.png";
import cssLogo from "../assets/css.png";
import node from "../assets/node.jpg";
import gsap1 from "../assets/gsap.png";
import { Section } from "lucide-react";



export default function LiquidSVG() {
  const [progress, setProgress] = useState([0, 0, 0, 0, 0]);
const themes = [
  {
    label: "React",
    logo: reactLogo,
    color: "#61DBFB",
    glow: "rgba(97,219,251,0.5)"
  },
  {
    label: "JavaScript",
    logo: jsLogo,
    color: "#facc15",
    glow: "rgba(250,204,21,0.5)"
  },
  {
    label: "CSS",
    logo: cssLogo,
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.5)"
  },
  {
    label: "GSAP",
        logo: gsap1,

    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.5)"
  },
  {
    label: "Node.js",
        logo: node,

    color: "#31a706",
    glow: "rgba(44, 212, 6, 0.5)"
  }
];
  const targets = [90, 75, 60, 85, 70];
const labels = ["React", "JavaScript", "CSS", "GSAP", "Three.js"];
  const logos = [reactLogo, jsLogo, cssLogo,gsap1,node];
const skillRef = useRef(null);



  return (
        <div className="relative min-h-screen">
      <img
        src={black}
        className="absolute w-full h-full object-cover opacity-10"
      />

    adding gsap scrolltrigger in these code  <motion.section
 id="skill"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      
>
        {/* Glow */}
        <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-[120px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] bottom-[-100px] right-[-100px]" />

        {/* Title */}
<motion.div
 initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 text-center mb-20"
>
  <h2 className="
    text-6xl md:text-7xl lg:text-8xl 
    font-extrabold 
    text-white
  ">
    Skills
  </h2>

  {/* Glow Line */}
  <div className="mt-6 flex justify-center">
    <div className="
      w-40 h-[3px] 
      bg-gradient-to-r 
      from-transparent via-white to-transparent 
      blur-[1px]
    "></div>
  </div>

  {/* Subtle Glow Behind */}
  <div className="
    absolute inset-0 
    flex justify-center 
    -z-10
  ">
    <div className="
      w-72 h-72 
      bg-purple-500/20 
      blur-[120px] 
      rounded-full
    "></div>
  </div>

</motion.div>

        {/* Circles */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
        delay:2,
      },
    },
  }}
  className="flex flex-col gap-16 z-10"
>
          {/* Row 1 */}
<motion.div
  initial={{ opacity: 0, x: 500, scale: 0.8 }}
  whileInView={{ opacity: 1, x: 0, scale: 1 }}
  transition={{ delay:1,duration: 0.6 }}
  viewport={{ once: true }}
className="flex justify-center gap-16 flex-wrap">    
        {[0, 1, 2].map((i) => (
  <Circle
    key={i}
    index={i}
    progress={progress[i]}
    setProgress={setProgress}
    target={targets[i]}
    id={`clip${i}`}
    theme={themes[i]}
  />
))}
          </motion.div>

          {/* Row 2 */}
         <motion.div
  initial={{ opacity: 0, x: -500, scale: 0.8 }}
  whileInView={{ opacity: 1, x: 0, scale: 1 }}
  transition={{ delay:1,duration: 0.6 }}
  viewport={{ once: true }}
className="flex justify-center gap-16 flex-wrap">
           {[3, 4].map((i) => (
  <Circle
    key={i}
    index={i}
    progress={progress[i]}
    setProgress={setProgress}
    target={targets[i]}
    id={`clip${i}`}
    theme={themes[i]}
  />
))}
          </motion.div>

        </motion.div>
      </motion.section>
    </div>
  );
}


// 🔁 Circle Component
function Circle({ progress, id, theme, target, index, setProgress }) {

  const handleHover = () => {
    let value = 0;

    const interval = setInterval(() => {
      value += 1;

      setProgress((prev) => {
        const updated = [...prev];
        if (updated[index] < target) {
          updated[index] = value;
        }
        return updated;
      });

      if (value >= target) clearInterval(interval);
    }, 20);
  };
  const handleLeave = () => {
  gsap.to(
    {},
    {
      duration: 1,
      onUpdate: function () {
        const value = Math.round((1 - this.progress()) * target);

        setProgress((prev) => {
          const updated = [...prev];
          updated[index] = value;
          return updated;
        });
      },
    }
  );
};

  return (
    
    <div className="flex flex-col items-center gap-4">

      <div
        onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        className="group relative w-32 h-32 md:w-40 md:h-40
        backdrop-blur-md bg-white/5 border 
        rounded-full transition-all duration-300 cursor-pointer"
        style={{
          borderColor: theme.color + "40",
          boxShadow: `0 0 40px ${theme.glow}`
        }}
      >

        <svg viewBox="0 0 200 200" className="w-full h-full">

          {/* Background */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="10"
          />

          {/* Gradient */}
          <defs>
            <linearGradient id={`grad${id}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={theme.color} />
              <stop offset="100%" stopColor="white" />
            </linearGradient>

            <clipPath id={id}>
              <circle cx="100" cy="100" r="90" />
            </clipPath>
          </defs>

          {/* Wave */}
          <g clipPath={`url(#${id})`}>
            <g
              className="waveGroup"
              style={{ transform: `translateY(${200 - progress * 3}px)` }}
            >
              <path
                d="
                M0 100 
                C 40 80, 80 120, 120 100
                C 160 80, 200 120, 240 100
                C 280 80, 320 120, 360 100
                V5200 H0 Z"
                fill={`url(#grad${id})`}
              />
            </g>
          </g>
        </svg>

        {/* LOGO (FULL COVER) */}
        {theme.logo && (
          <div className="absolute inset-0 rounded-full overflow-hidden group-hover:opacity-0 transition duration-300">
            <img
              src={theme.logo}
              alt={theme.label}
              className="w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        )}

        {/* PROGRESS */}
        <div className="absolute inset-0 flex items-center justify-center 
        text-white text-xl md:text-2xl font-bold 
        opacity-0 group-hover:opacity-100 transition duration-300">
          {progress}%
        </div>

      </div>

      <p className="text-white/60 text-sm tracking-wide">
        {theme.label}
      </p>
    </div>
  );
}
   