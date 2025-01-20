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
		<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PNC Soft Tech",
              "url": "https://pncsoft.tech",
              "logo": "https://pncsoft.tech/logo.png",
              "description": "PNC Soft Tech is a leading software development agency specializing in web and mobile app development, including Flutter apps, MERN stack development, React, Next.js, and MongoDB-based websites.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "BM College Road",
                "addressLocality": "Barisal",
                "addressRegion": "Barisal",
                "postalCode": "8200",
                "addressCountry": "Bangladesh"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+8801793278360",
                  "contactType": "Customer Service",
                  "areaServed": "Global",
                  "availableLanguage": ["English"]
                }
              ],
              "sameAs": [
                "https://www.facebook.com/pncsofttech",
                "https://twitter.com/pncsofttech",
                "https://www.linkedin.com/company/pncsofttech",
                "https://www.instagram.com/pncsofttech"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Software Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Development",
                      "description": "Custom web development services using React, Next.js, and MongoDB for scalable and high-performance websites."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mobile App Development",
                      "description": "Flutter app development for cross-platform mobile apps with high performance and native-like experience."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "MERN Stack Development",
                      "description": "Complete web development using the MERN stack (MongoDB, Express.js, React, Node.js) for modern web applications."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "React & Next.js Development",
                      "description": "Building fast, SEO-friendly, and dynamic web applications using React and Next.js frameworks."
                    }
                  }
                ]
              }
            }),
          }}
        />
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
