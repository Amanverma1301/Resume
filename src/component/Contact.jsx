import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import wall  from "../assets/cn.png";
import img  from "../assets/img.png";
import wal from "../assets/font/wall.jpg";
import  {ToastContainer,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
gsap.registerPlugin(ScrollTrigger);
import emailjs from "@emailjs/browser";
import black from "../assets/about1.png";

export default function Contact() {
  const contactRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);
  const imgRef = useRef(null);
  const btnRef = useRef(null);

  // 🧲 Magnetic Button
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

  useEffect(() => {
    gsap.set(formRef.current.children, {
  opacity: 1,
  y: 0,
});
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
    });

    // 🎬 Main Container
    tl.from(contactRef.current, {
      opacity: 0,
      y: 100,
      scale: 0.95,
      duration: 1.2,
      ease: "power4.out",
    });

    // 👈 Left Content
    tl.from(
      leftRef.current.children,
      {
        x: -80,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=1"
    );

    // 👉 Form Fields
    tl.from(
      formRef.current.children,
      {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
         immediateRender: false,
      },
      "-=1"
    );

    // 🖼️ Floating Image
    gsap.to(imgRef.current, {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });

    // 🌊 Parallax Glow
    gsap.to(".contact-glow", {
      y: -80,
      scrollTrigger: {
        trigger: contactRef.current,
        scrub: true,
      },
    });

  }, []);


  
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

 const [successMessage, setSuccessMessage] = useState("");

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_7psyi9e",
      "template_53h2lkc",
      formRef.current,
      "8SbMuId2JYR8a9aFm"
    )
    .then(
      () => {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        toast.error("Failed to send message!");
        console.error(error.text);
      }
    );
};
  return (
    <section id="contact" ref={contactRef} className="overflow-x-hidden w-full">
      <div className="relative min-h-screen overflow-hidden">

        {/* Background */}
        <img
          src={black}
          className="absolute w-full h-full object-cover opacity-20"
        />
<div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      {/* Heading */}
      <div className="px-6 md:px-12 lg:px-20 pt-10 relative z-10 w-full max-w-4xl mb-14">
        <h2 className="text-5xl font-semibold text-white/90">
          Stay Connected
        </h2>
        <p className="mt-3 text-lg text-white/60">
          Here for all your needs
        </p>

        <div className="w-40 mt-4 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      </div>    
        {/* Glow */}
        <div className="contact-glow absolute w-[400px] h-[400px] bg-purple-500/10 blur-[120px] top-[-100px] left-[-100px]" />
        <div className="contact-glow absolute w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] bottom-[-100px] right-[-100px]" />

        <div className="flex items-center justify-center min-h-screen px-6">

          {/* Main Container */}
          <div className="w-full max-w-6xl rounded-[40px] shadow-xl p-10 grid md:grid-cols-2 gap-10 relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">

            {/* LEFT SIDE */}
            <div ref={leftRef} className="flex flex-col justify-between">
              
              <div>
                <h2 className="text-3xl text-white md:text-4xl font-serif mb-6">
                  Let’s Work together!
                </h2>

                <div className="space-y-5 text-gray-300">
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-pink-100 p-3 rounded-full">📍</div>
                    <p>
                      B-32 MONNET COLONY MANDIR HASAUD <br /> RAIPUR, 2000
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-pink-100 rounded-full"> <img
          src={img  }
          className=" w-[3vw] h-[5vh] "
        /></div>
                    <p>aman1301v@gmail.com</p>
                  </div>

                </div>
              </div>

              {/* Image */}
              <div className="mt-10 
               flex justify-center md:justify-start">
                <img
                  ref={imgRef}
                  src={wall}
                  alt="contact"
                  className="w-56 md:w-84 lg:w-72 object-contain"
                />
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
           <form
  ref={formRef}
  onSubmit={handleSubmit}
  className="w-full space-y-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10"
>

  {/* Name */}
  <div className="relative group">
    <input
      type="text"
      name="name"
      required
      value={formData.name}
      onChange={handleChange}
      className="peer w-full bg-transparent border-b border-white/20 py-2 text-white placeholder-transparent focus:outline-none"
      placeholder="Your Name"
    />
    <label className="absolute left-0 top-2 text-white/50 text-sm transition-all duration-300 
    peer-focus:-top-3 peer-focus:text-xs peer-valid:-top-3">
      Name
    </label>
  </div>

  {/* Email */}
  <div className="relative group">
    <input
      type="email"
      name="email"
      required
      value={formData.email}
      onChange={handleChange}
      className="peer w-full bg-transparent border-b border-white/20 py-2 text-white placeholder-transparent focus:outline-none"
      placeholder="Your Email"
    />
    <label className="absolute left-0 top-2 text-white/50 text-sm transition-all duration-300 
    peer-focus:-top-3 peer-focus:text-xs peer-valid:-top-3">
      Email
    </label>
  </div>

  {/* Message */}
  <div className="relative group">
    <textarea
      rows="4"
      name="message"
      required
      value={formData.message}
      onChange={handleChange}
      className="peer w-full bg-transparent border-b border-white/20 py-2 text-white placeholder-transparent focus:outline-none resize-none"
      placeholder="Message"
    />
    <label className="absolute left-0 top-2 text-white/50 text-sm transition-all duration-300 
    peer-focus:-top-3 peer-focus:text-xs peer-valid:-top-3">
      Message
    </label>
  </div>

  {/* Button */}
  <button
    type="submit"
    ref={btnRef}
    onMouseMove={handleMagnetic}
    onMouseLeave={resetMagnetic}
    className="bg-red group relative overflow-hidden px-8 py-3 rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
  >
    <span className="flex items-center gap-2">
      Send Message →
    </span>
  </button>
</form>
          </div>
        </div>
      </div>
    </section>
  );
}