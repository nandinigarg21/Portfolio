import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const { fullName, phoneNumber, email, message } = formData;

  const changeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      message: "",
    });
  };

  return (
    <form
      className="flex flex-col gap-6 text-base sm:text-lg md:text-xl w-full max-w-xl mx-auto"
      onSubmit={submitHandler}
    >
      {/* --- Name --- */}
      <label className="flex flex-col">
        <p className="mb-2 font-medium text-gray-300">Your Name</p>
        <input
          required
          type="text"
          placeholder="Enter your name"
          name="fullName"
          value={fullName}
          onChange={changeHandler}
          className="w-full bg-[#1b1228]/80 text-white px-4 py-3 rounded-xl border border-[#3c2f5a] focus:outline-none focus:border-[#8245ec] focus:shadow-[0_0_10px_rgba(130,69,236,0.6)] transition duration-300 placeholder-gray-500"
        />
      </label>

      {/* --- Phone --- */}
      <label className="flex flex-col">
        <p className="mb-2 font-medium text-gray-300">Phone Number</p>
        <input
          required
          type="tel"
          placeholder="Enter your phone number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={changeHandler}
          className="w-full bg-[#1b1228]/80 text-white px-4 py-3 rounded-xl border border-[#3c2f5a] focus:outline-none focus:border-[#8245ec] focus:shadow-[0_0_10px_rgba(130,69,236,0.6)] transition duration-300 placeholder-gray-500"
        />
      </label>

      {/* --- Email --- */}
      <label className="flex flex-col">
        <p className="mb-2 font-medium text-gray-300">Your Email</p>
        <input
          required
          type="email"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={changeHandler}
          className="w-full bg-[#1b1228]/80 text-white px-4 py-3 rounded-xl border border-[#3c2f5a] focus:outline-none focus:border-[#8245ec] focus:shadow-[0_0_10px_rgba(130,69,236,0.6)] transition duration-300 placeholder-gray-500"
        />
      </label>

      {/* --- Message --- */}
      <label className="flex flex-col">
        <p className="mb-2 font-medium text-gray-300">Your Message</p>
        <textarea
          required
          rows="6"
          placeholder="Write your message here..."
          name="message"
          value={message}
          onChange={changeHandler}
          className="w-full bg-[#1b1228]/80 text-white px-4 py-3 rounded-xl border border-[#3c2f5a] focus:outline-none focus:border-[#8245ec] focus:shadow-[0_0_10px_rgba(130,69,236,0.6)] transition duration-300 resize-none placeholder-gray-500"
        />
      </label>

      {/* --- Submit Button --- */}
      <button
        type="submit"
        className="w-full sm:w-auto self-center sm:self-start mt-2 bg-gradient-to-r from-[#8245ec] to-[#b57aff] text-white font-semibold px-8 py-3 rounded-full shadow-[0_0_15px_rgba(130,69,236,0.6)] hover:shadow-[0_0_25px_rgba(130,69,236,0.8)] hover:scale-105 transition-all duration-300"
      >
        Submit Now
      </button>
    </form>
  );
};

export default Form;
