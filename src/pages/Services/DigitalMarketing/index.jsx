import React from 'react';
import PageHeader from '../../../components/common/PageHeader';

const DigitalMarketing = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Digital Marketing Services" 
        description="Data-driven strategies to grow your online presence"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="service-card p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Search Engine Optimization</h3>
          <p>Improving your website's visibility in search results to drive organic traffic and generate quality leads.</p>
        </div>

        <div className="service-card p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Social Media Marketing</h3>
          <p>Building your brand and engaging with customers across relevant social platforms to increase awareness and loyalty.</p>
        </div>

        <div className="service-card p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Content Marketing</h3>
          <p>Creating valuable, relevant content that attracts and retains your target audience while driving profitable customer action.</p>
        </div>

        <div className="service-card p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">PPC Advertising</h3>
          <p>Managing paid search and social campaigns to maximize ROI and achieve your specific marketing objectives.</p>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
