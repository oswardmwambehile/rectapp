import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8 px-6 md:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* LEFT - Branding */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Osward<span className="text-green-500">.</span>
          </h2>
          <p className="leading-relaxed">
            Building modern, scalable, and accessible digital experiences.
            Passionate about clean code, innovation, and impactful solutions.
          </p>

          <div className="flex gap-4 mt-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
              className="hover:text-white transition">
              <FaGithub size={22} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
              className="hover:text-blue-500 transition">
              <FaLinkedin size={22} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
              className="hover:text-blue-400 transition">
              <FaTwitter size={22} />
            </a>
            <a href="https://wa.me/255000000000" target="_blank" rel="noopener noreferrer"
              className="hover:text-green-500 transition">
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>

        {/* CENTER - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li><a href="#about" className="hover:text-green-400 transition">About</a></li>
            <li><a href="#services" className="hover:text-green-400 transition">Services</a></li>
            <li><a href="#projects" className="hover:text-green-400 transition">Projects</a></li>
            <li><a href="#education" className="hover:text-green-400 transition">Education</a></li>
            <li><a href="#contact" className="hover:text-green-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT - Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Contact Info
          </h3>
          <p className="mb-2">Dar es Salaam, Tanzania</p>
          <p className="mb-2">Email: youremail@example.com</p>
          <p className="mb-2">Phone: +255 123 456 789</p>
          <p>WhatsApp: +255 987 654 321</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>
          © {new Date().getFullYear()} Osward. All rights reserved.
        </p>

        <a
          href="#home"
          className="mt-4 md:mt-0 flex items-center gap-2 hover:text-green-400 transition"
        >
          Back to Top <FaArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;