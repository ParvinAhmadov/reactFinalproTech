import React from "react";
import { FaInstagram, FaPinterestP } from "react-icons/fa";
import { GiFlame } from "react-icons/gi";
import { ImFacebook } from "react-icons/im";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className="bg-[#0F0F11] text-white py-10 h-[490px]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[15px] font-bold mb-4">MOST POPULAR</h4>
              <ul className="space-y-4">
                <li className="flex items-center w-[380px] h-[94px] border-b-2 border-gray-600 pb-[10px]">
                  <img
                    src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/kamil-s-SuPAbuuK7f4-unsplash-150x100.jpg"
                    alt="Thumbnail 1"
                    className="w-[97px] h-[75px] mr-4 object-cover rounded-lg"
                  />
                  <div className="w-[265px] h-[71px] flex flex-col justify-between">
                    <h5 className="font-semibold text-[14px] hover:text-[#2A2C9B] transition duration-300 cursor-pointer">
                      Popular New Xbox Game Pass Game Being Review Bombed With
                      "Os"
                    </h5>
                    <div className="flex justify-start gap-4 text-[12px] items-center">
                      <span className="text-gray-400">Jan 14, 2021</span>
                      <span className="flex items-center gap-1 text-[#FF0000]">
                        {" "}
                        <GiFlame />
                        7,796 Views
                      </span>
                    </div>
                  </div>
                </li>
                <li className="flex items-center w-[380px] h-[94px] border-b-2 border-gray-600 pb-[16px]">
                  <img
                    src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/jonathan-kemper-poSms2EzfNY-unsplash-150x100.jpg"
                    alt="Thumbnail 1"
                    className="w-[97px] h-[75px] mr-4 object-cover rounded-lg"
                  />
                  <div className="w-[265px] h-[71px] flex flex-col gap-[2px] justify-between">
                    <h5 className="font-semibold text-[14px] hover:text-[#2A2C9B] transition duration-300 cursor-pointer">
                      Samsung is Developing Bright MicroLED on Displays for AR
                      Headsets
                    </h5>
                    <div className="flex justify-start gap-4 text-[12px] items-center">
                      <span className="text-gray-400">Jan 14, 2021</span>
                      <span className="flex items-center gap-1 text-[#FF0000]">
                        {" "}
                        <GiFlame />
                        6,716 Views
                      </span>
                    </div>
                  </div>
                </li>
                <li className="flex items-center w-[380px] h-[94px]">
                  <img
                    src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/0247d91565b69ed9ddba4ec59ac97963-1-150x86.jpg"
                    alt="Thumbnail 1"
                    className="w-[97px] h-[75px] mr-4 object-cover rounded-lg"
                  />
                  <div className="w-[265px] h-[71px] flex flex-col justify-between">
                    <h5 className="font-semibold text-[14px] hover:text-[#2A2C9B] transition duration-300 cursor-pointer">
                      Warner Bros. Games Announces Mortal Kombat: Onslaught
                    </h5>
                    <div className="flex justify-start gap-4 text-[12px] items-center ">
                      <span className="text-gray-400">Jan 14, 2021</span>
                      <span className="flex items-center gap-1 text-[#FF0000]">
                        {" "}
                        <GiFlame />
                        7,796 Views
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[15px] font-bold mb-4">Our Picks</h4>
              <ul className="space-y-4">
                <li className="flex items-center w-[380px] h-[94px] border-b-2 border-gray-600 pb-[10px]">
                  <img
                    src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/thisisengineering-raeng-a7A9O5htrKs-unsplash-150x100.jpg"
                    alt="Thumbnail 1"
                    className="w-[97px] h-[75px] mr-4 object-cover rounded-lg"
                  />
                  <div className="w-[265px] h-[71px] flex flex-col justify-between">
                    <h5 className="font-semibold text-[14px] hover:text-[#2A2C9B] transition duration-300 cursor-pointer">
                      Game Development This Week: Save On Essential Tools and
                      More
                    </h5>
                    <div className="flex justify-start gap-4 text-[12px] items-center text-gray-400">
                      <span>Nov 19, 2022</span>
                    </div>
                  </div>
                </li>
                <li className="flex items-center w-[380px] h-[94px] border-b-2 border-gray-600 pb-[10px]">
                  <img
                    src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-150x85.jpg"
                    alt="Thumbnail 1"
                    className="w-[97px] h-[75px] mr-4 object-cover rounded-lg"
                  />
                  <div className="w-[265px] h-[71px] flex flex-col justify-between">
                    <h5 className="font-semibold text-[14px] hover:text-[#2A2C9B] transition duration-300 cursor-pointer">
                      Is the Hyperloop Doomed? What Elon Musk’s Latest Setback
                      Really Means
                    </h5>
                    <div className="flex justify-start gap-4 text-[12px] items-center text-gray-400">
                      <span>Mar 10, 2022</span>
                    </div>
                  </div>
                </li>
                <li className="flex items-center w-[380px] h-[94px]">
                  <img
                    src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy_loz-3vVzdb8KKIw-unsplash-150x100.jpg"
                    alt="Thumbnail 1"
                    className="w-[97px] h-[75px] mr-4 object-cover rounded-lg"
                  />
                  <div className="w-[265px] h-[71px] flex flex-col justify-between">
                    <h5 className="font-semibold text-[14px] hover:text-[#2A2C9B] transition duration-300 cursor-pointer">
                      The Best Early Black Friday Deals on Gaming Laptops and
                      Accessories
                    </h5>
                    <div className="flex justify-start gap-4 text-[12px] items-center text-gray-400">
                      <span>Mar 10, 2022</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border-4 border-[#444444] h-[23rem] rounded p-1">
              <div className="text-center mb-8 border-4 border-[#444444] p-12 rounded">
                <h2 className="text-2xl mb-2 font-bold">
                  Subscribe to Updates
                </h2>
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
          </div>
        </div>
      </div>

      <footer className="bg-black text-white py-6 h-[266px]">
        <div className="container mx-auto max-w-7xl px-4 mt-12">
          <div className="flex flex-col justify-between gap-6 items-center">
            <div className="flex justify-center items-center gap-2 mt-[1rem]">
              <a className="text-[17px] bg-[#1F1F1F] p-[10px] rounded-full hover:text-[#2A2C9B] transition duration-300 cursor-pointer">
                <ImFacebook />
              </a>
              <a className="text-[17px] bg-[#1F1F1F] p-[10px] rounded-full hover:text-[#2A2C9B] transition duration-300 cursor-pointer">
                <RiTwitterXFill />
              </a>
              <a className="text-[17px] bg-[#1F1F1F] p-[10px] rounded-full hover:text-[#2A2C9B] transition duration-300 cursor-pointer">
                <FaInstagram />
              </a>
              <a className="text-[17px] bg-[#1F1F1F] p-[10px] rounded-full hover:text-[#2A2C9B] transition duration-300 cursor-pointer">
                <FaPinterestP />
              </a>
            </div>

            <div className="text-center text-[13px] flex gap-4 text-white font-semibold mt-4 md:mt-0 ">
              <a className=" hover:text-gray-400 transition duration-300 cursor-pointer">
                HOME
              </a>
              <a className=" hover:text-gray-400 transition duration-300 cursor-pointer">
                PHONES
              </a>
              <a className=" hover:text-gray-400 transition duration-300 cursor-pointer">
                ABOUT
              </a>
              <a className=" hover:text-gray-400 transition duration-300 cursor-pointer">
                CONTACT
              </a>
            </div>
            <div className="text-[13px]">
              <p className="text-[#777777]">
                © 2024 ThemeSphere. Designed by{" "}
                <span className="text-gray-300">ThemeSphere</span>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
