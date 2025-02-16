import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="container max-w-full lg:px-32 lg:pt-10 ag:px-2 ag:pt-2 md:px-20 mt-4">
      <div className="text-center">
        <h1 className="text-center font-inter lg:font-normal lg:text-5xl ag:text-xl lg:mb-2 af:text-3xl">
          Why <span className="text-orange  font-bold">Choose Us ?</span>
        </h1>
        <p className="text-black opacity-50 text-center font-inter ag:text-sm lg:font-normal lg:text-3xl lg:leading-7 af:text-lg">
          Here are some key reasons why clients should choose your firm
        </p>
      </div>
      <div className="lg:mt-14  flex flex-col sm:flex-row justify-center align-middle items-center ag:mt-5">
        <div className="bg-ligvio lg:mt-52 lg:px-5 lg:py-14 lg:h-[466px] lg:w-[381px] ag:h-[270px] ag:w-[290px] ag:px-3 ag:py-5 ag:mt-8 ag:rounded-xl af:w-[360px] af:h-[300px] af:px-8 af:py-8 sm:px-3 sm:py-4 sm:mt-48 sm:rounded-tl-3xl sm:rounded-r-none sm:rounded-br-none sm:rounded-bl-none md:px-5 md:py-7">
          <h2 className="text-black font-bold sm:mb-0 font-inter lg:text-6xl lg:mb-4 ag:text-3xl ag:mb-4">
            02
          </h2>
          <h3 className="text-black font-bold sm:mb-0 font-inter lg:text-3xl lg:mb-5 lg:leading-9 ag:text-xl ag:mb-3">
            Expertise You Can Trust
          </h3>
          <p className="font-inter lg:text-2xl font-normal lg:leading-7 ag:text-base">
            Our experienced professionals provide accurate, tailored financial
            advice, ensuring compliance with global regulations and helping you
            achieve your goals efficiently.
          </p>
        </div>
        <div className="bg-darkblack lg:px-5 lg:py-14 ag:h-[490px] ag:w-[290px] lg:h-[665px] lg:w-[438px] ag:px-3 ag:py-5 ag:rounded-xl ag:mt-4 af:w-[360px] af:h-[530px] af:px-8 af:py-8 sm:px-3 sm:py-5 sm:h-[475px] sm:rounded-t-3xl sm:rounded-br-none sm:rounded-bl-none md:px-5 md:py-7">
          <h2 className="text-num font-bold font-inter lg:text-6xl  lg:mb-4 text-gray-100 ag:text-3xl ag:mb-4">
            01
          </h2>
          <h3 className="text-head font-bold font-inter lg:text-3xl lg:mb-5 leading-9 ag:text-xl ag:mb-3">
            Comprehensive financial solutions
          </h3>
          <p className="font-inter text-para lg:text-2xl font-normal lg:leading-7 text-gray-300 lg:mb-10 ag:text-base">
            We offer a wide range of services to cater to your diverse financial
            needs, from tax compliance to business strategy coaching.
          </p>
          <img src="/WhyChooseUs.svg" className="bg-gray-900" />
        </div>
        <div className="bg-ligvio lg:mt-52 lg:px-5 lg:py-14 ag:h-[270px] ag:w-[290px] lg:h-[466px] lg:w-[381px] ag:px-3 ag:py-5 ag:mt-4 ag:rounded-xl af:w-[360px] af:h-[300px] af:px-8 af:py-8 sm:px-3 sm:py-4 sm:mt-48 sm:rounded-tr-3xl sm:rounded-l-none sm:rounded-br-none sm:rounded-bl-none md:px-5 md:py-7">
          <h2 className="text-black font-bold font-inter sm:mb-0 lg:text-6xl lg:mb-4 ag:text-3xl ag:mb-4">
            03
          </h2>
          <h3 className="text-black font-bold font-inter sm:mb-0 lg:text-3xl lg:mb-5 lg:leading-9 ag:text-xl ag:mb-3">
            Client-Centric Approach
          </h3>
          <p className="font-inter lg:text-2xl font-normal lg:leading-7 ag:text-base">
            We prioritize your success with personalized solutions, proactive
            support, and transparent communication, making financial management
            straightforward and stress-free.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
