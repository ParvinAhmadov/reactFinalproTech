import React from 'react';

const NewGadgets = ({ title }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <a href="#" className="text-blue-600 text-sm hover:underline">See All</a>
    </div>
  );
};

export default NewGadgets;
