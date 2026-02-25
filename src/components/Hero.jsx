import oswardImage from "../assets/osward.png";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 relative overflow-hidden bg-gray-900 text-gray-100"
    >
      {/* LEFT SIDE */}
      <div className="md:w-1/2 flex flex-col gap-6 z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Hi, I&apos;m <span className="text-red-400">Osward</span>
        </h1>

        <h2 className="text-3xl md:text-4xl font-semibold text-green-400">
          <Typewriter
            words={[
              "Web Developer",
              "UI/UX Designer",
              "Mobile Developer",
              "Software Engineer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>

        <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed">
          Excellence in Technology Industry — merging innovation with reliability,
          delivering scalable, modern, and high-performance web applications
          using React, Tailwind CSS, Laravel, and Django.
        </p>

        <a
          href="#projects"
          className="w-max px-8 py-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition duration-300 shadow-lg shadow-green-500/30"
        >
          Visit My GitHub
        </a>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center relative">
        
        <div className="relative w-[420px] h-[420px] md:w-[520px] md:h-[520px] flex items-center justify-center float-animation">

          {/* Rotating Gradient Glow */}
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-spin-slow blur-2xl opacity-70"></div>

          {/* Glass Background Layer */}
          <div className="absolute inset-[8px] rounded-[36px] backdrop-blur-xl border border-white/10"></div>

          {/* Image */}
          <div className="relative rounded-[36px] overflow-hidden transform transition duration-700 hover:scale-105">
            <img
              src={oswardImage}
              alt="Osward"
              className="w-[400px] h-[400px] md:w-[480px] md:h-[480px] object-cover rounded-[36px]"
            />
          </div>

        </div>
      </div>

      {/* Background Blur Effect */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px]"></div>
    </section>
  );
}