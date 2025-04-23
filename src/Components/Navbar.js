import React, { useState } from 'react'
import logo from "../Assets/Logo.jpg"
import { Link } from 'react-scroll'

const Navbar = () => {

  const[active, setActive] = useState({
    
  })

  

  const clickHandler = (e) =>{
    

  }


  return (
    <nav className='text-3xl flex items-center justify-between sticky top-0'>
        <div className='flex items-center justify-center '>
            <div className='h-20 w-20'><img src={logo} alt=''/></div>
            <div>Nandini Garg</div>
        </div>

        <div>
            <ul className='flex items-center justify-center gap-10'>
                <li ><Link to='home' smooth={true} duration={500} spy={true} activeClass="underline" className="hover:underline">Home</Link></li>
                <li ><Link to='skill' smooth={true} duration={500} className="hover:underline">About me</Link></li>
                <li><Link to='project' smooth={true} duration={500} className="hover:underline">Projects</Link></li>
                
                <li>Portfolio</li>
                <li><Link to='contact' smooth={true} duration={500} className="hover:underline">Contact</Link></li>
                
            </ul>
        </div>

        
    </nav>
  )
}

export default Navbar
