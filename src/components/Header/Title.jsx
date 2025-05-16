"use client"
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import LogoImage from "./PNC-Soft-Tech-Rect.svg";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoSkype,
  BiLogoWhatsapp,
} from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

//bg-gradient-to-r from-teal-200 to-teal-500
export default function Title() {
  // const openWhatsApp = () => {
  //   // Construct the URL to open WhatsApp
  //   const phoneNumber = "+8801793278360";
  //   const whatsappURL = `https://wa.me/${phoneNumber}`;

  //   // Open WhatsApp in a new tab
  //   window.open(whatsappURL, "_blank");
  // };
  const openWhatsApp = () => {
    if (typeof window !== "undefined") {
      const phoneNumber = "+8801793278360";
      const whatsappURL = `https://wa.me/${phoneNumber}`;
      window.open(whatsappURL, "_blank");
    }
  };
  
    return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="h-12 w-auto">
          <Link href="/" className="flex items-center">
            <Image
              src={LogoImage}
              className="h-full w-auto"
              alt="PNC Soft Tech Logo"
              height={48} 
              width={120}
              priority
            />
          </Link>
        </div>

        {/* Company Name for medium+ screens */}
        <div className="hidden md:block text-xl lg:text-2xl font-bold text-white">
          <span>Welcome to <span className="text-[#00FAA8]">PNC Soft Tech</span></span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
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
    </div>
  );
}
