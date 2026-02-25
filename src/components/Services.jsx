import React from "react";
import { FaReact, FaNodeJs, FaMobileAlt, FaSearch, FaCloud, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive, modern, and high-performance websites and web apps using React, Tailwind CSS, Django, and Node.js.",
    icon: <FaReact size={50} className="text-cyan-400" />,
  },
  {
    title: "Mobile Development",
    description:
      "Creating sleek and responsive mobile applications for iOS and Android platforms using React Native and Flutter.",
    icon: <FaMobileAlt size={50} className="text-green-400" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user-centered interfaces with a focus on aesthetics, usability, and smooth user experiences.",
    icon: <FaPaintBrush size={50} className="text-pink-400" />,
  },
  {
    title: "DevOps & API Integration",
    description:
      "Automating deployment pipelines, integrating APIs, and ensuring smooth CI/CD workflows for modern apps.",
    icon: <FaCloud size={50} className="text-blue-400" />,
  },
  {
    title: "SEO Optimization",
    description:
      "Optimizing websites to rank higher on search engines, improve performance, and increase organic traffic.",
    icon: <FaSearch size={50} className="text-yellow-400" />,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-gray-900 py-20 scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 text-center shadow-lg transform hover:scale-105 transition duration-300 border border-gray-700"
            >
              <div className="mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;