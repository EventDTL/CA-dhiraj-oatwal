"use client"
import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const handleGetInTouch = () => {
    window.location.href = '/contactus';
  };

  const services = [
    { label: 'Tax Services', link: '/services/TaxService' },
    { label: 'Audit Services', link: '/services/AuditServices' },
    { label: 'Company Formation', link: '/services/CompanyFormation' },
    { label: 'Drafting & Agreement', link: '/services/DraftingServices' },
    { label: 'Appeals & Litigation', link: '/services/AppealsLitigation' },
    { label: 'Advisory services', link: '/services/AdvisoryServices' },
    { label: 'Other Services', link: '/services/OtherServices' },
  ];

  return (
    <nav className="bg-white w-full fixed top-0 left-0 z-50">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center ag:w-1/2 sm:w-1/3">
            <a href="/">
              <img
                src="/companylogo.svg" 
                alt="Company Logo" 
                className="w-auto object-contain ag:h-28 ag:mt-0 sm:mt-0 md:h-36 md:mt-1"
              />
            </a>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden sm:flex items-center justify-center space-x-8 w-2/4">
            <a href="/" className="font-inter text-center text-[19px] font-normal leading-[22.89px] tracking-[-0.03em] text-gray-600 hover:text-[#FF4400] transition-colors font-bold: 700 ">
              Home
            </a>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-center font-inter text-[18px] font-normal leading-[22.89px] tracking-[-0.03em] text-gray-600 hover:text-[#FF4400] transition-colors"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                Our Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {/* Desktop Dropdown Menu - Grid Layout */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-white rounded-2xl shadow-lg z-20 transition-all duration-300 ${
                  isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="grid grid-cols-2 gap-2 p-4">
                  {services.map((service) => (
                    <a
                      key={service.label}
                      href={service.link}
                      className="flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl group text-base font-medium hover:font-semibold transition-all duration-200"
                    >
                      <span>{service.label}</span>
                      <ChevronRight className="h-5 w-5 text-red-500 transition-transform group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/aboutus" className="font-inter text-[18px] text-center font-normal leading-[22.89px] tracking-[-0.03em] text-gray-600 hover:text-[#FF4400] transition-colors">
              About Us
            </Link>
          </div>

          {/* Desktop Get in touch button */}
          <div className="hidden sm:flex items-center justify-end w-1/4">
            <button 
              onClick={handleGetInTouch}
              className="bg-[#FF4400] text-white px-5 py-2 rounded-full hover:bg-[#E63D00] text-sm"
            >
              Get in touch
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isOpen ? <X size={36} /> : <Menu size={36} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`sm:hidden fixed top-20  right-0 w-full max-w-sm h-[calc(100vh-5rem)] bg-white transform transition-transform duration-300 ease-in-out overflow-y-auto z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 space-y-2">
          <a
            href="/"
            className="block text-gray-600 hover:text-gray-900 py-3 px-4 rounded-md"
          >
            Home
          </a>

          {/* Mobile Services Menu */}
          <div className="rounded-md overflow-y-auto">
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center justify-between w-full text-gray-600 hover:text-gray-900 py-3 px-4 hover:bg-gray-50 rounded-md"
            >
              <span>Our Services</span>
              <ChevronDown
                className={`h-5 w-5 transform transition-transform duration-300 ${
                  isMobileServicesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {/* Mobile Services Dropdown */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-y-auto ${
                isMobileServicesOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
              } overflow-hidden`}
            >
              <div className="p-2 bg-gray-50 space-y-1 overflow-y-auto ">
                {services.map((service) => (
                  <a
                    key={service.label}
                    href={service.link}
                    className="flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-white hover:text-gray-900 rounded-md group"
                  >
                    <span>{service.label}</span>
                    <ChevronRight className="h-5 w-5 text-red-500 transition-transform group-hover:translate-x-1" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a
            href="/about"
            className="block text-gray-600 hover:text-gray-900 py-3 px-4 rounded-md"
          >
            About Us
          </a>

          {/* Mobile Get in touch button */}
          <button 
            onClick={handleGetInTouch}
            className="w-full bg-[#FF4400] text-white px-6 py-1.5 rounded-full hover:bg-[#E63D00] text-sm mt-4"
          >
            Get in touch
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar;
