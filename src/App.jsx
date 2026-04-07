import React from 'react'
import Navbar from './components/Navbar';
import  Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contacts';
import Education from './components/Education';
import Motivation from './components/Motivation';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Services/>
      <Contact/>
      <Education/>
      <Motivation/>
      <Footer/>
    
    </div>
  )
}

export default App
