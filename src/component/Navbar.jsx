import React from "react";
import { User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div
    initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <nav className="mt-5 backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl mx-5">
        
        {/* Top Line */}
        <div className="flex justify-center">
          <p className="w-[90%] h-[1px] bg-white/10"></p>
        </div>

        <div className="max-w-7xl mx-auto  flex items-center justify-between py-4 ">
          
          {/* Left - Logo */}
          <div className=" flex text-2xl  items-center gap-20 font-medium text-white">
            <span className="tracking-wide">Aman Verma</span>

            <div className="flex justify-center">
              <p className="h-[3vw] w-[2px] bg-white/20"></p>
            </div>
          </div>

          {/* Center - Menu */}
          <div  className="flex items-center gap-20 text-sm">
            <div className="gap-5 space-x-4 flex items-center text-gray-300">
              <a href="#" className="hover:underline text-xl hover:text-white transition duration-300">
                Home
              </a>
              <span className=" text-white/30">|</span>
              
              <a href="#about">
               <div className="hover:underline text-xl hover:text-white transition duration-300" >
             About</div>
               </a>
                
              <span className="text-white/30">|</span>
<a href="#project" >
  <div className="hover:underline text-xl hover:text-white transition duration-300" >
         Project  </div>  </a>
              
              <span className="text-white/30">|</span>
<a href="#skill">

<div className="hover:underline text-xl hover:text-white transition duration-300" >
          Skill </div>
             </a>
            </div>

           <Link to='/contact'> <button className="flex items-center justify-center gap-3 text-[0.8vw]
              bg-white/20 backdrop-blur-md border border-white/20 
              text-white rounded-full px-5 py-2 
              hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] 
              transition-all duration-300">
              
              <span>Contact</span>
              <User size={18} />
            </button>
           </Link>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex justify-center">
          <p className="w-[90%] h-[0.5px] bg-white/10"></p>
        </div>
      </nav>
    </motion.div>
  );
}

export default Navbar;