import { motion } from "framer-motion";

const Transition = () => {
  return (
    <>
      {/* SLIDE IN */}
      

      {/* SLIDE OUT */}
  <motion.div
        className="fixed top-0 left-0 w-full h-full bg-purple-600 origin-top z-50"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{  duration: 1.2,
    ease: [0.87, 0, 0.13, 1], }}
      />
      <motion.div
  className="fixed top-0 left-0 w-full h-full z-[49] origin-bottom 
  bg-black"
  
  initial={{ scaleY: 1 }}
  animate={{ scaleY: 0 }}
  exit={{ scaleY: 0 }}

  transition={{
    duration: 1,
    ease: [0.87, 0, 0.13, 1],
  }}
/>
     </>
  );
};

export default Transition;