"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { format } from 'date-fns'; // Import the format function from date-fns

const ContactUsPage = () => {
  console.log('Frontend URL:', process.env.NEXT_PUBLIC_FRONTEND_URL);
  const [subject, setSubject] = useState("Business");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [thankYouMessage, setThankYouMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const isValid = form.checkValidity(); // Check if the form is valid

    if (!isValid) {
      alert("Please fill in all required fields.");
      return;
    }

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
      const response = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/contact`, {
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
      setThankYouMessage('Thank you for contacting us!');
      setErrorMessage(''); // Clear any previous error messages

      // Clear the form data
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      setErrorMessage('There was an error submitting the form. Please try again.');
    }
  };

  // Optionally, you can use useEffect to clear the message after a few seconds
  useEffect(() => {
    if (thankYouMessage) {
      const timer = setTimeout(() => {
        setThankYouMessage('');
      }, 3000); // Clear the message after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [thankYouMessage]);

  return (
    <div className="w-full mx-auto p-6 lg:px-32 md:px-14 pt-7 font-poppins bg-para h-auto md:h-[1024px] mt-20">
      <div className="mx-auto">
        <h1 className="font-bold text-3xl text-black md:text-4xl text-center">
          Contact Us
        </h1>
        <p className="text-base md:text-lg font-medium text-darkgray text-center mt-2.5">
          Want to get in touch
        </p>

        <div className="bg-white mt-8 md:mt-12 rounded-3xl flex flex-col-reverse md:flex-row h-auto md:h-[667px]">
          {/* Image container with images and text */}
          <div className="relative mx-auto md:mx-2 flex items-center justify-center md:h-[647px] rounded-3xl sm:w-full  md:w-2/5 lg:w-2/5">
            <img
              src="/Rectangle 3841.svg"
              className="w-96 h-full md:w-full sm:w-full sm:mx-8 md:mx-0 sm:h-[587px]  object-cover rounded-3xl"
              alt="Contact Us"
            />

            {/* Ellipse Images */}
            <img
              src="/Ellipse mid.svg"
              className="absolute right-0 sm:mx-8 md:mx-0 bottom-0 md:bottom-8 rounded-br-3xl"
              alt="Ellipse Mid"
            />
            <img
              src="/Ellipse small.svg"
              className="absolute right-12 sm:mx-8 md:mx-0 bottom-12 md:right-24 md:bottom-24"
              alt="Ellipse Small"
            />

            {/* Text Overlay */}
            <div className="absolute ag:pl-2 aa:px-4 xs:px-16 py-4 lg:pl-10 md:pl-5 md:py-10 text-white text-sm md:text-base">
              <h2 className="text-2xl md:text-3xl font-bold">
                Contact Information
              </h2>
              <p className="mt-1.5 text-gray">
                Say something to start a live chat!
              </p>
              <div className="ag:mt-8 aa:mt-28 xs:mt-32 md:mt-8  space-y-4 md:space-y-10">
                <div className="flex items-center">
                  <img
                    src="/phone.svg"
                    className="h-4 w-4 md:h-[18px] md:w-[18px]"
                  />
                  <p className="pl-4 text-white md:pl-6">+91 7020045454</p>
                </div>
                <div className="flex items-center">
                  <img
                    src="/message.svg"
                    className="h-4 w-4 md:h-[18px] md:w-[18px]"
                  />
                  <p className="pl-4 text-white md:pl-6">
                    dhiraj.ostwal@gmail.com
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    src="/map.svg"
                    className="h-4 w-4 md:h-[18px] md:w-[18px]"
                  />
                  <p className="pl-4 text-white md:pl-6 pr-4 md:pr-12">
                    2nd Floor, Shree Krishna, 7, Shirole Lane, opp. Kiosk
                    Koffee, off Fergusson College Road, Shivajinagar, Pune,
                    Maharashtra 411004
                  </p>
                </div>
              </div>
              <div className="ag:mt-8 aa:mt-28 xs:mt-32 md:mt-8 flex gap-4 md:gap-6">
                <Link href={"https://x.com/cadhirajostwal"}>
                  <Image
                    src="/twitter.svg"
                    width={30}
                    height={30}
                    className="h-6 w-6 md:h-[30px] md:w-[30px]"
                  />
                </Link>
                <Link href={"https://www.instagram.com/cadhirajostwal/"}>
                  <Image
                    src="/insta.svg"
                    width={30}
                    height={30}
                    className="h-6 w-6 md:h-[30px] md:w-[30px]"
                  />
                </Link>
                  <Image
                    src="/discord.svg"
                    width={30}
                    height={30}
                    className="h-6 w-6 md:h-[30px] md:w-[30px]"
                  />
              </div>
            </div>
          </div>

          <div className="mx-4 md:mx-12 my-8 md:my-16 flex-grow">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* First Name */}
                <div className="flex flex-col">
                  <label
                    htmlFor="firstName"
                    className="text-gray-700 font-medium mb-1"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Name"
                    className="border-b w-full md:w-[215px] border-gray p-2 focus:outline-none focus:border-black placeholder-gray-500"
                    name="firstName"
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Last Name */}
                <div className="flex flex-col">
                  <label
                    htmlFor="lastName"
                    className="text-gray-700 font-medium mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="LastName"
                    className="border-b w-full md:w-[215px] border-gray p-2 focus:outline-none focus:border-black placeholder-gray-500"
                    name="lastName"
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-gray-700 font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="xyz@gmail.com"
                    className="border-b w-full md:w-[215px] border-gray p-2 focus:outline-none focus:border-black placeholder-gray-500"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="text-gray-700 font-medium mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 012 **** ***"
                    className="border-b w-full md:w-[215px] border-gray p-2 focus:outline-none focus:border-black placeholder-gray-500"
                    name="phone"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Subject Selection */}
              <div className="mt-6">
                <label className="text-gray-700 font-medium mb-1 block">
                  Select Subject?
                </label>
                <div className="flex ag:flex-col af:flex-row ag:items-start af:items-center  af:space-x-4 md:space-x-6">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="Business"
                      checked={subject === "Business"}
                      onChange={() => setSubject("Business")}
                      className="form-radio text-black"
                      required
                    />
                    <span>Business</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="Account"
                      checked={subject === "Account"}
                      onChange={() => setSubject("Account")}
                      className="form-radio text-black"
                      required
                    />
                    <span>Account</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="Other"
                      checked={subject === "Other"}
                      onChange={() => setSubject("Other")}
                      className="form-radio text-black"
                      required
                    />
                    <span>Other</span>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="text-gray-700 font-medium mb-1 block"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write your message..."
                  className="border-b border-gray-300 w-full p-2 focus:outline-none focus:border-black placeholder-gray-500"
                  name="message"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-row-reverse mt-8">
                <button className="px-11 py-3 bg-orange text-white font-semibold rounded-3xl hover:bg-blue-600">
                  Send Message
                </button>
              </div>
              {thankYouMessage && <p>{thankYouMessage}</p>}
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
