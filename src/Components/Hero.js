import React from "react";
import profile from "../Assets/profile.jpg";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div id="home" name="home" className=" flex items-center flex-col text-center text-2xl gap-7 p-20 ">
      <div>
        <img src={profile} alt="" className="h-80 w-80 rounded-full" />
      </div>
      <div className="text-7xl ">
        <span className="font-bold bg-gradient-to-l from-[#B415FF] to-[#DF8908] bg-clip-text text-transparent">I'm Nandini Garg, </span>frontend developer <br></br> based in India.
      </div>
      <div>
      "Fuelled by code and creativity, I'm an engineering student and frontend developer on a mission to build beautiful, blazing-fast web experiences!"
      </div>

      <div className="flex gap-8 ">
        <Link to="contact" smooth={true} duration={500}><div className="rounded-full bg-[linear-gradient(to_left,_#DF8908_10%,_#8415FF_100%)] border-black border-2 p-5 hover:border-white hover:scale-110  ">
          Contact me
        </div></Link>
        <div className="rounded-full border-white border-2  p-5 hover:scale-110">
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
