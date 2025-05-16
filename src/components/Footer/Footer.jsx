/* eslint-disable no-unused-vars */
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  BiLogoFacebook,
  BiSolidAddToQueue,
  BiLogoLinkedin,
  BiLogoGmail,
  BiLogoWhatsapp,
} from "react-icons/bi";
import { BsTelephoneInbound } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const openWhatsApp = () => {
    // Construct the URL to open WhatsApp
    const phoneNumber = "+8801793278360";
    const whatsappURL = `https://wa.me/${phoneNumber}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");
  };
  
  return (
    <footer className="bg-gradient-to-r from-[#041436] to-[#071952] text-white">
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-[#00FAA8] pl-3">PNC Soft Tech</h2>
            <p className="text-gray-300 leading-relaxed">
              PNC Soft Tech is a mobile app and web development company that
              offers a wide range of services and features using various
              technologies.
            </p>
            <div className="pt-4 flex items-center text-gray-300">
              <FaMapMarkerAlt className="mr-2 text-[#00FAA8]" />
              <p>BM College Road, Barisal, Bangladesh</p>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-[#00FAA8] pl-3">Quick Contact</h2>
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-[#00FAA8]/20 flex items-center justify-center mr-3">
                  <BsTelephoneInbound className="text-[#00FAA8] group-hover:animate-pulse" />
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">+880 1793-278360</p>
              </div>
              
              <div className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-[#00FAA8]/20 flex items-center justify-center mr-3">
                  <BiLogoGmail className="text-[#00FAA8] group-hover:animate-pulse" />
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">pncsoft.tech@gmail.com</p>
              </div>
              
              <div className="flex items-center group cursor-pointer" onClick={openWhatsApp}>
                <div className="w-10 h-10 rounded-full bg-[#00FAA8]/20 flex items-center justify-center mr-3">
                  <BiLogoWhatsapp className="text-[#00FAA8] group-hover:animate-pulse" />
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">+880 1793278360</p>
              </div>
            </div>
          </div>

          {/* Other Pages */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-[#00FAA8] pl-3">Quick Links</h2>
            <ul className="space-y-3">
              <li className="group">
                <Link href="/services" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#00FAA8]/20 flex items-center justify-center mr-3 group-hover:bg-[#00FAA8]/30 transition-colors duration-300">
                    <BiSolidAddToQueue className="text-[#00FAA8]" />
                  </div>
                  Services
                </Link>
              </li>
              <li className="group">
                <Link href="/faq" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#00FAA8]/20 flex items-center justify-center mr-3 group-hover:bg-[#00FAA8]/30 transition-colors duration-300">
                    <BiSolidAddToQueue className="text-[#00FAA8]" />
                  </div>
                  FAQ
                </Link>
              </li>
              <li className="group">
                <Link href="/team" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#00FAA8]/20 flex items-center justify-center mr-3 group-hover:bg-[#00FAA8]/30 transition-colors duration-300">
                    <BiSolidAddToQueue className="text-[#00FAA8]" />
                  </div>
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-[#00FAA8] pl-3">Connect With Us</h2>
            <div className="space-y-4">
              <a
                href="https://www.facebook.com/pncsoft.tech"
                className="flex items-center group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 rounded-full bg-[#00FAA8]/20 flex items-center justify-center mr-3 group-hover:bg-[#00FAA8]/30 transition-all duration-300">
                  <BiLogoFacebook className="text-[#00FAA8]" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Facebook</span>
              </a>
              
              <a
                href="https://www.linkedin.com/company/pnc-soft-tech/"
                className="flex items-center group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 rounded-full bg-[#00FAA8]/20 flex items-center justify-center mr-3 group-hover:bg-[#00FAA8]/30 transition-all duration-300">
                  <BiLogoLinkedin className="text-[#00FAA8]" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">LinkedIn</span>
              </a>
              
              <div
                onClick={openWhatsApp}
                className="flex items-center group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-[#00FAA8]/20 flex items-center justify-center mr-3 group-hover:bg-[#00FAA8]/30 transition-all duration-300">
                  <BiLogoWhatsapp className="text-[#00FAA8]" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#031230] py-6">
        <p className="text-center text-gray-300 text-sm md:text-base">
          © {new Date().getFullYear()} PNC Soft Tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
