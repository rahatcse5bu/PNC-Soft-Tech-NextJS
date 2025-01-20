import "../index.css";
import "../assets/styles/nav-bar.css";
import "../pages/AboutPage/PointSection/pointSection.css"; // Add your global CSS here
import MainLayout from "../Layout/MainLayout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <MainLayout>
        <Head>
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
      <Component {...pageProps} />
    </MainLayout>
  );
}
