import React from 'react';
import Link from 'next/link';

const services = [
  { title: "Statutory audit", description: "Ensuring compliance with all statutory requirements for businesses.", link:"/services/AuditServices/Statutory" },
  { title: "Tax Audit", description: "Thorough tax audit services to ensure compliance and identify opportunities.", link:"/services/AuditServices/TaxAudit" },
  { title: "Complience Audit", description: "Comprehensive assistance in meeting all regulatory compliance requirements.", link:"/services/AuditServices/Complience" },
  { title: "Internal Audit", description: "Detailed internal audit services to improve operational efficiency and control.", link:"/services/AuditServices/InternalAudit" },
];

const AuditServices = () => {
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

export default AuditServices;