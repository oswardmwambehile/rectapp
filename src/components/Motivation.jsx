import React from "react";
import {
  FaUniversalAccess,
  FaUsers,
  FaStar,
  FaLightbulb,
  FaHandshake,
  FaShieldAlt,
} from "react-icons/fa";

const motivations = [
  {
    title: "Accessibility",
    icon: <FaUniversalAccess size={45} />,
    description: `Design for All: Implement WCAG standards to build software accessible to everyone.
Regular Testing: Use accessibility tools and gather real user feedback.
Continuous Learning: Stay updated with evolving accessibility practices.`,
  },
  {
    title: "Empowerment",
    icon: <FaUsers size={45} />,
    description: `User-Centric Design: Build solutions that empower users effortlessly.
Provide Tools: Enable customization and flexibility.
Educate: Offer documentation and guidance for full software potential.`,
  },
  {
    title: "Excellence",
    icon: <FaStar size={45} />,
    description: `Quality First: Write clean, scalable, maintainable code.
Continuous Learning: Engage with workshops and developer communities.
Feedback Loop: Constant refinement through feedback.`,
  },
  {
    title: "Innovation",
    icon: <FaLightbulb size={45} />,
    description: `Stay Curious: Explore emerging technologies.
Iterative Development: Apply agile principles.
Encourage Creativity: Invest time in personal projects and experimentation.`,
  },
  {
    title: "Team Work",
    icon: <FaHandshake size={45} />,
    description: `Open Communication: Share ideas transparently.
Collaborative Tools: Use Git, CI/CD, and team platforms effectively.
Celebrate Diversity: Embrace diverse perspectives.`,
  },
  {
    title: "Responsibility",
    icon: <FaShieldAlt size={45} />,
    description: `Ethical Coding: Build responsibly for society.
Security First: Protect user data and privacy.
Sustainability: Optimize performance and reduce resource waste.`,
  },
];

const Motivation = () => {
  return (
    <section
      id="motivation"
      className="py-24 px-6 md:px-16 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl  text-center text-white mb-6">
          What Drives Me
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-20 text-lg">
          The six core values that shape how I design, develop, and deliver impactful digital solutions.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {motivations.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl 
              hover:scale-105 hover:border-green-500 transition-all duration-300 group"
            >
              <div className="text-green-400 mb-6 group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Motivation;