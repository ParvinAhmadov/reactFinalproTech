import React from 'react';

const EditorCard = ({ card, onEdit, onDelete, onView }) => {
  // Dinamik sınıf adları belirleme
  const categoryClass = card.category === 'Gadgets' ? 'bg-purple-600' : 'bg-blue-600';

  return (
    <div className="rounded-lg overflow-hidden relative mb-4">
      <div className="relative ">
        <img src={card.image} alt={card.title} className="w-full h-48 object-cover rounded-lg   bg-white hover:opacity-70 cursor-pointer transition-opacity duration-300 ease-in-out "/>

        <span className={`absolute bottom-2 left-2 text-xs uppercase text-white font-semibold  px-2 py-1 rounded ${categoryClass}`}>
          {card.category}
        </span>

        <div className="absolute top-0 right-0 m-2 flex space-x-2">
          <button onClick={() => onView(card.id)} className="bg-blue-500 tfont-semibold text-white px-[15px] py-[2px] rounded">View</button>
          <button onClick={() => onEdit(card.id)} className="bg-yellow-500 font-semibold text-white px-[15px] py-[2px] rounded">Edit</button>
          <button onClick={() => onDelete(card.id)} className="bg-red-500 font-semibold text-white px-[15px] py-[2px] rounded">Delete</button>
        </div>
      </div>

      
      <div className="p-4 "> 
        <div className="flex items-center justify-start hover:text-[#2A2C9B] transition duration-300 cursor-pointer">
          <span className="text-4xl font-bold text-gray-300 mr-2 mb-6">{card.number}</span>
          <h3 className="text-[17px] font-bold flex-1">{card.title}</h3>
        </div>
        <p className="text-gray-600 text-[12px] mt-1 ml-7">{card.author} - {card.date}</p>
      </div>
    </div>
  );
};

export default EditorCard;
