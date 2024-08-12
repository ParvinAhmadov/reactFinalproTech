import React from 'react';

const GadgetsLargeCard = ({ imageSrc, category }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-[848px] mx-auto relative">
      <img
        src={imageSrc}
        className="w-full h-[282px] object-cover"
      />
      <div className="absolute left-0 bottom-0 p-6  bg-opacity-50 ">
        <div className="text-white font-bold text-xs uppercase mb-2 rounded bg-purple-500 p-2">{category}</div>
      </div>
    </div>
  );
};

export default GadgetsLargeCard;
