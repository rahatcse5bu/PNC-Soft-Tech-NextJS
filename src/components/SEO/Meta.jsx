import Head from 'next/head';
import PropTypes from 'prop-types';

const Meta = ({ 
  title = 'PNC Soft Tech | Expert Web & Mobile App Development',
  description = 'PNC Soft Tech delivers high-quality web and mobile app development solutions with Flutter, React, Next.js and MERN stack technologies.',
  keywords = 'web development, mobile app development, flutter apps, react development, nextjs, MERN stack, software company, Bangladesh',
  ogImage = 'https://pncsoft.tech/og-image.jpg',
  ogType = 'website',
  canonical = '',
  children 
}) => {
  // Construct the canonical URL
  const siteUrl = 'https://pncsoft.tech';
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="PNC Soft Tech" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional head elements */}
      {children}
    </Head>
  );
};

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
  canonical: PropTypes.string,
  children: PropTypes.node,
};

export default Meta;
