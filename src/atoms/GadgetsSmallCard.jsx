import React from 'react';

const GagetsSmallCard = ({ imageSrc, title, date,author }) => {
  return (
    <div className="flex items-center gap-4  p-4 rounded-lg">
        <div className="relative w-[123px] h-[82px] flex-shrink-0">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover rounded-lg"
      />
    
    </div>
    <div className="flex flex-col justify-center">
      <h3 className="text-black text-sm font-semibold leading-tight">{title}</h3>
      <div className="text-gray-400 text-xs mt-1">
        <p>{author}</p>
        <p>{date}</p>
      </div>
    </div>
  
  </div>
  );
};

export default GagetsSmallCard;
