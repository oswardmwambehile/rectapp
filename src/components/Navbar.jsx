import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-black/70 shadow-lg"
            : "bg-black/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <FaCode className="text-white text-4xl md:text-5xl" />

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 items-center text-white">
            <a href="#hero" className="hover:text-green-400 transition">Home</a>
            <a href="#about" className="hover:text-green-400 transition">About</a>
            <a href="#skills" className="hover:text-green-400 transition">Skills</a>
            <a href="#projects" className="hover:text-green-400 transition">Projects</a>
            <a href="#services" className="hover:text-green-400 transition">Services</a>
            <a href="#contact" className="hover:text-green-400 transition">Contact</a>
            <a href="#education" className="hover:text-green-400 transition">Education</a>
            <a href="#motivation" className="hover:text-green-400 transition">Motivations</a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl text-white z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 z-40 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-3/4 max-w-xs bg-black text-white shadow-lg transform transition-transform duration-300 z-50 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 p-6 mt-16 text-lg">
          <a href="#hero" onClick={() => setMobileOpen(false)} className="hover:text-green-400">Home</a>
          <a href="#about" onClick={() => setMobileOpen(false)} className="hover:text-green-400">About</a>
          <a href="#skills" onClick={() => setMobileOpen(false)} className="hover:text-green-400">Skills</a>
          <a href="#projects" onClick={() => setMobileOpen(false)} className="hover:text-green-400">Projects</a>
          <a href="#services" onClick={() => setMobileOpen(false)} className="hover:text-green-400">Services</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="hover:text-green-400">Contact</a>
          <a href="#education" onClick={() => setMobileOpen(false)} className="hover:text-green-400">Education</a>
          <a href="#motivation" onClick={() => setMobileOpen(false)} className="hover:text-green-400">Motivations</a>
        </div>
      </div>
    </>
  );
}