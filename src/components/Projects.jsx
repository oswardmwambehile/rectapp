import React from "react";

const projects = [
  {
    title: "React Portfolio Website",
    image: "/images/project1.png",
    description:
      "Modern Developer Portfolio Website built with React and Tailwind CSS with animated navbar, hero section, and interactive projects carousel.",
    libraries: ["React", "Tailwind CSS", "Framer Motion", "React Icons"],
    live: "https://your-live-demo-link.com",
    github: "https://github.com/yourusername/react-portfolio",
  },
  {
    title: "AI Recipe Generator",
    image: "/images/project2.png",
    description:
      "Full-Stack AI Recipe Generator App using PERN stack (PostgreSQL, Express, React, Node.js).",
    libraries: ["React", "Node.js", "Express", "PostgreSQL", "Axios"],
    live: "https://your-live-demo-link.com",
    github: "https://github.com/yourusername/ai-recipe-generator",
  },
  {
    title: "Learning Assistant App",
    image: "/images/project3.png",
    description:
      "AI-Powered Learning Assistant built with MERN stack, offering personalized content and Q&A features.",
    libraries: ["React", "MongoDB", "Node.js", "Express", "ChatGPT API"],
    live: "https://your-live-demo-link.com",
    github: "https://github.com/yourusername/learning-assistant",
  },
  {
    title: "E-commerce Store",
    image: "/images/project4.png",
    description:
      "Fully functional e-commerce store with product listings, shopping cart, and payment gateway integration.",
    libraries: ["React", "Tailwind CSS", "Stripe API", "React Router"],
    live: "https://your-live-demo-link.com",
    github: "https://github.com/yourusername/ecommerce-store",
  },
  {
    title: "Task Management App",
    image: "/images/project5.png",
    description:
      "Task management and productivity app with drag-and-drop features and real-time updates.",
    libraries: ["React", "Firebase", "Tailwind CSS", "React Beautiful DnD"],
    live: "https://your-live-demo-link.com",
    github: "https://github.com/yourusername/task-manager",
  },
  {
    title: "Blog Platform",
    image: "/images/project6.png",
    description:
      "Responsive blog platform with rich text editor, comments, and user authentication.",
    libraries: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    live: "https://your-live-demo-link.com",
    github: "https://github.com/yourusername/blog-platform",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-900 py-20" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Projects Showcase
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 border border-gray-700"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.libraries.map((lib, idx) => (
                    <span
                      key={idx}
                      className="bg-green-700/30 text-green-400 px-3 py-1 rounded-full text-sm backdrop-blur-sm"
                    >
                      {lib}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;