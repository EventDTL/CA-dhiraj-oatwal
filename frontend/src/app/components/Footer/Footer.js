import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const companyLinks = [
    { name: "Home", link: "/" },
    { name: "Career", link: "/career" },
    { name: "Gallery", link: "/gallery" },
    { name: "About Us", link: "/aboutus" },
    { name: "Contact Us", link: "/contactus" },
  ];
  return (
    <footer className="bg-gradient-to-b from-hero to-darkblack text-white pt-4 relative">
      {/* Orange Line at Top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-orange"></div>

      {/* Main Footer Content */}
      <div className="mx-auto px-14 py-8 flex flex-col text-center md:text-left md:flex-row md:justify-between md:space-x-8 space-y-8 md:space-y-0">
        {/* About Section */}
        <div className=" md:w-1/3">
          <img
            src="/CADOIMG.png"
            alt="CA Dhiraj Ostwal Logo"
            className="w-40 mb-4 m-auto md:m-0"
          />
          <p className="text-orange font-semibold mb-4">STRATEGY COACH</p>
          <p className="text-sm leading-relaxed mb-4">
            CA Dhiraj Ostwal Firm provides expert financial services in tax
            compliance, company formation, audit, and advisory. With over 25
            years of experience, we cater to individuals and businesses in Pune,
            offering personalized solutions at competitive prices. Let us
            simplify your financial journey—connect with us today for expert
            guidance!
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 justify-center md:justify-normal">
            {[
              { icon: FaFacebookF, link: "https://www.facebook.com/cadhirajostwal" },
              { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/cadhirajostwal" },
              { icon: FaInstagram, link: "https://www.instagram.com/cadhirajostwal" },
              { icon: FaTwitter, link: "https://x.com/cadhirajostwal" },
            ].map(({ icon: Icon, link }, idx) => (
              <a
                key={idx}
                href={link}
                className="text-white border border-white rounded-full p-2 hover:bg-orange hover:text-black"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Links and Contact Sections */}
        <div className="md:w-1/2 flex flex-row md:flex-row space-y-8 md:space-y-0 md:gap-4 md:ml-12">
          {/* Company Links */}
          <div className="flex flex-col space-y-2 md:w-1/2">
            <h3 className="text-lg font-bold md:text-2xl mb-2 text-orange">Company</h3>
            {companyLinks.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className="text-sm md:text-base hover:text-orange"
          >
            {item.name}
          </Link>
        ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col  space-y-4 md:w-1/2 ">
            <h3 className="text-lg font-bold md:text-2xl mb-2 text-orange">Get in Touch</h3>
            <div className="flex justify-center md:justify-normal items-start space-x-2 text-sm text-center md:text-left">
              <FaMapMarkerAlt className="text-orange mt-1" />
              <p>
               7, Shrikrishna, Opp Brew Culture Ferguson College Road Near Anna, Pune, 411004
              </p>
            </div>
            <div className="flex justify-center md:justify-normal items-center space-x-2 text-sm">
              <FaPhoneAlt className="text-orange" />
              <a href="tel:7020045454" className="font-semibold hover:text-orange">
                70200 45454
              </a>
            </div>
            <div className="flex justify-center md:justify-normal items-center space-x-2 text-sm">
              <FaEnvelope className="text-orange" />
              <a
                href="mailto:Dhiraj.Ostwal@gmail.com"
                className="font-semibold hover:text-orange"
              >
                dhiraj.Ostwal@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-8 py-4">
        <div className="flex flex-col md:flex-row justify-around items-center text-sm text-gray px-6">
          <p className="text-center mb-4 md:mb-0">
            &copy; 2024, Copyrights @ Cadhirajostwal. All Rights Reserved
          </p>
          <div className="flex space-x-6">
            {[
              { icon: FaFacebookF, link: "https://www.facebook.com/cadhirajostwal" },
              { icon: FaTwitter, link: "https://x.com/cadhirajostwal" },
              { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/cadhirajostwal" },
              { icon: FaInstagram, link: "https://www.instagram.com/cadhirajostwal" },
            ].map(({ icon: Icon, link }, idx) => (
              <a key={idx} href={link} className="text-white hover:text-orange">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
