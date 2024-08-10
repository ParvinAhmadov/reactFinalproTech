import React, { useState } from 'react';
import { FaBars, FaChevronDown, FaSearch } from 'react-icons/fa';
import { MdOutlineModeNight } from 'react-icons/md';
import NavCard from '../../molekuls/NavCard';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
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
              <div className="absolute transform-translate-y-[50%] transform -translate-x-[50%] top-full mt-[29%] p-4 w-[1100px] flex space-x-4 bg-white shadow-lg ml-[135%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <NavCard
                date="Mar 10, 2022" 
                image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-1200x682.jpg" 
                title="The Best Early Black Friday Deals on Gaming Laptops and Accessories" 
              />
              <NavCard 
                date="Mar 10, 2022" 
                image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-1200x682.jpg" 
                title="The Best Early Black Friday Deals on Gaming Laptops and Accessories" 
              />
              <NavCard 
                date="Mar 10, 2022" 
                image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-1200x682.jpg" 
                title="The Best Early Black Friday Deals on Gaming Laptops and Accessories" 
              />
              <NavCard 
                date="Mar 10, 2022" 
                image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-1200x682.jpg" 
                title="The Best Early Black Friday Deals on Gaming Laptops and Accessories" 
                />
                   <NavCard 
                date="Mar 10, 2022" 
                image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-1200x682.jpg" 
                title="The Best Early Black Friday Deals on Gaming Laptops and Accessories" 
              />
              </div>
            </div>
            <Link to={"/gadgetspage"} className="text-black font-bold cursor-pointer flex items-center gap-2">
              Gadgets <FaChevronDown className="text-[10px]" />
            </Link>
            <a href="#" className="text-black font-bold cursor-pointer flex items-center gap-2">
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
            <MdOutlineModeNight className="text-[18px] text-gray-700 hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer" />
            <FaSearch className="text-[18px] text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer" />
          </div>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Header;
