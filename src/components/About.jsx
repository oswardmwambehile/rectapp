import { FaProjectDiagram, FaUsers, FaAward } from "react-icons/fa";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-6 items-center" id="about">
      
      {/* LEFT: IMAGE */}
      <div className="md:w-[45%] flex justify-center md:justify-end md:pr-4">
        <img
          src="konde.png"
          alt="Osward"
          className="w-96 h-96 md:w-[500px] md:h-[500px] object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* RIGHT: TEXT + STATS */}
      <div className="md:w-[55%] flex flex-col gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">About Me</h2>
          <p className="github-font text-white text-[17px] md:text-[18px] leading-7 tracking-wide font-normal">
            I'm a passionate developer with an unwavering love for bringing ideas to life through code. For the past 3 years, I've been immersed in the ever-evolving tech industry, where I've had the incredible privilege of working on a diverse array of projects—from dynamic mobile apps to sophisticated web applications. Each project has fueled my passion for problem-solving and creativity, pushing me to constantly strive for excellence. Throughout my journey, I've sharpened my skills in Python (Django), C# (.NET), and Angular, but my hunger for knowledge and personal growth drives me to explore new technologies, frameworks, and innovative solutions.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni saepe, explicabo nihil. Est, autem error cumque ipsum repellendus veniam sed blanditiis unde ullam maxime veritatis perferendis cupiditate, at non esse!

            What excites me most is the limitless potential of technology to transform ideas into tangible, meaningful impact. I firmly believe that when used the right way, technology isn't just a tool—it's a force that can inspire change, empower communities, and solve some of the world's most pressing challenges. That’s what fuels my passion every day: the opportunity to build, to create, and to leave a lasting impact through the projects I contribute to..
          </p>
        </div>

        {/* STATS */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="glass p-6 flex-1 rounded-xl text-center hover:scale-105 transition transform">
            <FaUsers size={40} className="mx-auto mb-2 text-green-400" />
            <h3 className="text-2xl font-bold text-white">50+</h3>
            <p className="text-gray-300">Clients Worldwide</p>
          </div>
          <div className="glass p-6 flex-1 rounded-xl text-center hover:scale-105 transition transform">
            <FaProjectDiagram size={40} className="mx-auto mb-2 text-blue-400" />
            <h3 className="text-2xl font-bold text-white">120+</h3>
            <p className="text-gray-300">Projects Completed</p>
          </div>
          <div className="glass p-6 flex-1 rounded-xl text-center hover:scale-105 transition transform">
            <FaAward size={40} className="mx-auto mb-2 text-purple-400" />
            <h3 className="text-2xl font-bold text-white">10+</h3>
            <p className="text-gray-300">Awards Won</p>
          </div>
        </div>
      </div>

    </div>
  );
}