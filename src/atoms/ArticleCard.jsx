import React from 'react';

const ArticleCard = ({ image, category, title, author,authorImage, date, description }) => {
  return (
    <div className="flex bg-white rounded-lg shadow-md overflow-hidden" style={{ width: '874px' }}>
      <div className="w-1/3">
        <img src={image} alt={category} className="w-full h-full object-cover" />
      </div>
      <div className="w-2/3 p-4">
        <div className="text-sm font-bold uppercase text-pink-500 mb-2">
          {category}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {title}
        </h3>
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <img 
            src={authorImage} 
            alt={author} 
            className="w-5 h-5 rounded-full mr-2" 
          />
          <span>{author}</span>
          <span className="mx-2">•</span>
          <span>{date}</span>
        </div>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
