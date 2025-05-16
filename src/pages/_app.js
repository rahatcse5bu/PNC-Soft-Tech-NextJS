import "../index.css";
import "../assets/styles/nav-bar.css";
import "../pages/AboutPage/PointSection/pointSection.css"; // Add your global CSS here
import MainLayout from "../Layout/MainLayout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const structuredData = {
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
        "availableLanguage": ["English", "Bengali"]
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
  };
  const defaultTitle = "PNC Soft Tech | Expert Web & Mobile App Development";
  const defaultDescription = "PNC Soft Tech offers cutting-edge web and mobile app development services including Flutter apps, MERN stack, React and Next.js development with guaranteed client satisfaction.";
  const defaultImage = "https://pncsoft.tech/og-image.jpg";
  const defaultUrl = "https://pncsoft.tech";
  
  return (
    <MainLayout>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#041436" />
        <meta name="description" content={defaultDescription} />
        <meta name="author" content="PNC Soft Tech" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="web development, mobile app development, flutter app, MERN stack, React, Next.js, software development, Bangladesh, custom software, ecommerce, web design" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={defaultUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={defaultUrl} />
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:description" content={defaultDescription} />
        <meta property="og:image" content={defaultImage} />
        <meta property="og:site_name" content="PNC Soft Tech" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={defaultUrl} />
        <meta name="twitter:title" content={defaultTitle} />
        <meta name="twitter:description" content={defaultDescription} />
        <meta name="twitter:image" content={defaultImage} />
        <meta name="twitter:creator" content="@pncsofttech" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>
      <Component {...pageProps} />
    </MainLayout>
  );
}
