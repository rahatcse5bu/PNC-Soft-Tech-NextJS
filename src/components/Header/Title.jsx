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
export default function Tittle() {
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
    <nav
      className="title-container h-[80px] bg-gradient-to-r from-slate-900 to-slate-700   "
      style={{ padding: "10px 0" }}
    >
      <div className=" flex flex-row justify-between pt-[5px]  px-[40px] ">
        {/* Image part  */}
        <div className="h-full  w-[120px] ">
          <Link href="/">
            <Image
              src={LogoImage}
              className="h-full w-full object--cover rounded--full  "
              alt="bholaBar" height={300} width={300}
            />
          </Link>
        </div>
        <div className=" text-[20px] font-bold leading-[40px] self-center md:text-[30px] text-[#fff] ">
          <h1>Welcome To PNC Soft Tech</h1>
        </div>

        <div className=" hidden md:flex flex-row cursor-pointer justify-evenly px-[20px] self-center  h-[35px] gap-6 ">
          <a
            href="https://www.facebook.com/pncsoft.tech"
            className="cursor-pointer transition ease-in duration-500  p-1 border-solid border-[2px] border-[#fff]  hover:bg-[#fff] rounded-full "
          >
            <BiLogoFacebook className="text-[22px] text-[#fff] hover:text-[#00FAA8] " />
          </a>

          <a
            href="https://www.linkedin.com/company/pnc-soft-tech/"
            className=" p-1 border-solid border-[2px] border-[#fff] hover:bg-[#fff] rounded-full transition ease-in duration-500"
          >
            <BiLogoLinkedin className="text-[22px] text-[#fff] hover:text-[#00FAA8] " />
          </a>

          <div
            onClick={openWhatsApp}
            className=" p-1 border-solid border-[2px] border-[#fff] hover:bg-[#fff] rounded-full transition ease-in duration-500"
          >
            <BiLogoWhatsapp className="text-[22px] text-[#fff] hover:text-[#00FAA8] " />
          </div>
        </div>
      </div>
    </nav>
  );
}
