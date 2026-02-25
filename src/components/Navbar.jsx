import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/20 dark:bg-black/20 shadow-lg"
          : "bg-white/10 dark:bg-black/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Osward</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#hero" className="hover:text-green-400 transition">Home</a>
          <a href="#about" className="hover:text-green-400 transition">About</a>
          <a href="#projects" className="hover:text-green-400 transition">Projects</a>
          <a href="#services" className="hover:text-green-400 transition">Services</a>
          <a href="#contact" className="hover:text-green-400 transition">Contact</a>
          <a href="#education" className="hover:text-green-400 transition">Education</a>
          <a href="#motivation" className="hover:text-green-400 transition">Motivations</a>
          
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col items-center bg-white/20 dark:bg-black/20 backdrop-blur-lg gap-4 py-4">
          <a href="#hero" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMobileOpen(false)}>Projects</a>
          <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
          <a href="#educataion" onClick={() => setMobileOpen(false)}>Education</a>
          <a href="#motivatins" onClick={() => setMobileOpen(false)}>Motivations</a>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}