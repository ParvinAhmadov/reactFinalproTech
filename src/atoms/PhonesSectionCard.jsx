import React from "react";

const PhonesSectionCard = ({ image, category, title, author, date }) => {
  return (
    <div className="relative w-full h-[280px] bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={image}
          alt={category}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
      </div>
      <div className="absolute bottom-4 left-0 p-4 w-full text-white">
        <div className="text-white bg-[#AB07AB] p-1 text-xs rounded mb-2 font-semibold uppercase inline-block">
          {category}
        </div>
        <h2 className="text-lg font-bold bg-black p-1">{title}</h2>
        <div className="flex items-center mt-2">
          <p className="text-gray-400 text-xs">{`By ${author} • ${date}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhonesSectionCard;
