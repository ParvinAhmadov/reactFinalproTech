import React from "react";

const SmallCard = ({ image, category, title }) => {
  return (
    <div className="w-[411px]">
      <div className="relative w-full h-[228px] bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
        <img
          src={image}
          alt={category}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform "
        />
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
        <div className="absolute bottom-0 left-0 p-4 bg-transparent w-full text-white/45">
          <span className="text-white bg-[#3C3FDE] p-1 rounded font-bold uppercase">
            {category}
          </span>
        </div>
      </div>
      <div className="bg-white p-4 rounded-b-lg shadow group-hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <h4 className="text-lg font-bold text-gray-800 mt-2">{title}</h4>
      </div>
    </div>
  );
};

export default SmallCard;
