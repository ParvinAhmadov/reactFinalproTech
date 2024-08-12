import React from 'react';

const TrendingHeader = ({ title, textColor = 'text-white' }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className={`text-2xl font-bold ${textColor}`}>{title}</h2> 
      <div className="flex-grow ml-4 border-b-2 border-gray-300"></div>
    </div>
  );
};

export default TrendingHeader;
