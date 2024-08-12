import React from "react";

const NavCard = ({ title, date, image }) => {
  return (
    <div className="w-full rounded h-[270px] overflow-hidden">
      <div className="relative w-full h-[116px] rounded-[8px] overflow-hidden cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 hover:opacity-70"
        />
        <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300 ease-in-out"></div>
      </div>
      <div className="p-2 mt-2">
        <h3 className="text-[15px] font-semibold mb-2 w-full hover:text-[#2A2C9B] transition duration-300 cursor-pointer">
          {title}
        </h3>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>
    </div>
  );
};

export default NavCard;
