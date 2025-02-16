import React from 'react';
import Link from 'next/link';

const services = [
  { title: "Loans and Funding for Business", description: "We secure optimal financing solutions tailored to your business growth needs.", link:"/services/AdvisoryServices/Loan&Funding" },
  { title: "Property advisory", description: "Expert guidance on real estate investments, valuations, and tax implications.", link:"/services/AdvisoryServices/PropertyAdv" },
  { title: "Investment Advisory", description: "Personalized investment strategies to maximize returns while managing risk.", link:"/services/AdvisoryServices/InvestAdv" },
  { title: "Fixed Deposite Advisory", description: "Navigate the FD landscape for the best rates and terms aligned with your goals.", link:"/services/AdvisoryServices/FixedDepo" },
  { title: "Bond Advisory", description: "Expert advice on bond investments to optimize your fixed-income portfolio.", link:"/services/AdvisoryServices/BondAdv" },
  { title: "Subsidy", description: "Guide businesses through government subsidies, from identification to application.", link:"/services/AdvisoryServices/Subsidy" },
  { title: "Financial Fraud", description: " Implement robust strategies and systems to protect your business from financial fraud.", link:"/services/AdvisoryServices/FinancialFraud" },
  { title: "Economic Offence Wing", description: "Support and representation in matters related to economic offences and investigations.", link:"/services/AdvisoryServices/EconomicOffence" },
  { title: "Life and General Insurence", description: "Select the most suitable insurance policies for comprehensive personal and business coverage.", link:"/services/AdvisoryServices/Life&GeneralIns" },
  { title: "Startup India Registration", description: "Streamline your Startup India registration to access government benefits and incentives.", link:"/services/AdvisoryServices/StartupIndia" },
  { title: "Import Export Counsultant", description: "Navigate international trade complexities with expert guidance on regulations and strategies.", link:"/services/AdvisoryServices/ImportExportCons" },
];

const AdvisoryServices = () => {
  return (
    <div className="container max-w-screen-xl mx-auto p-4 mt-16">
    <div className="my-11">
      <h1 className="text-4xl text-center font-inter font-bold text-orange">
        Advisory Services
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

export default AdvisoryServices;