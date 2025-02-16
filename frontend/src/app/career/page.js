"use client";
import Image from "next/image";
import React, { useState } from "react";
import { format } from 'date-fns'; // Import the format function from date-fns

const CareerPage = () => {
  console.log('Frontend URL:', process.env.NEXT_PUBLIC_FRONTEND_URL);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resumeUrl: '', // This will be set after uploading the resume
  });
  const [thankYouMessage, setThankYouMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    // Handle file upload logic here
    const file = e.target.files[0];
    if (file) {
      // You can upload the file to your server and get the URL
      // For now, just set the file name as a placeholder
      setFormData((prev) => ({ ...prev, resumeUrl: file.name }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get current date and time using date-fns
    const currentDate = new Date();
    const date = format(currentDate, 'yyyy-MM-dd'); // Format date as YYYY-MM-DD
    const time = format(currentDate, 'HH:mm:ss'); // Format time as HH:MM:SS

    const dataToSubmit = {
      ...formData,
      date,
      time,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/career`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }

      const result = await response.json();
      console.log(result);

      // Show thank you message
      setThankYouMessage('Thank you for applying!');
      setErrorMessage(''); // Clear any previous error messages

      // Clear the form data
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        resumeUrl: '',
      });
    } catch (error) {
      console.error(error);
      setErrorMessage('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <div className="w-[77.5%] m-[65px_auto_120px] bg-[#0E1021] rounded-[34px] relative pb-[221px] ag:w-[88%] ag:m-[100px_auto_68px] ag:rounded-[20px] ag:pb-[72px] sm:w-[91%] sm:rounded-[40px] mt-20">
      <h1 className="text-white font-[Inter] font-bold text-[45px] pt-[65px] text-center ag:text-[24px] ag:pt-[26px] sm:text-[32px] sm:pt-[37px]">
        Want To Join <span style={{ color: "#FF4400" }}>Team</span>
      </h1>

      <form onSubmit={handleSubmit} className="w-[76%] m-[66px_auto_0px] ag:w-[80%] ag:m-[45px_auto_0px] sm:w-[80%]">
        {/* Box 1 */}
        <div className="grid grid-cols-2 gap-[45px] ag:grid-cols-1 sm:grid-cols-1">
          <div className="flex flex-col pb-[11px] border-b border-[#8D8D8D]">
            <label htmlFor="firstname" className="font-[Poppins] font-medium text-[16px] text-white sm:mb-[2px]">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstName"
              placeholder="Name"
              className="w-full bg-inherit text-white placeholder-[#8D8D8D] placeholder:text-[14px] placeholder:font-[Poppins] placeholder:font-medium sm:placeholder:text-[16px] ag:placeholder:text-[12px]"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col pb-[11px] border-b border-[#8D8D8D]">
            <label htmlFor="lastname" className="font-[Poppins] font-medium text-[16px] text-white sm:mb-[2px]">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastName"
              placeholder="LastName"
              className="w-full bg-inherit text-white placeholder-[#8D8D8D] placeholder:text-[14px] placeholder:font-[Poppins] placeholder:font-medium sm:placeholder:text-[16px] ag:placeholder:text-[12px]"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col pb-[11px] border-b border-[#8D8D8D]">
            <label htmlFor="email" className="font-[Poppins] font-medium text-[16px] text-white sm:mb-[2px]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="xyz@gmail.com"
              className="w-full bg-inherit text-white placeholder-[#8D8D8D] placeholder:text-[14px] placeholder:font-[Poppins] placeholder:font-medium sm:placeholder:text-[16px] ag:placeholder:text-[12px]"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col pb-[11px] border-b border-[#8D8D8D]">
            <label htmlFor="phonenumber" className="font-[Poppins] font-medium text-[16px] text-white sm:mb-[2px]">
              Phone Number
            </label>
            <input
              type="tel"
              id="phonenumber"
              name="phone"
              placeholder="9399******"
              className="w-full bg-inherit text-white placeholder-[#8D8D8D] placeholder:text-[14px] placeholder:font-[Poppins] placeholder:font-medium sm:placeholder:text-[16px] ag:placeholder:text-[12px]"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Box 2 */}
        <div className="grid grid-cols-2 gap-[45px] mt-[63px] ag:grid-cols-1 ag:mt-[28px] ag:gap-[28px] sm:grid-cols-1 sm:mt-[45px] sm:gap-[31px]">
          <div className="flex flex-col pb-[11px] border-b border-[#8D8D8D]">
            <label htmlFor="resumeupload" className="font-[Poppins] font-medium text-[16px] text-white sm:mb-[2px]">
              Upload Resume
            </label>
            <div className="flex items-center cursor-pointer">
              <input
                type="file"
                id="resumeupload"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                required
              />
              <label
                htmlFor="resumeupload"
                className="flex items-center w-full text-[14px] cursor-pointer"
              >
                <span className="flex-grow text-[#8D8D8D]">{formData.resumeUrl || "Upload Resume"}</span>
                <img src="/resumeicon.svg" alt="upload icon" className="w-6 h-6 ml-auto text-[#a0a0a0]" />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-[123px] h-[32px] text-white bg-[#FF4400] rounded-[6px] font-[Poppins] font-medium text-[14px] flex justify-center items-center self-end sm:justify-self-center ag:justify-self-center"
          >
            Submit
          </button>
        </div>
      </form>
      {thankYouMessage && <p className="text-white mt-4">{thankYouMessage}</p>}
      {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
    </div>
  );
};

export default CareerPage;
