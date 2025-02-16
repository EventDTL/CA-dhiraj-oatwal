"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const useCounterAnimation = (targetValue) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = Math.ceil(targetValue / 100);
    const interval = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setValue(targetValue);
        clearInterval(interval);
      } else {
        setValue(current);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [targetValue]);

  return value;
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const clients = useCounterAnimation(isVisible ? 500 : 0);
  const years = useCounterAnimation(isVisible ? 25 : 0);
  const projects = useCounterAnimation(isVisible ? 200 : 0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full h-auto xl:h-full mt-20">
      <div className="h-[635px] ag:h-[487px] af:h-[570px] xl:h-[850px] ag:mx-2 sm:mx-16 md:mx-32 rounded-3xl mt-4 flex items-center justify-center relative">
        {/* Image section */}
        <img
          src="/ORGfullSCR.png"
          alt="Financial advisor"
          width={100}
          height={100}
          className="absolute hidden md:block xl:h-[678px] xl:w-[1265px] object-contain xl:top-[-20px] md:h-[440px] md:w-[1265px] md:top-[0px] md:mt-12"
        />
        <img
          src="/activecus.svg"
          alt="Financial advisor"
          width={100}
          height={100}
          className="absolute hidden md:block object-contain md:h-[45px] md:w-[100px] md:bottom-[86px] md:right-[12px] xl:h-[100px] xl:w-[145px] xl:top-[613px] xl:left-[1015px] 2xl:left-[1055px]"
        />
        <img
          src="/tabscreen.svg"
          alt="Financial advisor"
          width={100}
          height={100}
          className="absolute hidden sm:block md:hidden object-contain sm:h-[515px] sm:w-[610px] sm:top-[20px]"
        />
        <img
          src="/activecus.svg"
          alt="Financial advisor"
          width={100}
          height={100}
          className="absolute hidden sm:block md:hidden object-contain sm:h-[70px] sm:w-[120px] sm:bottom-[35px] sm:right-[25px]"
        />
        <img
          src="/mobscreen.svg"
          alt="Financial advisor"
          width={100}
          height={100}
          className="absolute block sm:hidden object-contain ag:h-[510px] ag:w-[300px] ag:top-[-30px] af:w-[340px] af:top-[25px] aa:h-[530px] aa:w-[360px] aa:top-[8px]"
        />
        <img
          src="/activecus.svg"
          alt="Financial advisor"
          width={100}
          height={100}
          className="absolute block sm:hidden object-contain ag:h-[68px] ag:w-[115px] ag:bottom-[45px] ag:right-[7px] af:h-[68px] af:w-[150px] af:bottom-[46px] af:left-[204px] aa:left-[236px] aa:h-[70px] aa:bottom-[42px]"
        />

        {/* Text Section */}
        <div className="absolute z-10 flex flex-col ag:top-[15px] ag:left-[20px] af:top-[60px] af:left-[35px] ag:w-3/4 aa:top-[30px] aa:left-[50px] xl:top-[100px] xl:left-[80px] sm:top-[90px] sm:left-[45px] md:top-[85px] md:left-[35px]">
  {/* Heading */}
  <h1 className="font-inter text-white font-bold text-left 
    ag:text-[20px] ag:leading-[24px] ag:w-[250px] ag:h-[82px]
    aa:text-[24px] aa:leading-[24px] aa:w-[280px] aa:h-[82px]
    sm:text-[30px] sm:leading-[36px] sm:w-[435px] sm:h-[96px]
    md:text-[35px] md:leading-[36px] md:w-[500px] md:h-[70px]
    xl:text-[48px] xl:leading-[57.6px] xl:w-[832px] xl:h-[116px]">
    Expert Financial Advice for Businesses & Individuals
  </h1>

  {/* Paragraph */}
  <p className="font-inter text-white opacity-50 text-left font-normal 
    ag:text-[11px] ag:leading-[12px] ag:w-[250px] ag:h-[82px]
    aa:text-[12px] aa:w-[280px] aa:py-2
    sm:text-[16px] sm:leading-[20px] sm:mt-1 sm:w-[260px] sm:h-[170px]
    md:text-[15px] md:leading-[20px] md:w-[375px] md:h-[110px] md:mt-8
    xl:text-[24px] xl:leading-[24px] xl:mt-8 xl:w-[600px] xl:h-[170px]">
    Our expert financial services and strategic advice empower your business to reach new heights, ensuring your vision becomes a reality. Let us unlock your full potential with tailored solutions designed for long-term success.
  </p>

  {/* Button */}
  <button className="relative bg-white text-black font-semibold cursor-pointer 
    flex items-center justify-center gap-2 rounded-[16px] overflow-hidden whitespace-nowrap
    ag:mt-5 ag:w-[100px] ag:h-[25px] ag:text-[12px] ag:rounded-[4px] ag:p-1
    sm:mt-5 sm:w-[140px] sm:h-[45px] sm:text-[16px]
    md:mt-6 md:w-[120px] md:h-[30px]
    xl:w-[155px] xl:h-[49px] xl:text-[16px]">
    <span>Learn More</span>
    <span className="text-[20px] ag:text-[12px]">+</span>
    <div className="absolute w-[300%] h-[20px] bg-[#FF4400] top-0 left-[-200%] rotate-[45deg] 
      transition-[left] duration-[700ms] ease-linear blur-sm opacity-50 shadow-[0_0_12px_#FF4400] hover:left-0">
    </div>
  </button>

  {/* Statistics Section */}
  <div
    className="hidden md:grid md:grid-cols-3 gap-1 xl:gap-6 xl:mt-8 md:w-3/4 md:h-[100px] md:mt-6"
    ref={statsRef}>
    {/* Clients */}
    <div className="flex flex-col items-center md:items-start p-4 md:p-2">
      <div className="text-white font-bold mb-1 
        md:text-[20px] xl:text-[32px]">
        {clients}+
      </div>
      <div className="text-slate-400 text-center md:text-left 
        md:text-[12px] xl:text-[17px]">
        Clients across India
      </div>
    </div>

    {/* Years of Experience */}
    <div className="flex flex-col items-center md:items-start p-4 md:p-2">
      <div className="text-white font-bold mb-1 
        md:text-[20px] xl:text-[32px]">
        {years}
      </div>
      <div className="text-slate-400 text-center md:text-left 
        md:text-[12px] xl:text-[17px]">
        Years of Experience
      </div>
    </div>

    {/* Projects */}
    <div className="flex flex-col items-center md:items-start p-4 md:p-2">
      <div className="text-white font-bold mb-1 
        md:text-[20px] xl:text-[32px]">
        {projects}+
      </div>
      <div className="text-slate-400 text-center md:text-left 
        md:text-[12px] xl:text-[17px]">
        Projects
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Hero;
