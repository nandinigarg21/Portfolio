import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Skill from "./Components/Skill";
import Footer from "./Components/Footer"
import { Link, Element } from "react-scroll";


function App() {
  return (
    <div className="bg-black min-h-screen text-white p-10 font-edu">
      <Navbar/> 
      <Element id="home" name="home"><Hero/> </Element>
      <Element id="skill" name="skill"><Skill/></Element>
      <Element id="project" name="project"><Project/></Element>
      <Element id="contact" name="contact"><Contact/></Element>    
      <div className="h-1  bg-white"></div>
      <Element id="footer" name="footer"><Footer/></Element>
      
    </div>
  );
}

export default App;
