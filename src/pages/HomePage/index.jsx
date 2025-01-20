"use-client";
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React from "react";
import Head from "next/head";
import Homedetails from "./Homedetails";
import Services from "../Services/Services";
import ReliablePart from "./ReliablePart";
import SuccessList from "./SuccessList";
import Discover from "./Discover";
import { ScrollToTop } from "../../constant/ScrollToTop";
import BestPart from "./BestPart";
const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home | PNC Soft Tech</title>
        <meta property="og:title" content="Home | PNC Soft Tech" />
        <meta property="og:description" content="Welcome to PNC Soft Tech!" />
        <meta
          name="keywords"
          content="Software, app, development, pnc, soft, software, website, mern stack,flutter, flutter app"
        />
        <meta name="author" content="Your Name" />
        <meta
          property="og:image"
          content="https://www.mywebsite.com/og-image.jpg"
        />
        <meta property="og:url" content="https://www.mywebsite.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | PNC Soft Tech" />
        <meta name="twitter:description" content="Welcome to PNC Soft Tech!" />
        <meta
          name="twitter:image"
          content="https://www.mywebsite.com/twitter-image.jpg"
        />
        <link rel="canonical" href="https://www.mywebsite.com/" />
      </Head>

      <Homedetails />
      <ReliablePart />
      <Services />
      <Discover />
      <SuccessList />
      <BestPart />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
