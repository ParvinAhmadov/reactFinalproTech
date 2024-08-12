import React, { useRef, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { RiTwitterXFill } from "react-icons/ri";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      toggleSidebar();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>

      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 w-[355px] h-screen p-4 overflow-y-auto bg-black text-white custom-scrollbar transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-0 right-0 bg-[#444444] p-1"
        >
          <AiOutlineClose />
        </button>
        <img
          src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/techblog-logo-dark@2x.png"
          alt="TechBlog Logo"
          className="mx-auto mb-6 mt-6 w-[207px] h-[40px]"
        />
        <form>
          <div className="border-4 border-[#444444] h-[27.5rem] rounded p-1">
            <div className="text-center mb-8 border-4 border-[#444444] p-12 rounded">
              <h2 className="text-2xl mb-2 font-bold">Subscribe to Updates</h2>
              <p className="text-gray-400 text-sm font-bold">
                Get the latest creative news from FooBar about art, design and
                business.
              </p>
              <input
                type="email"
                placeholder="Your email address..."
                className="mt-4 px-4 py-2 w-full text-[#BBBBBB] bg-[#1A1A1A] rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="mt-4 w-full px-4 py-2 bg-[#3C3FDE] rounded-sm hover:bg-[#1b1b1b] transition duration-300 focus:outline-none">
                Subscribe
              </button>
              <div className="mt-4 text-sm text-[#8F8F8F]">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms">
                  By signing up, you agree to the our terms and our Privacy
                  Policy agreement.
                </label>
              </div>
            </div>
          </div>
        </form>

        <div className="mt-8">
          <h3 className="text-xl font-bold">What's Hot</h3>
          <ul className="space-y-4 mt-4">
            <li className="flex items-center">
              <img
                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/thisisengineering-raeng-a7A9O5htrKs-unsplash-150x100.jpg"
                alt="Thumbnail 1"
                className="w-[93px] h-[72px] rounded-lg mr-4"
              />
              <div>
                <h4 className="font-semibold text-[15px] text-[#ECECEC] hover:text-[#2A2C9B] transition duration-300 cursor-pointer">
                  Game Development This Week: Save On Essential Tools and More
                </h4>
                <p className="text-gray-400 text-[12px]">Nov 19, 2022</p>
              </div>
            </li>
            <li className="flex items-center">
              <img
                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-1536x873.jpg"
                alt="Thumbnail 2"
                className="w-[93px] h-[72px] rounded-lg mr-4"
              />
              <div>
                <h4 className="font-bold text-[15px] text-[#ECECEC] hover:text-[#2A2C9B] transition duration-300 cursor-pointer">
                  Is the Hyperloop Doomed? What Elon Musk's Latest
                </h4>
                <p className="text-gray-400 text-[12px]">Nov 19, 2022</p>
              </div>
            </li>
            <li className="flex items-center">
              <img
                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy_loz-3vVzdb8KKIw-unsplash-450x300.jpg"
                alt="Thumbnail 2"
                className="w-[93px] h-[72px] rounded-lg mr-4"
              />
              <div>
                <h4 className="font-bold text-[15px] text-[#ECECEC] hover:text-[#2A2C9B] transition duration-300 cursor-pointer">
                  Is the Hyperloop Doomed? What Elon Musk's Latest
                </h4>
                <p className="text-gray-400 text-[12px]">Nov 19, 2022</p>
              </div>
            </li>
          </ul>
          <div className="flex justify-center items-center gap-2 mt-[3rem]">
            <a className="text-[17px] bg-[#1F1F1F] p-[10px] rounded-full hover:text-[#2A2C9B] transition duration-300 cursor-pointer">
              <ImFacebook />
            </a>
            <a className="text-[17px] bg-[#1F1F1F] p-[10px] rounded-full hover:text-[#2A2C9B] transition duration-300 cursor-pointer">
              <RiTwitterXFill />
            </a>
            <a className="text-[17px] bg-[#1F1F1F] p-[10px] rounded-full hover:text-[#2A2C9B] transition duration-300 cursor-pointer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
