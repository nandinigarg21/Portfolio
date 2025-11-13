import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0d0b14] to-[#1a1325] text-white py-10 px-6 sm:px-10 md:px-[10vw] border-t border-gray-800 font-sans">
      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left Side — Copyright */}
        <p className="text-gray-400 text-sm sm:text-base">
          © 2025{" "}
          <span className="text-[#8245ec] font-semibold">Nandini Garg</span>. All
          rights reserved.
        </p>

        {/* Middle — Policy Links */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-gray-400 text-sm sm:text-base">
          <a
            href="#"
            className="hover:text-[#8245ec] transition-colors duration-300 cursor-pointer"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-[#8245ec] transition-colors duration-300 cursor-pointer"
          >
            Privacy Policy
          </a>
        </div>

        {/* Right Side — Socials */}
        <div className="flex items-center justify-center md:justify-end gap-4 sm:gap-5">
          <a
            href="mailto:nandinigarg215@gmail.com"
            className="text-gray-400 hover:text-[#8245ec] transition-all duration-300"
          >
            <FaEnvelope size={22} />
          </a>
          <a
            href="https://github.com/nandinigarg21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#8245ec] transition-all duration-300"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/nandini215"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#8245ec] transition-all duration-300"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-800 my-6"></div>

      {/* Bottom Text */}
      <p className="text-center text-gray-500 text-xs sm:text-sm">
        Designed & Developed with ❤️ by{" "}
        <span className="text-[#8245ec] font-medium">Nandini Garg</span>
      </p>
    </footer>
  );
};

export default Footer;
