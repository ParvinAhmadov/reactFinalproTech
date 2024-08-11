import React, { useEffect, useState } from 'react';
import EditorCard from '../../atoms/EditorCard';

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/cards')
      .then(response => response.json())
      .then(data => setCards(data));
  }, []);

  const handleDelete = id => {
    fetch(`http://localhost:3001/cards/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setCards(cards.filter(card => card.id !== id));
    });
  };

  const handleEdit = id => {
  };

  const handleView = id => {
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-[2rem] mr-[1rem] ">
      {cards.map((card, index) => (
        <EditorCard key={card.id} card={{...card, number: index + 1}} onEdit={handleEdit} onDelete={handleDelete} onView={handleView} />
      ))}
    </div>
  );
};

export default CardList;
