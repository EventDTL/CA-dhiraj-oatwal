import React from "react";
import styles from "./About.css";

const Certification = () => {
  const awards = [
    {
      url: "/certificate2.svg",
      description: "Recognition by JAGRITI YATRA",
    },
    {
      url: "/JSG.svg",
      description: "Recognized by JSG International Federation",
    },
    {
      url: "/SPIRIT.svg",
      description: "Recognized by Scope Spirit",
    },
    {
      url: "/Hattrick.png",
      description: "Recognition by Empire HR",
    },
    {
      url: "/JUO.png",
      description: "Emerging Business Coach of the Year 2022",
    },
  ];

  return (
    <div className="w-full px-[128px] lg:px-[64px] md:px-[32px] xs:px-[20px] ag:px-[15px] mb-[50px]">
    {/* Title */}
    <div className="w-2/4 mx-auto flex justify-center border-b-[1px] border-b-[#00000080] pb-4 lg:w-5/12 md:w-6/12 xs:w-7/12 xs:pb-3">
        <h1 className="font-general-sans font-normal text-[56px] leading-[67.2px] lg:text-[48px] lg:leading-[57.6px] md:text-[40px] md:leading-[48px] sm:text-[36px] sm:leading-[43.2px] xs:text-[32px] xs:leading-[38.4px] text-center">
            Awards
        </h1>
    </div>

      {/* Certificates Box */}
      <div className="w-full h-[250px] mt-[120px] relative rounded-[30px] bg-[#0E1021] flex justify-center lg:h-[220px] lg:mt-[100px] md:h-[240px] md:mt-[80px] xs:h-[150px] xs:mt-[60px] sm:mt-[140px] ag:h-[180px] ag:mt-[50px] ag:rounded-[16px] p-4">
        <div
          className={'${styles.achievebox22} w-[90%] ag:w-[85%] h-[400px] absolute bottom-0 flex items-end sm:gap-[3%] ag:gap-[10%] overflow-x-auto scroll-smooth pb-8 af:pb-4 md:h-auto xs:h-[220px] ag:h-[250px] sm:h-[280px]'}
        >
          {awards.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-[12px] flex-shrink-0 w-1/4 xs:w-[28%] ag:w-[40%]"
            >
              {/* Adjusted Image Size */}
              <img
                src={item.url}
                alt={item.description}
                loading="lazy"
                style={{
                  objectFit: "contain",
                }}
                className="sm:h-[205px] sm:w-[148px] ag:h-[148px] ag:w-[148px]"
              />
              <p className="font-inter font-bold text-[20px] leading-[24px] text-white text-center lg:text-[18px] lg:leading-[22px] md:text-[14px] md:leading-[18px] xs:text-[12px] xs:leading-[14px] ag:text-[10px] ag:leading-[12px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;