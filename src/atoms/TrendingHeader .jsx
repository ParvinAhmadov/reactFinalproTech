import React from 'react';

const TrendingHeader = () => {
  return (
    <div className="flex items-center mb-6">
      <h4 className="text-[24px] font-bold text-white">
        Trending Videos
      </h4>
      <div className="flex-grow ml-4 h-[2px] bg-gray-700"></div> 
    </div>
  );
};

export default TrendingHeader;
