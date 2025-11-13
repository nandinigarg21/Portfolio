import React from "react";
import { SkillsInfo } from "../Constant";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skill"
      className="py-16 sm:py-20 lg:py-28 px-6 sm:px-10 md:px-[10vw] bg-gradient-to-b from-[#0d0b14] to-[#1a1325] text-white font-sans scroll-smooth"
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-12 sm:mb-16"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8245ec] to-[#b57aff] drop-shadow-[0_0_12px_rgba(130,69,236,0.6)]">
          SKILLS
        </h2>
        <div className="w-20 sm:w-24 md:w-28 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          Technologies and tools I’ve mastered to design, develop, and deliver
          modern, high-performance web applications.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 justify-items-center">
        {SkillsInfo.slice(0, 4).map((category, index) => (
          <motion.div
            key={category.title}
            className="w-full bg-[#110a1f]/80 backdrop-blur-md border border-[#3c2f5a] rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(130,69,236,0.25)] hover:shadow-[0_0_30px_rgba(130,69,236,0.45)] transition-all duration-300 hover:-translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Category Title */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-6 sm:mb-8 text-[#cbb8ff] tracking-wide">
              {category.title}
            </h3>

            {/* Skill Icons with Tilt */}
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.03}
              transitionSpeed={800}
              gyroscope={true}
            >
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center gap-2 group"
                  >
                    <div
                      className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl border border-[#3c2f5a] bg-[#1a122e]/60 hover:border-[#8245ec] hover:shadow-[0_0_20px_rgba(130,69,236,0.6)] transition-all duration-300"
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-gray-300 group-hover:text-[#b57aff] transition-colors duration-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
