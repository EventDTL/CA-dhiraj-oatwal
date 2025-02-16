"use client";
import Image from "next/image";
import React, { useState } from "react";

const Career = () => {
  const [fileName, setFileName] = useState("Upload Resume");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("Upload Resume");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const isValid = form.checkValidity(); // Check if the form is valid

    if (!isValid) {
      alert("Please fill in all required fields.");
      return;
    }

    // Proceed with form submission logic here
    alert("Form submitted successfully!");
  };

  return (
    <div className="w-[77.5%] m-[65px_auto_120px] bg-[#0E1021] rounded-[34px] relative pb-[221px] msm:w-[88%] msm:m-[65px_auto_68px] msm:rounded-[20px] msm:pb-[72px] mmd:w-[91%] mmd:rounded-[40px]">
      <h1 className="text-white font-[Inter] font-bold text-[45px] pt-[65px] text-center msm:text-[24px] msm:pt-[26px] mmd:text-[32px] mmd:pt-[37px]">
        Want To Join <span style={{ color: "#FF4400" }}>Team</span>
      </h1>

      <form className="w-[76%] m-[66px_auto_0px] msm:w-[80%] msm:m-[45px_auto_0px] mmd:w-[80%]" onSubmit={handleSubmit}>
        {/* Box 1 */}
        <div className="grid grid-cols-2 gap-[45px] msm:grid-cols-1 mmd:grid-cols-1">
          <div className="flex flex-col pb-[11px] border-b border-[#8D8D8D]">
            <label htmlFor="firstname" className="font-[Poppins] font-medium text-[16px] text-white mmd:mb-[2px]">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="Amit"
              className="w-full bg-inherit placeholder-[#8D8D8D] placeholder:text-[14px] placeholder:font-[Poppins] placeholder:font-medium mmd:placeholder:text-[16px] msm:placeholder:text-[12px]"
              required
            />
          </div>
          <div className="flex flex-col pb-[11px] border-b border-[#8D8D8D]">
            <label htmlFor="lastname" className="font-[Poppins] font-medium text-[16px] text-white mmd:mb-[2px]">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Sahu"
              className="w-full bg-inherit placeholder-[#8D8D8D] placeholder:text-[14px] placeholder:font-[Poppins] placeholder:font-medium mmd:placeholder:text-[16px] msm:placeholder:text-[12px]"
              required
            />
          </div>
          <div className="flex flex-col pb-[11px] border-b border-[#8D8D8D]">
            <label htmlFor="email" className="font-[Poppins] font-medium text-[16px] text-white mmd:mb-[2px]">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="amitsahu39370@gmail.com"
              className="w-full bg-inherit placeholder-[#8D8D8D] placeholder:text-[14px] placeholder:font-[Poppins] placeholder:font-medium mmd:placeholder:text-[16px] msm:placeholder:text-[12px]"
              required
            />
          </div>
          <div className="flex flex-col pb-[11px] border-b border-[#8D8D8D]">
            <label htmlFor="phonenumber" className="font-[Poppins] font-medium text-[16px] text-white mmd:mb-[2px]">
              Phone Number
            </label>
            <input
              type="tel"
              id="phonenumber"
              placeholder="9399481932"
              className="w-full bg-inherit placeholder-[#8D8D8D] placeholder:text-[14px] placeholder:font-[Poppins] placeholder:font-medium mmd:placeholder:text-[16px] msm:placeholder:text-[12px]"
              required
            />
          </div>
        </div>

        {/* Box 2 */}
        <div className="grid grid-cols-2 gap-[45px] mt-[63px] msm:grid-cols-1 msm:mt-[28px] msm:gap-[28px] mmd:grid-cols-1 mmd:mt-[45px] mmd:gap-[31px]">
          <div className="flex flex-col pb-[11px] border-b border-[#8D8D8D]">
            <label htmlFor="resumeupload" className="font-[Poppins] font-medium text-[16px] text-white mmd:mb-[2px]">
              Upload Resume
            </label>
            <div className="flex items-center cursor-pointer">
              <input
                type="file"
                id="resumeupload"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                required
              />
              <label
                htmlFor="resumeupload"
                className="flex items-center w-full text-[14px] cursor-pointer"
              >
                <span className="flex-grow text-[#8D8D8D]">{fileName}</span>
                <Image src="/resumeicon.svg" alt="upload icon" className="w-6 h-6 ml-auto text-[#a0a0a0]" />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-[123px] h-[32px] text-white bg-[#FF4400] rounded-[6px] font-[Poppins] font-medium text-[14px] flex justify-center items-center self-end mmd:justify-self-center msm:justify-self-center"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Career;
