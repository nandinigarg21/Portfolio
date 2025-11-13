import React from "react";
import Form from "./Form";
import mail from "../assets/mail-icon.png";
import phone from "../assets/phone-icon.png";
import location from "../assets/location-icon.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-16 sm:gap-20 py-16 sm:py-20 lg:py-28 px-6 sm:px-10 md:px-[10vw] bg-gradient-to-b from-[#0d0b14] to-[#1a1325] text-white"
    >
      {/* Section Heading */}
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Get In Touch
        </h2>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#8245ec] mt-2"></div>
      </div>

      {/* Contact Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10 sm:gap-14 lg:gap-20">
        {/* Left Side — Info */}
        <div className="flex flex-col text-sm sm:text-base md:text-lg gap-6 lg:w-1/2">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-[#8245ec] to-[#b57aff] bg-clip-text drop-shadow-[0_0_8px_rgba(130,69,236,0.5)]">
            Let’s Talk
          </h3>

          <p className="text-gray-400 leading-relaxed">
            I'm currently available to take on new projects, so feel free to send
            me a message about anything you’d like me to work on. You can contact
            me anytime.
          </p>

          <div className="flex items-center gap-3 sm:gap-4">
            <img src={mail} alt="mail" className="w-5 h-5 sm:w-6 sm:h-6" />
            <p className="text-gray-300 break-all">
              nandinigarg215@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <img src={phone} alt="phone" className="w-5 h-5 sm:w-6 sm:h-6" />
            <p className="text-gray-300">+91 8251044733</p>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <img src={location} alt="location" className="w-5 h-5 sm:w-6 sm:h-6" />
            <p className="text-gray-300">Indore, M.P.</p>
          </div>
        </div>

        {/* Right Side — Form */}
        <div className="w-full lg:w-1/2">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
