import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

/*
========================================
PREMIUM PAGE TRANSITION PATTERN:
"LIQUID CURTAIN REVEAL"
========================================
Instead of stair animation:
→ Fullscreen smooth sliding panels
→ Elegant premium agency style
→ Much more modern than stairs
========================================
*/

const CurtainTransition = ({ children }) => {
  const currentPath = useLocation().pathname;

  const pageRef = useRef(null);
  const curtainRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Show curtain
    tl.set(curtainRef.current, {
      display: "flex",
    });

    // Animate curtain panels IN
    tl.fromTo(
      ".curtain-panel",
      {
        y: "-100%",
      },
      {
        y: "0%",
        duration: 0.8,
        stagger: 0.08,
        ease: "power4.inOut",
      }
    );

    // Animate curtain panels OUT
    tl.to(".curtain-panel", {
      y: "100%",
      duration: 0.9,
      stagger: 0.08,
      ease: "power4.inOut",
    });

    // Hide curtain
    tl.set(curtainRef.current, {
      display: "none",
    });

    // Page reveal animation
    tl.fromTo(
      pageRef.current,
      {
        opacity: 0,
        scale: 1.05,
        y: 40,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );
  }, [currentPath]);

  return (
    <div className="relative overflow-hidden">
      {/* Curtain Overlay */}
      <div
        ref={curtainRef}
        className="fixed inset-0 z-[9999] hidden pointer-events-none"
      >
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="curtain-panel flex-1 bg-black"
          ></div>
        ))}
      </div>

      {/* Page Content */}
      <div ref={pageRef}>
        {children}
      </div>
    </div>
  );
};

export default CurtainTransition;