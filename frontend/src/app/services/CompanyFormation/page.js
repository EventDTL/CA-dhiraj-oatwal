import React from 'react';
import Link from 'next/link';

const services = [
  { title: "Company Formation", description: "End to End support in incorporating and setting up new companies", link:"/services/CompanyFormation/CompF" },
  { title: "Business Registration", description: "Streamlined services for registering various forms of businesses", link:"/services/CompanyFormation/BusReg" },
  { title: "Shop Act", description: "Assistance in obtaining and maintaining Shop Act licenses", link:"/services/CompanyFormation/Shopact" },
  { title: "Ministry of Micro, Small & Medium", description: "Guidance on MSME registration and accessing related benefits", link:"/services/CompanyFormation/MSME" },
  { title: "Partnership Registration", description: "Efficient services for registering and formalizing business partnerships", link:"/services/CompanyFormation/PartReg" },
  { title: "Limited Liability Partnership", description: "Specialized support in forming and managing Limited Liability Partnerships", link:"/services/CompanyFormation/LLP" },
  { title: "Non-Profit Company", description: "Expert assistance in establishing and managing non-profit organizations", link:"/services/CompanyFormation/NonProf" },
  { title: "Charitable Trust", description: "Comprehensive services for setting up and managing charitable trusts", link:"/services/CompanyFormation/CharTrust" },
  { title: "Association", description: "Support in forming and registering various types of associations", link:"/services/CompanyFormation/Association" },
];

const CompanyFormation = () => {
  return (
    <div className="container max-w-screen-xl mx-auto p-4 mt-16">
    <div className="my-11">
      <h1 className="text-4xl text-center font-inter font-bold text-orange">
        Company Formation
      </h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-3xl p-6 border h-full flex flex-col"
        >
          <div className="flex-grow">
            <h5 className="font-bold font-inter text-2xl mb-6">
              {service.title}
            </h5>
            <p className="text-gray-600 font-inter xl:text-lg">
              {service.description}
            </p>
          </div>
          <div className="mt-4 flex justify-end">
          <Link href={service.link}>
            <button className="flex flex-row-reverse font-inter bg-orange text-white py-3 px-4 xl:py-5 xl:px-7 rounded-xl hover:bg-orange-600">
              Know more
            </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default CompanyFormation;