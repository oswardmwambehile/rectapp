import { FaReact, FaPython, FaPhp, FaGitAlt, FaDatabase, FaDocker, FaGithub, FaNetworkWired, FaServer, FaCogs } from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiBootstrap, SiLaravel, SiJavascript, SiHtml5, SiCss3, SiCircleci } from "react-icons/si";

export default function Skills() {
  const techs = [
    { name: "React", icon: <FaReact size={20} className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={20} className="text-blue-400" /> },
    { name: "Django", icon: <SiDjango size={20} className="text-green-400" /> },
    { name: "Django REST Framework", icon: <SiDjango size={20} className="text-green-600" /> },
    { name: "Laravel", icon: <SiLaravel size={20} className="text-red-500" /> },
    { name: "Python", icon: <FaPython size={20} className="text-yellow-400" /> },
    { name: "PHP", icon: <FaPhp size={20} className="text-indigo-500" /> },
    { name: "JavaScript", icon: <SiJavascript size={20} className="text-yellow-300" /> },
    { name: "HTML5", icon: <SiHtml5 size={20} className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 size={20} className="text-blue-600" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={20} className="text-purple-500" /> },
    { name: "MySQL", icon: <FaDatabase size={20} className="text-blue-600" /> },
    { name: "Git", icon: <FaGitAlt size={20} className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub size={20} className="text-gray-300" /> },
    { name: "Docker", icon: <FaDocker size={20} className="text-blue-400" /> },
    { name: "CI/CD", icon: <SiCircleci size={20} className="text-pink-500" /> },
    { name: "Networking", icon: <FaNetworkWired size={20} className="text-blue-400" /> },
    { name: "Server Deployment", icon: <FaServer size={20} className="text-purple-500" /> },
    { name: "System Admin", icon: <FaCogs size={20} className="text-yellow-400" /> },
    { name: "ICT Support", icon: <FaCogs size={20} className="text-green-400" /> },
  ];

  const skills = [
    { name: "Python", level: 90, color: "bg-yellow-400" },
    { name: "PHP", level: 80, color: "bg-indigo-500" },
    { name: "Laravel", level: 85, color: "bg-red-500" },
    { name: "Django", level: 80, color: "bg-green-400" },
    { name: "Django REST Framework", level: 75, color: "bg-green-600" },
    { name: "JavaScript", level: 85, color: "bg-yellow-300" },
    { name: "HTML5", level: 90, color: "bg-orange-500" },
    { name: "CSS", level: 85, color: "bg-blue-600" },
    
  ];

  const specialties = [
    { title: "Web Development", icon: <FaReact size={24} /> },
    { title: "Backend Development", icon: <FaPython size={24} /> },
    { title: "UI/UX Design", icon: <SiBootstrap size={24} /> },
    { title: "Software Engineering", icon: <FaPhp size={24} /> },
    { title: "Networking & DevOps", icon: <FaNetworkWired size={24} /> },
    { title: "Server Deployment", icon: <FaServer size={24} /> },
    { title: "System Administration", icon: <FaCogs size={24} /> },
    { title: "ICT Support", icon: <FaCogs size={24} /> },
  ];

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-12 mt-20 px-4" id="skills">
      <h3 className="text-3xl font-semibold text-white mb-6 text-center">
        My Tech Stack & Skills
      </h3>

      {/* TECH STACK */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {techs.map((tech) => (
          <span
            key={tech.name}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-gray-100 hover:bg-green-500 transition cursor-pointer"
          >
            {tech.icon} {tech.name}
          </span>
        ))}
      </div>

      {/* SKILL BARS */}
      <div className="flex flex-col gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="w-full mx-auto">
            <div className="flex justify-between mb-1 text-gray-300">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
              <div
                className={`${skill.color} h-4 rounded-full transition-all duration-700`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* SPECIALTIES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {specialties.map((item) => (
          <div
            key={item.title}
            className="glass p-4 flex items-center gap-3 rounded-xl hover:scale-105 transition transform cursor-pointer"
          >
            {item.icon}
            <span className="text-white font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}