import React from "react";
import { FaPlay } from "react-icons/fa";

const MediumVideoCard = ({ imageSrc, title }) => {
  return (
    <div className="relative w-[287px] h-[191px] bg-black rounded-lg overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="p-2 bg-black bg-opacity-50 rounded-full border-2 border-white">
          <FaPlay className="text-white text-sm" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-2 bg-black bg-opacity-70 text-white text-sm font-semibold">
        {title}
      </div>
    </div>
  );
};

export default MediumVideoCard;
