import React from 'react';
import Link from 'next/link';

const services = [
  { title: "Income Tax", description: "Professional assistance in income tax planning, filing, and compliance.", link:"/services/TaxService/IncomeTax" },
  { title: "Goods and Services Tax", description: "Comprehensive GST services including registration, filing, and advisory.", link:"/services/TaxService/GST" },
  { title: "Tax Deducted at Source", description: "Expert handling of TDS calculations, deductions, and returns.", link:"/services/TaxService/TDS" },
];

const TaxService = () => {
  return (
    <div className="container max-w-screen-xl mx-auto p-4 mt-16">
    <div className="my-11">
      <h1 className="text-4xl text-center font-inter font-bold text-orange">
        Tax Services
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

export default TaxService;