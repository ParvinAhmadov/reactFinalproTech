import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoCard = ({
  imageSrc,
  title1,
  title2,
  category,
  author,
  date,
  authorImage,
  size = "medium",
}) => {
  const sizeClasses =
    size === "large" ? "h-full" : size === "medium" ? "h-64" : "h-32";

  return (
    <div className={`relative ${sizeClasses}`}>
      <img
        src={imageSrc}
        alt={`${title1} ${title2}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
        <div className="p-4 bg-black bg-opacity-50 rounded-full border-2 border-white cursor-pointer">
          <FaPlay className="text-white text-2xl" />
        </div>
      </div>
      {size === "large" && (
        <div className="absolute bottom-[5rem] left-0 p-6 w-full h-[120px] text-white mb-8 ">
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
      )}
    </div>
  );
};

export default VideoCard;
