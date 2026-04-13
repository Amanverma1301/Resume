import avatarImg from "../assets/font/imag.png";

export default function Avatar() {
  return (
    <div className="relative w-80 h-100 group cursor-pointer">

      {/* 🔥 Animated Glow Background */}
      <div className="absolute inset-0  opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

      {/* 💎 Card */}
      <div className="relative w-full h-full  overflow-hidden shadow-2xl transform group-hover:scale-105 transition duration-500">

        {/* ✨ Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
          <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-1000"></div>
        </div>

        {/* 🖼 Avatar Image */}
        <img
          src={avatarImg}
          alt="Aman Verma Avatar"
          className="w-full h-full object-cover"
        />

        {/* 🌊 Overlay Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
      </div>
    </div>
  );
}