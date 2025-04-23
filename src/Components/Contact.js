
import React from 'react'
import Form from './Form'
import mail from "../Assets/mail-icon.png"
import location from "../Assets/location-icon.png"
import phone from "../Assets/phone-icon.png"

const Contact = () => {
  return (
    <div className='flex flex-col m-20  items-center justify-center gap-20 '>
        <div className='flex flex-col items-center justify-center gap-5'>
            <p className='flex text-7xl'>Get in Touch</p>
        </div>

        <div className=' flex p-10 gap-10'>
            <div className='flex  flex-col text-2xl gap-8 w-[50%]'>
                <div className='text-5xl font-bold bg-gradient-to-l from-[#B415FF] to-[#DF8908] bg-clip-text text-transparent'>Let's Talk</div>
                <div className='gap-5'>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</div>
                <div className='flex h-8 w-8 gap-5'> <img src={mail} alt=''/><p>nandinigarg215@gmail.com</p></div>
                <div className='flex h-8 w-8 gap-5'> <img src={phone} alt=''/><p>8251044733</p></div>
                <div className='flex h-8 w-8 gap-5' > <img src={location} alt=''/><p>Indore, M.P</p></div>
            </div>

            <div className='w-[50%]'>
                <Form/>
            </div>
        </div>
      
    </div>
  )
}

export default Contact

