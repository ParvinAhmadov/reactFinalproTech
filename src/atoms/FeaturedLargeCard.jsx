import React from 'react';

const FeaturedLargeCard = ({ image, category, title, author, date, desrp, authorImage, rating }) => {
  return (
    <div className="relative w-full bg-[#0D0D25] rounded-lg overflow-hidden group cursor-pointer flex">
      <div className="w-1/2 p-6 m-20">
        <div className="text-white bg-[#AB07AB] p-2 text-sm rounded mb-2 font-semibold uppercase inline-block">
          {category}
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <div className="flex items-center gap-2">
          <img className='w-4 h-4 rounded-full' src={authorImage} alt={author} />
          <p className="text-gray-400">By {author}</p>
          <span className="ml-2 text-gray-400">• {date}</span>
        </div>
        <p className='text-gray-600'>{desrp}</p>
      </div>
      <div className="relative w-1/2">
        <img
          src={image}
          alt={category}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:opacity-70"
        />
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white p-1 rounded-full text-sm font-bold text-black border">
          {rating}
        </div>
      </div>
    </div>
  );
};

export default FeaturedLargeCard;
