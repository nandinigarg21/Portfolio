
import React, { useState } from 'react'

const Form = () => {

    const [formData, setFormData] = useState({
        fullName:" ",
        phoneNumber:" ",
        email:" ",
        message:" "
    })

    const{fullName, phoneNumber, email, message} = formData;

    const changeHandler = (e) => {
       setFormData((prev)=>({
         ...prev,
         [e.target.name] : e.target.value
       }))

    }

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(formData)
        setFormData({
            fullName:" ",
            phoneNumber:" ",
            email:" ",
            message:" "

        })

    }
  return (
    <form className='flex flex-col text-2xl  gap-2.5' onSubmit={submitHandler}>
        <label>
            <p className='m-2.5'>Your Name</p>
            <input
            required
            type='text'
            placeholder='Enter your name'
            name='fullName'
            value={fullName}
            onChange={changeHandler}
            className='form-style w-full text-white bg-blue-200'
            
            />
        </label>

        <label>
            <p className='m-2.5'>Phone Nuber</p>
            <input
            required
            type='text'
            placeholder='Enter your phone number'
            name='phoneNumber'
            value={phoneNumber}
            onChange={changeHandler}
            className='form-style w-full text-white bg-blue-200'
            
            />
        </label>

        <label>
            <p className='m-2.5'>Your email</p>
            <input
            required
            type='text'
            placeholder='Enter your email'
            name='email'
            value={email}
            onChange={changeHandler}
            className='form-style w-full text-white bg-blue-200'
            
            />
        </label>

        <label>
            <p className='m-2.5'>write your message here</p>
            <textarea
            required
            rows='8'
            placeholder='Enter your message'
            name='message'
            value={message}
            onChange={changeHandler}
            className='form-style w-full text-white bg-blue-200'
            
            />
        </label>

        <div><button className='rounded-full bg-[linear-gradient(to_left,_#DF8908_10%,_#8415FF_100%)] p-5 ' type='submit'>Submit Now</button></div>
    </form>
  )
}

export default Form
