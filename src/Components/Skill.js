import React from "react";
import profile from "../Assets/profile.jpg";

const data = [
    {
        text:"HTML",
        Width:"50%"
    },
    {
        text:"CSS",
        Width:"50%"
    },
    {
        text:"JavaScript",
        Width:"50%"
    },
    {
        text:"REACT",
        Width:"50%"
    },
]

const Skill = () => {


  return (
    <div className="flex flex-col  items-center justify-center m-10 p-10 gap-20">
      <div className="text-6xl">About Me</div>

      <div className="flex items-center justify-center gap-20">
        <div>
          <img src={profile} alt=""/>
        </div>

        <div className="text-3xl w-[75%] flex flex-col gap-10">
          <p>
          I’m a frontend developer and engineering student at IET DAVV.
Proud alumnus of Jawahar Navodaya Vidyalaya and Super 30 achiever.
I love building clean, responsive, and user-friendly websites.
Always learning, creating, and bringing ideas to life through code
          </p>
          <p>
            My passion for frontend development is not only reflected in my
            extensive experience but also in the enthusiasm and dedication I
            bring to each project.
          </p>

          <div className=" flex flex-col gap-4">
            { 
                data.map(( e,i) =>{
                    return(<div key={i} className="flex gap-10 items-center hover:p-2.5 "> 
                        <div>{e.text}</div>
                        <div className={`bg-[linear-gradient(to_left,_#DF8908_10%,_#8415FF_100%)] h-2.5 rounded-lg w-[${e.Width}]`}></div>
                    </div>)
                })
            }
 
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skill;
