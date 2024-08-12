import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SubscribeForm = () => {
  return (
    <div className=" p-6 space-y-4">
      <div className="flex justify-center">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-blue-600 text-4xl mb-4"
        />
      </div>

      <h3 className="text-xl font-bold">Subscribe to Updates</h3>
      <p className="text-gray-600">
        Get the latest creative news from FooBar about art, design and business.
      </p>
      <input
        type="email"
        placeholder="Your email address..."
        className="w-full px-4 py-2 border rounded-lg"
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
        Subscribe
      </button>
      <div className="text-gray-400 text-xs">
        <input type="checkbox" className="mr-2" /> By signing up, you agree to
        the our terms and our Privacy Policy agreement.
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-bold mb-4">Popular Now</h4>
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600 mr-4">1</span>
            <div>
              <p className="text-sm font-semibold">
                Popular New Xbox Game Pass Game Being Review Bombed With “0s”
              </p>
              <p className="text-xs text-gray-500">
                Shane Doe • Jan 14, 2021 • 7,796 Views
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600 mr-4">2</span>
            <div>
              <p className="text-sm font-semibold">
                Samsung is Developing Bright MicroLED on Displays for AR
                Headsets
              </p>
              <p className="text-xs text-gray-500">
                Shane Doe • Jan 14, 2021 • 6,916 Views
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600 mr-4">3</span>
            <div>
              <p className="text-sm font-semibold">
                Warner Bros. Games Announces Mortal Kombat: Onslaught
              </p>
              <p className="text-xs text-gray-500">
                Shane Doe • Jan 14, 2021 • 5,123 Views
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
