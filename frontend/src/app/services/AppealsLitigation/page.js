import React from 'react';
import Link from 'next/link';

const services = [
  { title: "Appeals", description: "Expert assistance in filing and managing tax and legal appeals across various forums.", link:"/services/AppealsLitigation/Appeals" },
  { title: "Litigations", description: "Comprehensive support for legal proceedings related to tax and business matters.", link:"/services/AppealsLitigation/Litigations" },
  { title: "Business Dispute Resolution", description: "Efficient mediation and resolution services for various business conflicts.", link:"/services/AppealsLitigation/BusinessDisputes" },
];

const AppealsLitigation = () => {
  return (
    <div className="container max-w-screen-xl mx-auto p-4 mt-16">
    <div className="my-11">
      <h1 className="text-4xl text-center font-inter font-bold text-orange">
        Appeals and Litigations
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

export default AppealsLitigation;