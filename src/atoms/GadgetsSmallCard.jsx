import React from 'react';

const GagetsSmallCard = ({ imageSrc, title, date }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
      <img
        src={imageSrc}
        alt={title}
        className="w-24 h-24 object-cover"
      />
      <div className="p-4">
        <h3 className="text-md font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-xs">{date}</p>
      </div>
    </div>
  );
};

export default GagetsSmallCard;
