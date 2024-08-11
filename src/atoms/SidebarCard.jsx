import React from 'react';

const SidebarCard = ({ category, title, author, readTime, image }) => {
  return (
    <article className=" w-[340px] h-[135px] px-[20px] py-[10px] text-[#444444] font-inter text-[14px] flex items-center border-b border-gray-200">
      <div className="flex-1">
        <span className="text-[#7c5cff] font-bold text-[11px] uppercase text-xs">{category}</span>
        <h4 className="text-[17px] font-semibold mt-1 leading-tight hover:text-[#2A2C9B] transition-colors duration-300 cursor-pointer">
          {title}
        </h4>
        <div className="flex items-center mt-2 text-gray-500 text-xs">
          <span>{author}</span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
      </div>
      <div className="ml-4 relative w-[90px] h-[90px] cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-full h-full rounded-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 hover:opacity-70"
        />
        <div className="absolute inset-0 bg-white opacity-0 hover:opacity-30 transition-opacity duration-300 ease-in-out rounded-full"></div>
      </div>
    </article>
  );
};

export default SidebarCard;
