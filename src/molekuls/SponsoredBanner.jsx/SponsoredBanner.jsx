import React from "react";

const SponsoredBanner = ({ imageSrc, altText, linkUrl, label }) => {
  return (
    <div className="my-8">
      {label && (
        <div className="text-center text-sm text-gray-500 mb-2">{label}</div>
      )}
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block mx-auto w-full max-w-[970px] h-auto"
      >
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-auto  shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
        />
      </a>
    </div>
  );
};

export default SponsoredBanner;
