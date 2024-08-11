import React from 'react';

const SubscribeForm = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
      <h3 className="text-xl font-bold">Subscribe to Updates</h3>
      <p className="text-gray-600">Get the latest creative news from FooBar about art, design and business.</p>
      <input
        type="email"
        placeholder="Your email address..."
        className="w-full px-4 py-2 border rounded-lg"
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Subscribe</button>
      <div className="text-gray-400 text-xs">
        <input type="checkbox" className="mr-2" /> By signing up, you agree to the our terms and our Privacy Policy agreement.
      </div>
    </div>
  );
};

export default SubscribeForm;
