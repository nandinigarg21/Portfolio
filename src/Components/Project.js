import React from "react";
import img from "../Assets/project_1.svg"


import amazon from "../Assets/Amazon.png"
import game from "../Assets/Game.png"
import ecozmy from "../Assets/ecozmy.png"
import edusity from "../Assets/edusity.png"
import Portfolio from "../Assets/portfolio.png"

import { FaGithub } from "react-icons/fa";

const data = [
  {
    id: "01.",
    heading: "Portfolio",
    github: "https://github.com/nandinigarg21",
    image: img,
    description: " mern stack",
  },
  {
    id: "02",
    heading: "Clone",
    github: "https://github.com/nandinigarg21",
    image: amazon,
    description: "CSS",
  },
  {
    id: "03",
    heading: "Game",
    github: "https://github.com/nandinigarg21",
    image: game,
    description: "JavaScript",
  },
  {
    id: "04",
    heading: "Ecozmy",
    github: "https://github.com/nandinigarg21",
    image: ecozmy,
    description: "React",
  },
  {
    id: "05",
    heading: "Edusity",
    github: "https://github.com/nandinigarg21",
    image: edusity,
    description: "React",
  },
  {
    id: "06",
    heading: "Portfolio",
    github: "https://github.com/nandinigarg21",
    image: Portfolio,
    description: "React",
  },
];

const Project = () => {
  return (
    <div className="flex flex-col gap-20 items-center justify-center">
      
      <div className="text-7xl font-bold">Projects</div>

      <div className="grid grid-cols-3 grid-rows-2 gap-16 w-11/12 items-center justify-center">
        {data.map((e, i) => {
          return (
            <div key={i} className="border-4 h-90 rounded-lg border-white flex flex-col justify-between p-5 text-2xl transform transition duration-300  hover:bg-[linear-gradient(to_left,_#DF8908_10%,_#8415FF_100%)] hover:scale-105  ">
              <div className="flex justify-between">
                <p>{e.id}</p>
                <a href={e.github}>
                  <FaGithub />
                </a>
              </div>

              <div className="h-80 w-96 flex items-center justify-center">
                <img src={e.image} alt=""  />
              </div>

              <div className="flex justify-between"><p>{e.heading}</p><p>{e.description}</p></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
