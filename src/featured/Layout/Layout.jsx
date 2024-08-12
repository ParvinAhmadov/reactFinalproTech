import React, { useState } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div>
      <Header
        className={`shadow-sm font-sans ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
