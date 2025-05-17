import React from 'react';

const PageHeader = ({ title, description }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      {description && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
      )}
      <div className="w-24 h-1 bg-[#00FAA8] mx-auto mt-6"></div>
    </div>
  );
};

export default PageHeader;
