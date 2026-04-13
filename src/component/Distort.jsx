import { useEffect, useRef } from "react";
import hoverEffect from "hover-effect";

export default function DistortionCard() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const effect = new hoverEffect({
      parent: containerRef.current,
      intensity: 0.4,
      speedIn: 1.2,
      speedOut: 1.2,
      image1: "https://i.postimg.cc/qMcShy55/14.jpg",
      image2: "https://i.postimg.cc/13JdMPP0/3.jpg",
      displacementImage: "https://i.postimg.cc/QNTRDRks/4.png",
    });

    return () => {
      // cleanup
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      
      {/* Hover Distortion */}
      <div
        ref={containerRef}
        className="w-[400px] h-[500px] overflow-hidden rounded-xl"
      />

      {/* Title */}
      <h1 className="mt-6 text-2xl font-bold tracking-wide">
        Cinematic Hover Effect
      </h1>
    </div>
  );
}