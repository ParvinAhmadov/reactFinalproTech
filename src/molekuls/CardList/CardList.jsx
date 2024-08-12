import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import EditorCard from '../../atoms/EditorCard';
import CardModal from '../../atoms/CardModal';
import SpinnerButton from '../../atoms/SpinnerButton';

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    fetch('http://localhost:3001/cards')
      .then(response => response.json())
      .then(data => {
        setCards(data);
        setIsFetching(false);
      })
      .catch(() => {
        toast.error('Failed to fetch cards.'); 
        setIsFetching(false);
      });
  }, []);

  const handleDelete = id => {
    setIsDeleting(true);
    fetch(`http://localhost:3001/cards/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      setCards(cards.filter(card => card.id !== id));
      toast.success('Card deleted successfully!'); 
      closeModal();
      setIsDeleting(false);
    })
    .catch(() => {
      toast.error('Failed to delete card.'); 
      setIsDeleting(false);
    });
  };

  const handleEdit = id => {
    setSelectedCard(cards.find(card => card.id === id));
    setModalContent('edit');
    setIsModalOpen(true);
  };

  const handleView = id => {
    setSelectedCard(cards.find(card => card.id === id));
    setModalContent('view');
    setIsModalOpen(true);
  };

  const handleUpdate = (id, updatedCard) => {
    setIsUpdating(true);
    fetch(`http://localhost:3001/cards/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCard),
    })
      .then(response => response.json())
      .then(() => {
        setCards(cards.map(card => (card.id === id ? { ...card, ...updatedCard } : card)));
        toast.success('Card updated successfully!'); 
        closeModal();
        setIsUpdating(false);
      })
      .catch(() => {
        toast.error('Failed to update card.'); 
        setIsUpdating(false);
      });
  };

  const handleAdd = (newCard) => {
    setIsAdding(true);
    fetch('http://localhost:3001/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCard),
    })
      .then(response => response.json())
      .then(addedCard => {
        setCards([...cards, addedCard]);
        toast.success('Card added successfully!'); 
        closeModal();
        setIsAdding(false);
      })
      .catch(() => {
        toast.error('Failed to add new card.'); 
        setIsAdding(false);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
    setModalContent(null);
  };

  const openAddModal = () => {
    setModalContent('add');
    setIsModalOpen(true);
  };

  return (
    <>
      <ToastContainer /> 

      <div className="flex justify-end items-center mb-4">
        <SpinnerButton 
          isLoading={isAdding} 
          onClick={openAddModal}
        >
          Add New Card
        </SpinnerButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-[2rem] mr-[1rem]">
        {isFetching ? (
          <div className="col-span-full text-center">
            <SpinnerButton isLoading={true}>Loading Cards...</SpinnerButton>
          </div>
        ) : (
          cards.map((card, index) => (
            <EditorCard 
              key={card.id} 
              card={{...card, number: index + 1}} 
              onEdit={handleEdit} 
              onDelete={handleDelete} 
              onView={handleView} 
            />
          ))
        )}
      </div>
      
      <CardModal 
        isOpen={isModalOpen} 
        closeModal={closeModal} 
        modalContent={modalContent} 
        selectedCard={selectedCard} 
        handleDelete={handleDelete} 
        handleUpdate={handleUpdate}
        handleAdd={handleAdd}  
      />
    </>
  );
};

export default CardList;
