import React from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const educationData = [
  {
    level: "Degree",
    title: "Bachelor Degree in Information Technology",
    school: "National Institute of Transport (NIT)",
    duration: "2020 - 2023",
    description:
      "Focused on software engineering, web technologies, databases, networking, and cloud computing.",
    icon: <FaGraduationCap size={26} />,
  },
  {
    level: "Advanced Education",
    title: "Advanced Secondary Education",
    school: "Matema Beach Secondary School",
    duration: "2018 - 2020",
    description:
      "Specialized in Physics, Mathematics, and Computer Studies.",
    icon: <FaGraduationCap size={26} />,
  },
  {
    level: "Secondary Education",
    title: "Ordinary Secondary Education",
    school: "Mwaya Secondary School",
    duration: "2014 - 2017",
    description:
      "Completed O-Level education with strong academic performance.",
    icon: <FaSchool size={26} />,
  },
  {
    level: "Primary Education",
    title: "Primary School Certificate",
    school: "Mwaya Primary School",
    duration: "2007 - 2013",
    description:
      "Built strong academic foundation and leadership skills.",
    icon: <FaSchool size={26} />,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 px-6 md:px-16 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-white text-center mb-20">
          Education Journey
        </h2>

        <div className="relative">
          {/* Center vertical line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 h-full rounded-full"></div>

          <div className="space-y-16">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Timeline Icon */}
                <div className="absolute md:left-1/2 transform md:-translate-x-1/2 bg-gray-900 border-4 border-green-500 p-4 rounded-full shadow-lg z-10">
                  <div className="text-green-400">{edu.icon}</div>
                </div>

                {/* Card */}
                <div
                  className={`w-full md:w-5/12 mt-12 md:mt-0 bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:border-green-500 ${
                    index % 2 === 0
                      ? "md:mr-auto"
                      : "md:ml-auto"
                  }`}
                >
                  <span className="text-sm uppercase tracking-wider text-green-400 font-semibold">
                    {edu.level}
                  </span>

                  <h3 className="text-2xl font-bold text-white mt-2">
                    {edu.title}
                  </h3>

                  <p className="text-gray-400 mt-1">{edu.school}</p>

                  <p className="text-gray-500 text-sm mt-1 italic">
                    {edu.duration}
                  </p>

                  <p className="text-gray-300 mt-4 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;