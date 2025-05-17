import React from 'react';
import Link from 'next/link';
import LogoImage from "../Header/PNC-Soft-Tech-Rect.svg";
import Image from "next/image";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoSkype, BiLogoWhatsapp } from "react-icons/bi";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const openWhatsApp = () => {
    if (typeof window !== "undefined") {
      const phoneNumber = "+8801793278360";
      const whatsappURL = `https://wa.me/${phoneNumber}`;
      window.open(whatsappURL, "_blank");
    }
  };
  
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-12 w-auto">
                <Image
                  src={LogoImage}
                  className="h-full w-auto"
                  alt="PNC Soft Tech Logo"
                  height={48} 
                  width={120}
                  priority
                />
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              We deliver innovative software solutions to help businesses thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/pncsoft.tech"
                className="social-icon-link"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoFacebook className="text-white hover:text-[#00FAA8] text-xl transition duration-300" />
              </a>

              <a
                href="https://www.linkedin.com/company/pnc-soft-tech/"
                className="social-icon-link"
                aria-label="LinkedIn"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BiLogoLinkedin className="text-white hover:text-[#00FAA8] text-xl transition duration-300" />
              </a>

              <button
                onClick={openWhatsApp}
                className="social-icon-link"
                aria-label="WhatsApp"
              >
                <BiLogoWhatsapp className="text-white hover:text-[#00FAA8] text-xl transition duration-300" />
              </button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#00FAA8]/30 pb-2 text-[#00FAA8]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#00FAA8] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#00FAA8] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/Services/page" className="text-gray-300 hover:text-[#00FAA8] transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/Portfolio/page" className="text-gray-300 hover:text-[#00FAA8] transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link href="/Team/page" className="text-gray-300 hover:text-[#00FAA8] transition-colors">Our Team</Link>
              </li>
              <li>
                <Link href="/FAQ/page" className="text-gray-300 hover:text-[#00FAA8] transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/Contact/page" className="text-gray-300 hover:text-[#00FAA8] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#00FAA8]/30 pb-2 text-[#00FAA8]">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/Services/WebDevelopment/page" className="text-gray-300 hover:text-[#00FAA8] transition-colors">Web Development</Link>
              </li>
              <li>
                <Link href="/Services/MobileAppDevelopment/page" className="text-gray-300 hover:text-[#00FAA8] transition-colors">Mobile App Development</Link>
              </li>
              <li>
                <Link href="/Services/UIUXDesign/page" className="text-gray-300 hover:text-[#00FAA8] transition-colors">UI/UX Design</Link>
              </li>
              <li>
                <Link href="/Services/CloudServices/page" className="text-gray-300 hover:text-[#00FAA8] transition-colors">Cloud Services</Link>
              </li>
              <li>
                <Link href="/Services/DigitalMarketing/page" className="text-gray-300 hover:text-[#00FAA8] transition-colors">Digital Marketing</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#00FAA8]/30 pb-2 text-[#00FAA8]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-[#00FAA8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">
                  123 Tech Street, Suite 100<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-[#00FAA8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-[#00FAA8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">info@pncsofttech.com</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <Link href="/Contact/page" className="inline-block px-4 py-2 bg-[#00FAA8] text-slate-900 rounded-md font-medium hover:bg-[#00dfa3] transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        
        {/* Newsletter Subscription */}
        <div className="bg-slate-800/50 p-6 rounded-lg mb-8 border border-[#00FAA8]/10">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0 md:mr-6">
              <h3 className="text-lg font-semibold mb-2 text-[#00FAA8]">Subscribe to Our Newsletter</h3>
              <p className="text-gray-300">Stay updated with our latest news, articles, and project updates.</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FAA8]"
              />
              <button className="px-4 py-2 bg-[#00FAA8] text-slate-900 rounded-md hover:bg-[#00dfa3] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} PNC Soft Tech. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-[#00FAA8] transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#00FAA8] transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-[#00FAA8] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
