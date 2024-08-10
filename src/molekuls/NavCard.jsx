import React from 'react';

const NavCard = ({ title, date, image }) => {
  return (
    <div className="w-full rounded h-[280px] overflow-hidden">
      <img src={image} alt={title} className="w-full rounded-[8px] object-cover" />
      <div className="p-2 mt-2">
        <h3 className="text-[17px] font-bold mb-2 w-full">{title}</h3>
        <p className="text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default NavCard;
  