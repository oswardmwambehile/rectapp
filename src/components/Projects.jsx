import React from "react";

const projects = [
  {
    title: "Online Shopping System",
    image: "/shop.PNG",
    description:
      "A comprehensive e-commerce platform that allows users to browse products, add items to their cart, make secure payments, and track shipments, all within an intuitive user interface.",
    libraries: ["React", "Tailwind CSS", "Framer Motion", "React Icons"],
    live: "https://oswardimwambehile.pythonanywhere.com/",
    github: "https://github.com/yourusername/react-portfolio",
  },
  {
    title: "Student Studying Portal",
    image: "/portal.PNG",
    description:
      "An online portal designed to help students manage their study materials, track progress, access resources, and connect with peers and instructors for a seamless learning experience.",
    libraries: ["React", "Node.js", "Express", "PostgreSQL", "Axios"],
    live: "https://kondeosward.pythonanywhere.com/",
    github: "https://github.com/yourusername/ai-recipe-generator",
  },
  {
    title: "Donation and Volunteer System",
    image: "/donna.PNG",
    description:
      "A platform that connects donors and volunteers with various charitable organizations. It allows users to donate items or money, volunteer for events, and track their contributions in real-time.",
    libraries: ["React", "MongoDB", "Node.js", "Express", "ChatGPT API"],
    live: "https://philimonosward.pythonanywhere.com/",
    github: "https://github.com/yourusername/learning-assistant",
  },
  {
    title: "Staystz Booking,Car Rental And Residence System",
    image: "/stay.PNG",
    description:
      "Fully functional e-commerce store with product listings, shopping cart, and payment gateway integration.",
    libraries: ["React", "Tailwind CSS", "Stripe API", "React Router"],
    live: "https://staystz.pythonanywhere.com/",
    github: "https://github.com/yourusername/ecommerce-store",
  },
  {
    title: "StudyingBuddy Room Application",
    image: "/o.JPG",
    description:
      "An online portal designed to help students manage their study materials, track progress, access resources, and connect with peers and instructors for a seamless learning experience.",
    libraries: ["React", "Firebase", "Tailwind CSS", "React Beautiful DnD"],
    live: "https://oswadphilimonmwambehile.pythonanywhere.com/",
    github: "https://oswadphilimonmwambehile.pythonanywhere.com/",
  },
  {
    title: "Kyela District Grievances System",
    image: "/kyela.PNG",
    description:
      "A platform that allows citizens of Kyela District to submit grievances and complaints related to public services. The system helps authorities track, manage, and respond to issues for better governance..",
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