import React from 'react'
import Navbar from './components/Navbar.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Skills from './components/Skills.jsx'
import Project from './components/Project.jsx'
import Education from './components/Education.jsx'

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-edu">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-10">
        <Navbar />
        <About />
        <Skills />
        <Project />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
