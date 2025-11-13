import React from "react";
import { projects } from "../Constant";

const Project = () => {
  return (
    <section
      id="project"
      className="py-16 sm:py-20 lg:py-28 px-6 sm:px-10 md:px-[10vw] bg-gradient-to-b from-[#0d0b14] to-[#1a1325] text-white font-sans scroll-smooth"
    >
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-[#8245ec] to-[#b57aff] bg-clip-text drop-shadow-[0_0_10px_rgba(130,69,236,0.6)]">
          PROJECTS
        </h2>
        <div className="w-20 sm:w-24 md:w-28 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          A showcase of my projects that reflect creativity, technical skill, and problem-solving across different technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#0f0b1c]/80 border border-[#3c2f5a] rounded-2xl shadow-[0_0_20px_rgba(130,69,236,0.3)]
                       hover:shadow-[0_0_30px_rgba(130,69,236,0.5)] overflow-hidden transition-all duration-300
                       hover:-translate-y-2 cursor-pointer backdrop-blur-lg"
          >
            {/* Project Image */}
            <div className="p-3 sm:p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 sm:h-52 md:h-56 object-cover rounded-xl border border-[#3c2f5a] hover:opacity-90 transition-all duration-300"
              />
            </div>

            {/* Project Content */}
            <div className="p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#bfaafc] mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed text-sm sm:text-base md:text-lg line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mb-4 flex flex-wrap">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#1b1529] text-xs sm:text-sm font-medium text-[#bfaafc] 
                               border border-[#3c2f5a] rounded-full px-3 py-1 mr-2 mb-2
                               hover:bg-[#251b3d] hover:shadow-[0_0_10px_rgba(130,69,236,0.4)] transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-between mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm md:text-base font-semibold text-[#8245ec] hover:text-[#b57aff] transition-all duration-300 underline-offset-4 hover:underline"
                >
                  View Code
                </a>
                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm md:text-base font-semibold text-[#8245ec] hover:text-[#b57aff] transition-all duration-300 underline-offset-4 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
