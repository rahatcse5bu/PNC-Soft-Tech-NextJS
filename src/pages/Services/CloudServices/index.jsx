import React from 'react';
import PageHeader from '../../../components/common/PageHeader';

const CloudServices = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Cloud Services" 
        description="Scalable and reliable cloud solutions for modern businesses"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="service-card p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Cloud Migration</h3>
          <p>Seamlessly transitioning your existing infrastructure and applications to cloud-based solutions.</p>
        </div>

        <div className="service-card p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Cloud Architecture</h3>
          <p>Designing scalable, secure, and cost-effective cloud infrastructure tailored to your business requirements.</p>
        </div>

        <div className="service-card p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">DevOps Solutions</h3>
          <p>Implementing CI/CD pipelines and automation to streamline development and deployment processes.</p>
        </div>

        <div className="service-card p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Managed Cloud Services</h3>
          <p>Ongoing monitoring, optimization, and support for your cloud infrastructure to ensure reliability and performance.</p>
        </div>
      </div>
    </div>
  );
};

export default CloudServices;
