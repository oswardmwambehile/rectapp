import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Simple validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Handle sending form data here (email or API)
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSuccess(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-900 py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row gap-12">
          {/* LEFT SIDE - Image + Contact Info */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start gap-6">
            <img
              src="/code.jpg" // replace with your image
              alt="Contact"
              className="rounded-2xl shadow-lg w-full md:w-4/5"
            />
            <div className="flex flex-col gap-4 text-gray-300 mt-4">
              <div className="flex items-center gap-2">
                <FaPhone className="text-green-400" /> 
                <span>+255 123 456 789</span>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-green-500" />
                <span>+255 689 859 255</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
                <span>oswardmwambehile@gmail.com</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={30} className="hover:text-white transition text-red-400" />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={30} className="hover:text-blue-500 transition text-red-400" />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={30} className="hover:text-blue-400 transition text-red-400" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="md:w-1/2 bg-gray-800/70 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            {success && (
              <div className="bg-green-500 text-white p-3 rounded mb-4">
                Message sent successfully!
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;