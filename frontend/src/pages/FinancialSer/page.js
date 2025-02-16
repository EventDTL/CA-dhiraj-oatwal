import React from "react";
const FinancialServices = () => {
  return (
    <div className="container max-w-full lg:px-32 lg:pt-24 lg:pb-10 ag:px-7 ag:pt-5 ag:pb-2 mt-4">
      <h1 className="text-center font-inter lg:font-normal lg:text-5xl ag:text-xl lg:mb-2 af:text-3xl">
        Financial Services You Can{" "}
          <span className="text-orange  font-bold">
            Trust
          </span>
      </h1>
      <p className="text-black opacity-50 text-center font-inter ag:text-sm lg:font-normal lg:text-3xl lg:leading-7 af:text-lg">
        Expert Chartered Accountants delivering precise financial solutions for
        your business and personal needs.
      </p>
      <div className="flex justify-center items-center align-middle gap-14 ag:flex-col ag:gap-5 sm:flex-row mt-12">
        <div className="border border-gray-300 rounded-xl flex flex-col ag:w-[275px] ag:h-[220px] lg:w-[367px] lg:h-[270px]">
          <div
            className="flex-1 flex justify-center items-center"
            style={{ height: "70%" }}
          >
            <img
              src="/AuditServiceHome.svg"
              style={{ width: "186px", height: "134px" }}
            />
          </div>
          <div
            className="text-center flex justify-center items-center"
            style={{ height: "30%" }}
          >
            <h5 className="font-inter font-bold text-3xl leading-9 text-Oxford ag:text-xl">
              Audit Service
            </h5>
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl flex flex-col ag:w-[275px] ag:h-[220px] lg:w-[367px] lg:h-[270px]">
          <div
            className="flex-1 flex justify-center items-center"
            style={{ height: "70%" }}
          >
            <img
              src="/AppealLitigationHome.svg"
              style={{ width: "186px", height: "134px" }}
            />
          </div>
          <div
            className="text-center flex justify-center items-center"
            style={{ height: "30%" }}
          >
            <h5 className="font-inter font-bold text-3xl leading-9 text-Oxford ag:text-xl">
              Appeals & Litigation
            </h5>
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl flex flex-col ag:w-[275px] ag:h-[220px] lg:w-[367px] lg:h-[270px]">
          <div
            className="flex-1 flex justify-center items-center"
            style={{ height: "70%" }}
          >
            <img
              src="/CompanyFormationHome.svg"
              style={{ width: "186px", height: "134px" }}
            />
          </div>
          <div
            className="text-center flex justify-center items-center"
            style={{ height: "30%" }}
          >
            <h5 className="font-inter font-bold text-3xl leading-9 text-Oxford ag:text-xl">
              Company Formation
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialServices;
