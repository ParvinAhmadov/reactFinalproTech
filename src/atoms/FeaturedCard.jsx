import React from "react";

const FeaturedCard = ({
  image,
  category,
  title1,
  title2,
  author,
  authorImage,
  date,
}) => {
  return (
    <div className="relative w-[874px] h-[480px] bg-gray-800 rounded-lg overflow-hidden group  cursor-pointer">
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={image}
          alt={category}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
      </div>
      <div className="absolute bottom-[5rem] left-0 p-6 w-full h-[120px] text-white mb-8">
        <div className="text-white bg-[#AB07AB] p-2 text-sm rounded mb-2 font-semibold uppercase inline-block">
          {category}
        </div>
        <h2 className="text-[29px] w-[639px] font-bold flex flex-col gap-2">
          <span className="block bg-black p-1">{title1}</span>
          <span className="block bg-black p-1">{title2}</span>
        </h2>
        <div className="flex items-center mt-2">
          <img
            src={authorImage}
            alt={author}
            className="w-5 h-5 rounded-full mr-2"
          />
          <div className="flex gap-2 text-sm">
            <p className="text-gray-400">{`By ${author} `}</p>
            <span> • {`${date}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
