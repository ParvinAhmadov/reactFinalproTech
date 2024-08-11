import React from "react";
import { FaPlay } from "react-icons/fa";

const SmallVideoCard = ({ imageSrc, title, author, date }) => {
  return (
    <div className="flex items-center gap-4 bg-[#111129] p-4 rounded-lg">
      <div className="flex flex-col justify-center">
        <h3 className="text-white text-sm font-bold leading-tight">{title}</h3>
        <div className="text-gray-400 text-xs mt-1">
          <p>{author}</p>
          <p>{date}</p>
        </div>
      </div>
      <div className="relative w-[123px] h-[82px] flex-shrink-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-2 bg-black bg-opacity-50 rounded-full border-2 border-white">
            <FaPlay className="text-white text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallVideoCard;
