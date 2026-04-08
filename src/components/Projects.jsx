import React from "react";

const projects = [
  {
    title: "Staystz Booking,Car Rental And Residence System",
    image: "/portifolio.PNG",
    description:
      "Stays is a comprehensive digital platform designed to simplify and streamline the management of travel-related services, including car rentals, property bookings, and residence management. The system offers users a seamless experience from browsing available cars or properties, making reservations, and managing their bookings in real-time.",
    libraries: ["React", "Tailwind CSS", "Framer Motion", "React Icons"],
    live: "https://www.staystz.com/",
    github: "https://github.com/yourusername/react-portfolio",
  },
  {
    title: "Student Studying Portal",
    image: "/portal.PNG",
    description:
      "An online portal designed to help students organize and manage their study materials, track their academic progress, access a wide range of learning resources, and connect with peers and instructors for a seamless learning experience.The system allows students to upload and categorize notes, assignments, and project files, making it easy to retrieve and review materials anytime. ",
    libraries: ["React", "Node.js", "Express", "PostgreSQL", "Axios"],
    live: "https://student-studying-portal.onrender.com/",
    github: "https://github.com/yourusername/ai-recipe-generator",
  },
  {
    title: "Online Shopping System ",
    image: "/shop.PNG",
    description:
      "An online shopping system designed to provide users with a seamless and convenient e-commerce experience. It allows customers to browse products, compare options, and make purchases from anywhere at any time.The system features user authentication, product catalogs, shopping carts, and secure payment gateways, ensuring a smooth and safe shopping process. Customers can track their orders, view order history, and receive real-time updates on delivery status",
    libraries: ["React", "MongoDB", "Node.js", "Express", "ChatGPT API"],
    live: "https://my-project-1-yf3a.onrender.com/",
    github: "https://github.com/yourusername/learning-assistant",
  },
  {
    title: "Sales Tracking System",
    image: "/sales.PNG",
    description:
      "A system to manage and monitor sales visits. Tracks sales personnel, customer interactions, meeting stages, products discussed, and payment collection. Provides a clear overview of leads, prospects, and customers while recording sales outcomes and visit history.",
    live: "https://sales-tracking-system-xsjn.onrender.com/",
    github: "https://github.com/yourusername/ecommerce-store",
  },
  {
    title: "Volunteer And Donation System",
    image: "/donna.PNG",
    description:
      "A web-based platform designed to connect volunteers, donors, and charitable organizations to make social impact more organized and efficient. The system allows users to register as volunteers, browse volunteer opportunities, and participate in community service events.",
    libraries: ["React", "Tailwind CSS", "Stripe API", "React Router"],
    live: "https://donation-andvolunteer-sytem.onrender.com/",
    github: "https://github.com/yourusername/ecommerce-store",
  },
  {
    title: "StudyingBuddy Room Application",
    image: "/o.JPG",
    description:
      "An online portal designed to help students manage their study materials, track progress, access resources, and connect with peers and instructors for a seamless learning experience.",
    libraries: ["React", "Firebase", "Tailwind CSS", "React Beautiful DnD"],
    live: "https://student-studying-room.onrender.com/",
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
                
                <div className="flex justify-between">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
                  >
                    Live Demo
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