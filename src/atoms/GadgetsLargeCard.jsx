import React from 'react';

const GadgetsLargeCard = ({ imageSrc, category, title, author, date, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <div className="text-purple-500 font-bold text-xs uppercase mb-2">{category}</div>
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{author} • {date}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href="#" className="text-blue-600 hover:text-blue-800">Read More</a>
      </div>
    </div>
  );
};

export default GadgetsLargeCard;
