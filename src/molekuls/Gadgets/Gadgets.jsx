import React from 'react';
import NewGadgets from '../../atoms/NewGadgets';
import SubscribeForm from '../../atoms/SubscribeForm';
import GadgetsLargeCard from '../../atoms/GadgetsLargeCard';
import GagetsSmallCard from '../../atoms/GadgetsSmallCard';

const Gadgets = () => {
  return (
    <div className="container mx-auto max-w-7xl py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <GadgetsLargeCard 
            imageSrc="https://example.com/large-image.jpg"
            category="Gadgets"
            title="Oculus Founder Makes a VR Headset That Can Literally Kill You"
            author="Shane Doe"
            date="Jan 13, 2021"
            description="To understand the new smart watched and other pro devices of recent focus, we should..."
          />
        </div>

        <div>
          <NewGadgets title="New Gadgets" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <GagetsSmallCard
            imageSrc="https://example.com/small-image1.jpg"
            title="Braun Series 7 Electric Shaver Review: Quality at a Good Price"
            date="Jan 13, 2021"
          />
          <GagetsSmallCard 
            imageSrc="https://example.com/small-image2.jpg"
            title="Google Pixel 7, iPhone 14 Compared: Check Out 5 Major Differences"
            date="Jan 13, 2021"
          />
          <GagetsSmallCard 
            imageSrc="https://example.com/small-image3.jpg"
            title="Why Apple Should Skip The MacBook Pro Launch"
            date="Jan 12, 2021"
          />
          <GagetsSmallCard 
            imageSrc="https://example.com/small-image4.jpg"
            title="The Famous Dyson Bladeless Fan is On Sale at Walmart"
            date="Jan 12, 2021"
          />
        </div>

        <div className="space-y-4 sticky top-0">
          <SubscribeForm />
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
