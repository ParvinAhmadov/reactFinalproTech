import React, { useState } from "react";
import { FaBars, FaChevronDown, FaSearch } from "react-icons/fa";
import { MdOutlineModeNight, MdOutlineWbSunny } from "react-icons/md";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import NavCard from "../../atoms/NavCard";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="bg-white shadow-sm font-sans">
      <div className="container mx-auto max-w-7xl flex justify-around items-center p-4">
        <div className="items-center flex">
          <button onClick={toggleSidebar} className="text-xl text-gray-800">
            <FaBars />
          </button>
          <div className="flex mr-6">
            <Link to="/homepage" className="bg-white">
              <img
                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/1techblog-logo@2x.png"
                alt="TECHBLOG"
                className="h-10 ml-4"
              />
            </Link>
          </div>
          <nav className="flex space-x-6 text-[16px]">
            <a className="text-black font-bold cursor-pointer">Home </a>
            <a className="text-black font-bold cursor-pointer flex items-center gap-2">
              Features <FaChevronDown className="text-[10px]" />
            </a>
            <div className="relative group">
              <a className="text-black font-bold pb-[31%] group-hover:border-b-2 group-hover:border-blue-700 cursor-pointer">
                Technology
              </a>
              <div className="absolute transform-translate-y-[50%] transform -translate-x-[50%] top-full mt-[29%] p-4 w-[1100px] flex space-x-4 bg-white shadow-lg ml-[135%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1000] group-hover:pointer-events-auto">
                <NavCard
                  date="Mar 10, 2022"
                  image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-1200x682.jpg"
                  title="Is the Hyperloop Doomed? What Elon Musk’s Latest Setback Really Means"
                />
                <NavCard
                  date="Mar 10, 2022"
                  image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy_loz-3vVzdb8KKIw-unsplash-450x300.jpg"
                  title="The Best Early Black Friday Deals on Gaming Laptops and Accessories"
                />
                <NavCard
                  date="Mar 10, 2022"
                  image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-bogdan-glisik-1661469-1-450x390.jpg"
                  title="The Best Early Black Friday Deals on Gaming Laptops and Accessories"
                />
                <NavCard
                  date="Mar 10, 2022"
                  image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-luis-quintero-1787236-450x300.jpg"
                  title="The Best Early Black Friday Deals on Gaming Laptops and Accessories"
                />
                <NavCard
                  date="Mar 10, 2022"
                  image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/shubham-s-web3-aCqAjF3TRf4-unsplash-450x253.jpg"
                  title="The Best Early Black Friday Deals on Gaming Laptops and Accessories"
                />
              </div>
            </div>
            <Link
              to={"/gadgetspage"}
              className="text-black font-bold cursor-pointer flex items-center gap-2"
            >
              Gadgets <FaChevronDown className="text-[10px]" />
            </Link>
            <a
              href="#"
              className="text-black font-bold cursor-pointer flex items-center gap-2"
            >
              Phones <FaChevronDown className="text-[10px]" />
            </a>
            <a href="#" className="text-black font-bold cursor-pointer ">
              Buy Theme
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-[12px] font-semibold bg-[#3C3FDE] px-4 py-2 text-white rounded-lg hover:bg-black transition duration-300 ease-in-out">
            SUBSCRIBE
          </button>
          <div className="hidden md:flex space-x-2 items-center">
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <MdOutlineWbSunny className="text-[18px] text-yellow-500" />
              ) : (
                <MdOutlineModeNight className="text-[18px] text-gray-700" />
              )}
            </button>
            <FaSearch
              onClick={toggleSearch}
              className="text-[18px] text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
            />
          </div>
        </div>

        {isSearchOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 transition duration-500  ease-in-out">
            <div className="text-white text-xl">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-b border-white outline-none text-center w-full max-w-md text-2xl"
                autoFocus
              />
            </div>
            <button
              onClick={toggleSearch}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              &times;
            </button>
          </div>
        )}
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Header;
