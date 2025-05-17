import React from 'react';
import PageHeader from '../../../components/common/PageHeader';

const UIUXDesign = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="UI/UX Design Services" 
        description="Creating intuitive and engaging user experiences"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="service-card p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">User Research</h3>
          <p>Understanding your users through interviews, surveys, and analytics to inform design decisions.</p>
        </div>

        <div className="service-card p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Interface Design</h3>
          <p>Creating visually appealing, consistent, and branded user interfaces that enhance user engagement.</p>
        </div>

        <div className="service-card p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">User Experience Design</h3>
          <p>Crafting intuitive user journeys and workflows that maximize usability and customer satisfaction.</p>
        </div>

        <div className="service-card p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Usability Testing</h3>
          <p>Validating designs with real users to identify improvements and optimize the overall experience.</p>
        </div>
      </div>
    </div>
  );
};

export default UIUXDesign;
