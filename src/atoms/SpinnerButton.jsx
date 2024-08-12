import React from 'react';

const SpinnerButton = ({ isLoading, onClick, children, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-4 py-2 rounded ${className} ${isLoading ? 'bg-gray-400' : 'bg-blue-600 text-white'}`}
      disabled={isLoading}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5 mr-2 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
      ) : null}
      {children}
    </button>
  );
};

export default SpinnerButton;
