import React from "react";

const FeaturedSmallCard = ({ image, category, title, rating }) => {
  return (
    <div className="w-[411px]">
      <div className="relative w-full h-[228px] bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
        <img
          src={image}
          alt={category}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform "
        />
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
        <div className="absolute top-4 right-4 bg-white p-1 rounded-full text-sm font-bold text-black border">
          {rating}
        </div>
        <div className="absolute bottom-4 left-4 bg-[#3C3FDE] p-1 rounded font-bold uppercase text-white">
          {category}
        </div>
      </div>
      <div className="bg-white p-4 rounded-b-lg shadow group-hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <h4 className="text-[17px] font-bold text-gray-800 mt-2">{title}</h4>
      </div>
    </div>
  );
};

export default FeaturedSmallCard;
