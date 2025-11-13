import React from "react";
import { education } from "../Constant";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 sm:py-20 lg:py-28 px-6 sm:px-10 md:px-[10vw] bg-gradient-to-b from-[#0d0b14] to-[#1a1325] text-white font-sans scroll-smooth"
    >
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-[#8245ec] to-[#b57aff] bg-clip-text drop-shadow-[0_0_10px_rgba(130,69,236,0.6)]">
          EDUCATION
        </h3>
        <div className="w-20 sm:w-24 md:w-28 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          My education has been a journey of consistent growth and learning. Here’s an
          overview of my academic background.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[#8245ec] to-[#b57aff]"></div>
        {/* Mobile Left Line */}
        <div className="sm:hidden absolute left-4 w-[2px] h-full bg-gradient-to-b from-[#8245ec] to-[#b57aff]"></div>

        {/* Education Items */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-14 sm:mb-16 relative ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Dot */}
            <div
              className={`absolute ${
                index % 2 === 0 ? "sm:left-1/2 sm:-translate-x-1/2" : "sm:left-1/2 sm:-translate-x-1/2"
              } left-3 sm:top-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#8245ec] shadow-[0_0_15px_rgba(130,69,236,0.8)]`}
            ></div>

            {/* Education Card */}
            <div
              className={`relative w-full sm:max-w-md p-5 sm:p-8 rounded-2xl border border-[#3c2f5a] bg-[#0f0b1c]/80 backdrop-blur-md 
                          shadow-[0_0_20px_rgba(130,69,236,0.3)] hover:shadow-[0_0_30px_rgba(130,69,236,0.5)] 
                          transition-all duration-300 hover:-translate-y-2 ${
                            index % 2 === 0
                              ? "sm:ml-0 sm:mr-auto"
                              : "sm:ml-auto sm:mr-0"
                          } sm:ml-28 sm:mr-28 lg:ml-44 lg:mr-44 mt-6 sm:mt-0`}
            >
              {/* Top — School + Logo */}
              <div className="flex items-center space-x-4 sm:space-x-5">
                <div className="w-16 h-14 sm:w-20 sm:h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#bfaafc]">
                    {edu.degree}
                  </h3>
                  <h4 className="text-xs sm:text-sm md:text-base text-gray-300">
                    {edu.school}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Bottom — Grade and Description */}
              <p className="mt-4 text-gray-400 font-semibold text-sm sm:text-base">
                Grade: <span className="text-[#b57aff]">{edu.grade}</span>
              </p>
              <p className="mt-2 sm:mt-3 text-gray-400 leading-relaxed text-sm sm:text-base">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
