import React from "react";

const EditorPicks = ({ title }) => {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="border-t border-gray-300 flex-grow mr-4"></div>
      <h2 className="text-2xl font-bold text-center ">{title}</h2>
      <div className="border-t border-gray-300 flex-grow ml-4"></div>
    </div>
  );
};

export default EditorPicks;
