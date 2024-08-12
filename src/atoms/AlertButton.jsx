import React from "react";

const AlertButton = ({ message, type = "error", onClose }) => {
  const alertStyles = {
    error: "bg-red-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-black",
  };

  return (
    <div
      className={`flex items-center justify-between ${alertStyles[type]} px-4 py-2 rounded mb-4`}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-4 bg-white text-black px-3 py-1 rounded"
      >
        Dismiss
      </button>
    </div>
  );
};

export default AlertButton;
