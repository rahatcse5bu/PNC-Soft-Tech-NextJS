/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React from "react";
import Meta from "../../components/SEO/Meta";
import Homedetails from "./Homedetails";
import Services from "../Services/Services";
import ReliablePart from "./ReliablePart";
import SuccessList from "./SuccessList";
import Discover from "./Discover";
import { ScrollToTop } from "../../constant/ScrollToTop";
import BestPart from "./BestPart";
import dynamic from "next/dynamic";

// Dynamically import heavier components
const DynamicReliablePart = dynamic(() => import("./ReliablePart"), {
  ssr: true,
  loading: () => <div className="h-96 w-full bg-gray-100 animate-pulse"></div>
});

const DynamicSuccessList = dynamic(() => import("./SuccessList"), {
  ssr: true
});

const HomePage = () => {  return (
    <div>
      <Meta 
        title="PNC Soft Tech | Leading Web & Mobile App Development Company"
        description="PNC Soft Tech delivers high-quality web and mobile app development solutions with Flutter, React, Next.js and MERN stack technologies. Get expert solutions for your digital needs."
        keywords="web development, mobile app development, flutter apps, react development, nextjs, MERN stack, software company, Bangladesh, IT solutions, custom software"
        canonical="/"
        ogImage="https://pncsoft.tech/og-image.jpg"
      />
      <Homedetails />
      <DynamicReliablePart />
      <Services />
      <Discover />
      <DynamicSuccessList />
      <BestPart />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
