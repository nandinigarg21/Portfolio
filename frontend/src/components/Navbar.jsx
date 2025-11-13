import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="text-white text-lg flex items-center justify-between sticky top-0 bg-black/80 backdrop-blur-md z-50 px-6 sm:px-10 py-4">
      {/* Left: Logo and Name */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="logo" className="h-12 w-12 sm:h-14 sm:w-14 object-contain" />
        <span className="text-xl sm:text-2xl font-semibold tracking-wide">
          Nandini Garg
        </span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center justify-center gap-8">
        {['about', 'skill', 'project', 'education', 'contact'].map((section) => (
          <li key={section}>
            <Link
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              onClick={closeMenu}
              activeClass="text-[#8245ec] underline"
              className="cursor-pointer hover:text-[#8245ec] transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Social Links */}
      <div className="hidden md:flex space-x-5">
        <a
          href="https://github.com/nandinigarg21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-[#8245ec] transition"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/nandini215"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-[#8245ec] transition"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-gray-200 cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md border-t border-gray-700 py-6 flex flex-col items-center space-y-6 md:hidden">
          {['about', 'skill', 'project', 'education', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
              className="text-lg cursor-pointer hover:text-[#8245ec] transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}

          {/* Mobile Social Links */}
          <div className="flex space-x-5 pt-4">
            <a
              href="https://github.com/nandinigarg21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec] transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/nandini215"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec] transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
