import React from 'react';
import PageHeader from '../../../components/common/PageHeader';

const MobileAppDevelopment = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Mobile App Development" 
        description="Custom mobile applications for iOS and Android platforms"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="service-card p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">iOS Development</h3>
          <p>Native iOS applications built with Swift and SwiftUI for a seamless user experience on Apple devices.</p>
        </div>

        <div className="service-card p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Android Development</h3>
          <p>Feature-rich Android applications using Kotlin and Jetpack Compose to reach the largest mobile user base.</p>
        </div>

        <div className="service-card p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Cross-Platform Solutions</h3>
          <p>Cost-effective app development with React Native and Flutter to target multiple platforms with a single codebase.</p>
        </div>

        <div className="service-card p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">App Maintenance & Updates</h3>
          <p>Ongoing support, feature updates, and compatibility maintenance for evolving mobile platforms.</p>
        </div>
      </div>
    </div>
  );
};

export default MobileAppDevelopment;
