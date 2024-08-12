import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const CardModal = ({
  isOpen,
  closeModal,
  modalContent,
  selectedCard,
  handleDelete,
  handleUpdate,
  handleAdd,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    author: "",
    date: "",
    image: "",
  });

  useEffect(() => {
    if (selectedCard && modalContent !== "add") {
      setFormData({
        title: selectedCard.title || "",
        category: selectedCard.category || "",
        author: selectedCard.author || "",
        date: selectedCard.date || "",
        image: selectedCard.image || "",
      });
    } else {
      setFormData({
        title: "",
        category: "",
        author: "",
        date: "",
        image: "",
      });
    }
  }, [selectedCard, modalContent]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modalContent === "edit" && selectedCard) {
      handleUpdate(selectedCard.id, formData);
    } else if (modalContent === "add") {
      handleAdd(formData);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="flex items-center justify-center h-screen w-screen"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div className="bg-white rounded-lg p-8 w-[90%] md:w-[500px]">
        <h2 className="text-xl font-bold mb-4">
          {modalContent === "edit"
            ? "Edit Card"
            : modalContent === "view"
            ? "View Card"
            : "Add New Card"}
        </h2>

        {modalContent === "view" && selectedCard && (
          <div>
            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              className="w-full h-auto mb-4 rounded-lg"
            />
            <p className="mb-4">
              <strong>Title:</strong> {selectedCard.title}
            </p>
            <p className="mb-4">
              <strong>Category:</strong> {selectedCard.category}
            </p>
            <p className="mb-4">
              <strong>Author:</strong> {selectedCard.author}
            </p>
            <p className="mb-4">
              <strong>Date:</strong> {selectedCard.date}
            </p>
          </div>
        )}

        {(modalContent === "edit" || modalContent === "add") && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Category
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Author
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
              <img
                src={formData.image}
                alt="Preview"
                className="w-full h-auto mt-4 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
          </form>
        )}

        {modalContent === "delete" && (
          <div>
            <p>Are you sure you want to delete this card?</p>
            <button
              onClick={() => handleDelete(selectedCard.id)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            >
              Confirm Delete
            </button>
          </div>
        )}

        <button
          onClick={closeModal}
          className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default CardModal;
