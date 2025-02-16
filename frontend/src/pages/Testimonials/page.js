import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="container max-w-full lg:px-32 lg:pt-24 lg:pb-10 ag:px-7 ag:pt-5 ag:pb-2 mt-4">
      <h1 className="text-center font-inter lg:font-normal lg:text-5xl ag:text-xl lg:mb-2 af:text-3xl">
        Look What <span className="text-orange font-bold">People Says</span>
      </h1>
      <div className="flex justify-center items-center align-middl gap-14 ag:flex-col ag:gap-5 sm:flex-row mt-12">
        <div className="border border-gray-300 bg-testi rounded-xl flex flex-col ag:w-[275px] ag:h-[350px] lg:w-[367px] lg:h-[270px]">
          <div
            className="flex-1 flex justify-center items-center"
            style={{ height: "45%" }}
          >
            <Image
              src="/Nikita.png"
              width={100}
              height={104}
              alt="Nikita Shah"
            />
          </div>
          <div
            className="text-center flex flex-col mx-3"
            style={{ height: "55%" }}
          >
            <h5 className="font-inter text-white font-bold text-3xl leading-9 mb-3 ag:text-xl">
              Nikita Shah
            </h5>
            <p className="font-inter text-white text-normal leading-9 mb-3 ag:text-xs">
              It been years , we are completely reliable on C A Mr. Dhiraj
              Ostwal! He is undoubtedly best ! He has keen and super knowledge
              and this makes so Hassel free deals
            </p>
            <div className="flex justify-center gap-1 text-orange">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 bg-testi rounded-xl flex flex-col ag:w-[275px] ag:h-[350px] lg:w-[367px] lg:h-[270px]">
          <div
            className="flex-1 flex justify-center items-center"
            style={{ height: "45%" }}
          >
            <Image
              src="/Jafar.png"
              width={100}
              height={104}
              alt="Jafar Naviwala"
            />
          </div>
          <div
            className="text-center flex flex-col mx-3"
            style={{ height: "55%" }}
          >
            <h5 className="font-inter text-white font-bold text-3xl leading-9 mb-3 ag:text-xl">
              Jafar Naviwala
            </h5>
            <p className="font-inter text-white text-normal leading-9 mb-3 ag:text-xs">
              CA Dhiraj sir is one of the best advisor I found till now who have
              great knowledge and provide very authentic and honest advice
              related to investment and successful life.
            </p>
            <div className="flex justify-center gap-1 text-orange">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 bg-testi rounded-xl flex flex-col ag:w-[275px] ag:h-[350px] lg:w-[367px] lg:h-[270px]">
          <div
            className="flex-1 flex justify-center items-center"
            style={{ height: "45%" }}
          >
            <Image
              src="/Kedar.png"
              width={100}
              height={104}
              alt="Kedar Chandan"
            />
          </div>
          <div
            className="text-center flex flex-col mx-3"
            style={{ height: "55%" }}
          >
            <h5 className="font-inter text-white font-bold text-3xl leading-9 mb-3 ag:text-xl">
              Kedar Chandan
            </h5>
            <p className="font-inter text-white text-normal leading-9 mb-3 ag:text-xs">
              CA Dhiraj Ostwal helped us with Tax Planning and also assisted us
              with end to end Tax Filing.Wish him and his team all the very best
              in terms of client servicing and satisfaction.
            </p>
            <div className="flex justify-center gap-1 text-orange">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
