import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-28 px-6 sm:px-10 md:px-[10vw] lg:px-[16vw] font-sans bg-gradient-to-b from-[#0d0b14] to-[#1a1325] text-white scroll-smooth"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 sm:gap-14 md:gap-20">
        {/* --- Left: Text Content --- */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Hi, I’m</h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#8245ec] to-[#b57aff] drop-shadow-[0_0_10px_rgba(130,69,236,0.6)]">
            Nandini Garg
          </h2>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-[#bfaafc] leading-snug">
            Full Stack Developer • React.js • Node.js • Express • MongoDB
          </h3>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
            I’m a passionate and creative developer who loves turning ideas into
            interactive, responsive, and visually appealing digital experiences.
            My goal is to combine design thinking and modern web technologies to
            build solutions that inspire and perform beautifully.
          </p>

          <motion.a
            href="https://drive.google.com/file/d/1-mvmSbLqYQeaewLCwRvswzvu9Y0r7jHA/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="inline-block text-white py-2.5 sm:py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold transition duration-300"
            style={{
              background:
                "linear-gradient(90deg, #8245ec 0%, #b57aff 100%)",
              boxShadow:
                "0 0 5px #8245ec, 0 0 15px #8245ec, 0 0 40px rgba(130,69,236,0.6)",
            }}
          >
            DOWNLOAD CV
          </motion.a>
        </motion.div>

        {/* --- Right: Profile Image with Tilt + Motion --- */}
        <motion.div
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 border-4 border-[#8245ec] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(130,69,236,0.4)]"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className="rounded-full"
          >
            <img
              src={profile}
              alt="Nandini Garg"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_0_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
