'use client'
import Image from 'next/image'
import styles from '../Certification/About.css'
import react from 'react'
import { useRef } from 'react'


const data = [
    {
        year:'2020',
        description:'Assembled and conceived Youtube channel with 100+ videos and 1.1M  ',
        icon:'/calogo.jpg'
    },
    {
        year:'2009',
        description:'Worked on the 100+ acres land parcel where 216 owners which was financed by German bank.',
        icon:'/calogo.jpg'
    },
    {
        year:'2011',
        description:'Mediated family dispute for a well known business family for assets of 545 crs.',
        icon:'/calogo.jpg'
    },
    {
        year:'2020',
        description:'Designed and drafted stratergies for Australian clients for their business expansion.',
        icon:'/calogo.jpg'
    }
]

function Achievements() {
    const sliderRef = useRef(null);
  
    const handleScroll = (event) => {
      const slider = sliderRef.current;
      const scrollLeft = slider.scrollLeft;
      const scrollMax = slider.scrollWidth - slider.clientWidth;
  
      if (scrollLeft < 0 || scrollLeft > scrollMax) {
        event.preventDefault();
      }
    };
  
    return (
      <div className="w-full mb-[110px] pt-[14px] pb-[30px]">
        <div className="w-2/4 mx-auto flex justify-center text-[30px] font-inter font-bold border-b-[1px] border-b-[#00000080] mb-5 pb-4 lg:w-5/12 sm:w-3/4 xs:w-11/12 sm:text-[24px] sm:font-bold xs:font-normal">
          <h1>Achievements</h1>
        </div>
  
        <div
          className="py-1.5 ag:h-[325px] sm:h-[260px] xl:h-[300px] flex gap-[9px] aa:gap-[35px] sm:gap-[6px] md:gap-[35px] overflow-x-auto scroll-smooth custom-scrollbar ag:ml-[16px] af:ml-[24px] aa:ml-[32px] lg:ml-[75px]"
          ref={sliderRef}
          onWheel={handleScroll}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="inline-block h-auto w-[362px] mt-[50px] rounded-[30px] bg-[#0E1021] shrink-0 ag:w-[300px] af:w-[345px] aa:w-[360px] lg:w-[31//po0px] md:w-[300px] sm:w-[240px] xs:w-[150px]"
            >
              <div className="w-[91px] h-[91px] rounded-full border-[3px] border-[#0E1021] bg-white flex justify-center items-center mx-auto mt-[-40px] lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] md:mt-[-30px]">
                <img src={item.icon} alt="icon" className="w-[41px] h-[29px] md:w-[30px] md:h-[20px]" />
              </div>
  
              <h1 className="text-center mt- text-white font-inter font-bold text-[32px] md:mt-5 md:text-xl sm:text-lg xs:text-base">
                {item.year}
              </h1>
  
              <p className="px-6 md:px-10 mt-[5px] text-center text-white font-inter font-normal text-[23px] leading-[27.6px] md:mt-[11px] md:text-base sm:text-sm xs:text-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Achievements;


