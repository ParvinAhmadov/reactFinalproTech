import React, { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import routers from './router';
import { BeatLoader } from 'react-spinners'; 

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <BeatLoader color="#0800ff" />
      </div>
    );
  }

  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
};

export default App;
