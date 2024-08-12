import React from "react";

const GadgetsContent = ({ title, author, date, description }) => {
  return (
    <div className="p-6">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">
        {author} • {date}
      </p>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href="#" className="text-blue-600 hover:text-blue-800">
        Read More
      </a>
    </div>
  );
};

export default GadgetsContent;
