import Link from 'next/link';
import React from 'react';

const services = [
  { title: "Drafting", description: "Professional drafting services for various legal and business documents.", link:"/services/DraftingServices/Drafting" },
  { title: "Partnership Deed", description: "Expert drafting of partnership deeds tailored to your business needs.", link:"/services/DraftingServices/PartDeed" },
  { title: "Article of Association", description: "Precise drafting of Articles of Association for company incorporation.", link:"/services/DraftingServices/AOA" },
  { title: "Memorandum of Association", description: "Memorandum of Association is a legal document that explains why the organization was founded.", link:"/services/DraftingServices/MOA" },
  { title: "Shareholders Agreement", description: "Crafting comprehensive shareholder agreements to protect all parties' interests.", link:"/services/DraftingServices/ShareAgree" },
  { title: "Debentures Agreement", description: "Specialized drafting of debenture agreements for debt instruments.", link:"/services/DraftingServices/DebentAgree" },
  { title: "Hire Purchase", description: "Expert drafting of hire purchase agreements for asset acquisition.", link:"/services/DraftingServices/HirePurc" },
  { title: "Lease Deed", description: "Professional preparation of lease deeds for property transactions.", link:"/services/DraftingServices/LeaseDeed" },
  { title: "Contract and Agreement", description: "Comprehensive drafting services for various business contracts and agreements.", link:"/services/DraftingServices/ContractAgree" },
];

const DraftingServices = () => {
  return (
    <div className="container max-w-screen-xl mx-auto p-4 mt-16">
    <div className="my-11">
      <h1 className="text-4xl text-center font-inter font-bold text-orange">
        Drafting Services
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

export default DraftingServices;