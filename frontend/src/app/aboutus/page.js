import React from "react";
import Image from "next/image";

const ClientStat = ({ number, description }) => (
  <div className="flex flex-col items-center gap-1.5">
    <h1 className="font-inter font-bold text-[25px] text-[#434343] sm:text-[30px] xl:text-[40px]">{number}</h1>
    <p className="font-inter font-medium text-[18px] leading-[21.6px] text-[#757575]">{description}</p>
  </div>
);

const AboutUs = () => {
  const teamembers = [
    { name: "CA Dhiraj Ostwal", role: "Director", imgsrc: "/dhiraj.jpg" },
    { name: "Ganesh Manjare", role: "Manager", imgsrc: "/Ganesh.jpg" },
    { name: "Asit Adhainghe ", role: "Article Assistant", imgsrc: "/asit.jpg" },
    { name: "Vyankatesh kasat", role: "Article Assistant", imgsrc: "/vyankatesh1.jpg" },
    { name: "Shivam yadav ", role: "Article Assistant", imgsrc: "/shivam1.jpg" },
    { name: "Irfan Shaikh ", role: "Article Assistant", imgsrc: "/irfan1.jpg" },
    { name: "Gauri Jagtap", role: "Account Assistant", imgsrc: "/Gauri.jpg" },
    { name: "Abhay Baghel", role: "Account Assistant", imgsrc: "/abhay1.jpg" },
    { name: "Nihira Jadhav", role: "ACCA PER", imgsrc: "/nihira1.jpg" },
    { name: "Aryan Sajwani", role: "Account Assistant", imgsrc: "/aaryan1.jpg" },
    { name: "Vaishnavi Bhosale", role: "Account Assistant", imgsrc: "/vaishnavi1.jpg" },
    { name: "Gitesh Darekar", role: "Account Assistant", imgsrc: "/gitesh.jpg" },
    { name: "Sonali Jarad", role: "Executive Assistant ", imgsrc: "/sonali.jpg" },
    { name: "Purushottam Dongare ", role: "Account Assistant", imgsrc: "/purushottam.jpg" },
    { name: "Niraj Gawade", role: "Account Assistant", imgsrc: "/niraj.jpg" },

  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen w-full">
      <div className="w-full sm:p-[70px] ag:p-[20px] xl:px-28 mt-8">
        {/* About Section */}
        <div className="sm:flex sm:flex-row gap-4 flex-col sm:gap-8 ag:hidden mt-6">
          <div className="sm:w-[50%] bg-white rounded-lg p-6 shadow-md">
            <h5 className="font-inter font-medium text-[24px] text-[#FF4400] pl-8 pt-6">About us</h5>
            <h1 className="mt-6 font-inter font-bold text-[45px] leading-[54px] pl-8">
              Global Expertise,<br /> Strategic Business <br /> Growth
            </h1>
            <p className="mt-6 font-inter font-normal text-[24px] leading-7 text-justify pl-8">
              CA Dhiraj Ostwal is an experienced and professional CA with more than 25 years in Business Coaching, advisory, and strategy planning. He has worked on a global level in countries like America, Australia, New Zealand, and Singapore. With his extraordinary rich core business experience, he has helped various business houses in India by guiding and sharing his entrepreneurial skills.
            </p>
          </div>
          <div className="sm:w-[50%]">
            <div className="w-full h-[496px] bg-[#0E1021] pt-8 relative z-10 rounded-3xl">
              <div className="w-[60%] h-[464px] mx-auto relative">
                <Image src="/aboutdp.png" layout="fill" objectFit="cover" alt="About us" />
              </div>
              <Image src="/abouteclipse.png" alt="" width={100} height={100} className="absolute top-[-94px] z-[-1]" />
            </div>
            <div className="flex justify-center pt-[5px] sm:pt-5">
              <div className="bg-white p-6 rounded-md shadow-md w-[80%] sm:w-full">
                <div className="flex justify-between items-center gap-0 flex-wrap">
                  {/* Clients Box */}
                  <div className="bg-[#FAFAFA] p-4 rounded-lg shadow-sm flex flex-col items-center w-[30%] sm:w-auto">
                    <div className="text-black text-4xl font-bold">500+</div>
                    <span className="text-gray-600 text-sm text-center">Clients across <br />India</span>
                  </div>

                  {/* Experience Box */}
                  <div className="bg-[#FAFAFA] p-4 rounded-lg shadow-sm flex flex-col items-center w-[30%] sm:w-auto">
                    <div className="text-black text-4xl font-bold">25</div>
                    <span className="text-gray-600 text-sm text-center">Years of <br /> Experience</span>
                  </div>

                  {/* Projects Box */}
                  <div className="bg-[#FAFAFA] p-4 rounded-lg shadow-sm flex flex-col items-center w-[30%] sm:w-auto">
                    <div className="text-black text-4xl font-bold">200+</div>
                    <span className="text-gray-600 text-sm text-center">Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

              {/* Mission and Vision */}
        <div className="w-full flex mt-5 gap-[2%] flex-col sm:gap-6 sm:flex-row">
          {/* Mission Section */}
          <div className="w-full sm:w-[55%] bg-white rounded-xl shadow-md p-6">
            <h1 className="font-inter font-bold text-[28px] sm:text-[36px] mb-1 sm:mb-7">
              Our <span className="text-[#E86130]">Mission</span>
            </h1>
            <div className="block sm:hidden w-full h-[2px] bg-[#FF440080] mt-19"></div>
            <p className="font-inter font-normal text-[18px] sm:text-[24px] mt-3 leading-[28px] sm:leading-[28.8px]">
              To propel the growth of startups and corporate giants by forging an unshakeable foundation through groundbreaking business and strategic development and to be a top-ten strategist on the global stage.
            </p>
          </div>
        

        {/* Vision Section */}
        <div className="w-full sm:w-[43%] bg-white rounded-lg shadow-md p-6">
            <h1 className="font-inter font-bold text-[28px] mt-5 sm:text-[36px] mb-2 sm:mb-7">
              Our <span className="text-[#E86130]">Vision</span>
            </h1> 
            <div className="block sm:hidden w-full h-[2px] bg-[#FF440080] mt-3"></div>
            <p className="font-inter font-normal text-[18px] sm:text-[24px] leading-[28px] mt-2 sm:leading-[28.8px]">
              To become the most trusted, efficient, and result-oriented companion to empower entrepreneurs, Start-ups, and corporates for uninterrupted growth through world-class business strategies.
            </p>
          </div>
        </div>

   

        <div className="w-full mt-16 sm:mt-7">
          <h1 className="font-inter font-bold text-4xl sm:text-3xl ml-7">
            Meet the <span className="text-[#FF4400]">Team</span>
          </h1>
          <div className="block sm:hidden w-full h-[2px] bg-[#FF440080] mt-2"></div>

  <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-9 gap-y-6"> {/* Added gap-y-6 for spacing */}
    {teamembers.map((member, index) => (
      <div
        key={index}
        className={`text-center ${Math.floor(index / 3) === 1 ? 'relative top-4' : ''}`} // Added a condition to lower the middle row
      >
        <div className="w-[300px] h-[300px] relative mx-auto">
          <Image
            src={member.imgsrc}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h1 className="mt-2 font-poppins font-bold text-lg">
          {member.name}
        </h1>
        <p className="font-inter text-md">{member.role}</p>
      </div>
    ))}
  </div>
</div>


      </div>
    </div>
  );
};

export default AboutUs;
