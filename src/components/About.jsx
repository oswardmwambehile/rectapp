// IMPORTS MUST BE AT THE TOP
import { FaProjectDiagram, FaUsers, FaAward, FaReact, FaNodeJs, FaPython, FaPhp, FaGitAlt, FaDatabase, FaDocker, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiBootstrap, SiCircleci } from "react-icons/si";

export default function About() {
  const techs = [
    { name: "React", icon: <FaReact size={20} className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={20} className="text-blue-400" /> },
    { name: "Django", icon: <SiDjango size={20} className="text-green-400" /> },
    { name: "Node.js", icon: <FaNodeJs size={20} className="text-green-600" /> },
    { name: "Python", icon: <FaPython size={20} className="text-yellow-400" /> },
    { name: "PHP", icon: <FaPhp size={20} className="text-indigo-500" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={20} className="text-purple-500" /> },
    { name: "MySQL", icon: <FaDatabase size={20} className="text-blue-600" /> },
    { name: "CI/CD", icon: <SiCircleci size={20} className="text-pink-500" /> },
    { name: "Git", icon: <FaGitAlt size={20} className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub size={20} className="text-gray-300" /> },
    { name: "Docker", icon: <FaDocker size={20} className="text-blue-400" /> },
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Django", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 90 },
    { name: "PHP", level: 70 },
    { name: "Bootstrap", level: 85 },
    { name: "MySQL", level: 80 },
    { name: "CI/CD", level: 70 },
  ];

  const specialties = [
    { title: "Web Development", icon: <FaReact size={24} /> },
    { title: "UI/UX Design", icon: <SiBootstrap size={24} /> },
    { title: "Mobile Development", icon: <FaNodeJs size={24} /> },
    { title: "Software Engineering", icon: <FaPython size={24} /> },
  ];

  return (
    <section
      id="about"
      className="w-full py-20 px-6 md:px-20 bg-gray-900 text-gray-100 relative overflow-hidden"
    >
      <div className="flex flex-col md:flex-row gap-10">
        {/* LEFT SIDE - About + Stats */}
        <div className="md:w-1/2 flex flex-col gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl text-white mb-4">About Me</h2>
            <p className="github-font text-white text-[17px] md:text-[18px] max-w-2xl leading-7 tracking-wide font-normal">
             I'm a passionate developer with an unwavering love for bringing ideas to life through code. For the past 3 years, I've been immersed in the ever-evolving tech industry, where I've had the incredible privilege of working on a diverse array of projects—from dynamic mobile apps to sophisticated web applications. Each project has fueled my passion for problem-solving and creativity, pushing me to constantly strive for excellence. Throughout my journey, I've sharpened my skills in Python (Django), C# (.NET), and Angular, but my hunger for knowledge and personal growth drives me to explore new technologies, frameworks, and innovative solutions.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni saepe, explicabo nihil. Est, autem error cumque ipsum repellendus veniam sed blanditiis unde ullam maxime veritatis perferendis cupiditate, at non esse!

What excites me most is the limitless potential of technology to transform ideas into tangible, meaningful impact. I firmly believe that when used the right way, technology isn't just a tool—it's a force that can inspire change, empower communities, and solve some of the world's most pressing challenges. That’s what fuels my passion every day: the opportunity to build, to create , and to leave a lasting impact through the projects I contribute to..
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
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

        {/* RIGHT SIDE - Tech Stack + Skills + Specialty */}
        <div className="md:w-1/2 flex flex-col gap-12">
          <h3 className="text-3xl font-semibold text-white mb-6 text-center md:text-left">My Tech Stack & Skills</h3>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            {techs.map((tech) => (
              <span key={tech.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-gray-100 hover:bg-green-500 transition cursor-pointer">
                {tech.icon} {tech.name}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="w-full">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-3 bg-green-500 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {specialties.map((item) => (
              <div key={item.title} className="glass p-4 flex items-center gap-3 rounded-xl hover:scale-105 transition transform cursor-pointer">
                {item.icon}
                <span className="text-white font-semibold">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}