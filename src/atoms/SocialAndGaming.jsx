import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaPinterestP, FaTelegramPlane } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const SocialAndGaming = () => {
  return (
    <div className=" p-6 space-y-4">
      <div className="mt-8 border-2 p-6 rounded shadow-lg">
        <h4 className="text-lg font-bold mb-4 ">We're Social</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center px-2 py-3 border-2 justify-center border-gray-200 shadow">
           
            <div className="ml-4 flex items-center gap-2 justify-center">
              <div className="text-blue-600">
                <FaFacebookF />
              </div>
              <div>
                <p className="text-sm font-bold mr-3">1.1K</p>
                <p className="text-xs text-gray-500 mr-3">Facebook</p>
              </div>
            </div>
          </div>
          <div className="flex items-center px-2 py-3 border-2 justify-center border-gray-200 shadow">
          
                      <div className="ml-4 flex items-center gap-2 justify-center">
                          <div className="font-bold">
                          <BsTwitterX/>

                          </div>
                          <div>
              <p className="text-sm font-bold mr-3">68.9K</p>
                              <p className="text-xs text-gray-500 mr-3">Twitter</p>
                              </div>
            </div>
          </div>
          <div className="flex items-center px-2 py-3 border-2 justify-center border-gray-200 shadow">
           
                      <div className="ml-4 flex items-center gap-2 justify-center">
                          <div className="text-red-600"><FaPinterestP />
                          </div>
                          <div>
              <p className="text-sm font-bold mr-3">10.7K</p>
                              <p className="text-xs text-gray-500 mr-3">Pinterest</p>
                              </div>
            </div>
          </div>
          <div className="flex items-center px-2 py-3 border-2 justify-center border-gray-200 shadow">
            
                      <div className="ml-4 flex items-center gap-2 justify-center">
                          <div className="text-pink-600"><FaSquareInstagram />
                          </div>
                          <div>
              <p className="text-sm font-bold mr-3">46.4K</p>
                              <p className="text-xs text-gray-500 mr-3">Instagram</p>
                              </div>
            </div>
          </div>
          <div className="flex items-center px-2 py-3 border-2 justify-center border-gray-200 shadow">
          
                      <div className="ml-4  flex items-center gap-2 justify-center">
                          <div className="text-blue-600"><FaTelegramPlane />
                          </div>
              <p className="text-sm font-bold mr-3">Telegram</p>
            </div>
          </div>
          <div className="flex items-center px-2 py-3 border-2 justify-center border-gray-200 shadow">
           
                      <div className="ml-4 flex items-center gap-2 justify-center">
                          <div className="text-green-600"><IoLogoWhatsapp />
                          </div>
              <p className="text-sm font-bold mr-3">WhatsApp</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-bold mb-4 mt-8">Gaming Zone</h4>
        <div className="space-y-4">
          <div className="flex flex-col gap-2 items-center">
            <img
              src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_422755408_xl-2015-1-450x225.jpg"
              alt="Gaming"
              className="w-25 h-25 rounded-lg mr-4 object-cover"
            />
            <div>
              <p className="text-lg font-semibold">
                PS5 vs Xbox Series XS vs Switch Launch Sales Comparison
              </p>
              <p className="text-xs mt-1 text-gray-500">Shane Doe • Sep 8, 2020</p>
            </div>
                  </div>
                  <div className="flex gap-2 items-center">
            <img
              src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/yasin-hasan-PU1uYnZrAL0-unsplash-450x300.jpg"
              alt="Gaming"
              className="w-14 h-14 rounded-lg mr-4 object-cover"
            />
            <div>
              <p className="text-sm font-semibold">
              New Oculus VR Kills IRL If Your Game Character Dies              </p>
              <p className="text-xs mt-1 text-gray-500">Shane Doe • Sep 8, 2020</p>
            </div>
                  </div>
                  <div className="flex gap-2 items-center">
            <img
              src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/man-with-glasses-of-virtual-reality-nominated_t20_ZYvEBR-450x314.jpg"
              alt="Gaming"
              className="w-14 h-14 rounded-lg mr-4 object-cover"
            />
            <div>
              <p className="text-sm font-semibold">
              The Nintendo Switch Can’t Seem To Handle Pokémon            </p>
              <p className="text-xs mt-1 text-gray-500">Shane Doe • Sep 8, 2020</p>
            </div>
                  </div>
                  
        </div>
      </div>
    </div>
  );
};

export default SocialAndGaming;
