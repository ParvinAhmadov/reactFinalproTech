import React from 'react';
import GagetsSmallCard from '../../atoms/GadgetsSmallCard';
import GadgetsSection from '../../atoms/GadgetsSection';

const Gadgets = () => {
  return (
    <div className="container mx-auto max-w-7xl py-8 flex flex-col md:flex-row gap-8">
      <div className="flex-1 space-y-8">
        <GadgetsSection />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GagetsSmallCard
            imageSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_422797426_xl-2015-1-300x199.jpg"
            title="Braun Series 7 Electric Shaver Review: Quality at a Good Price"
            date="Jan 13, 2021"
          />
          <GagetsSmallCard 
            imageSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_443469058_xl-2015-1-300x203.jpg"
            title="Google Pixel 7, iPhone 14 Compared: Check Out 5 Major Differences"
            date="Jan 13, 2021"
          />
          <GagetsSmallCard 
            imageSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/laurens-derks-h0tMHMyfr9A-unsplash-300x199.jpg"
            title="Why Apple Should Skip The MacBook Pro Launch"
            date="Jan 12, 2021"
          />
          <GagetsSmallCard 
            imageSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/youssef-sarhan-tze1kKj7Lgg-unsplash-1-300x191.jpg"
            title="The Famous Dyson Bladeless Fan is On Sale at Walmart"
            date="Jan 12, 2021"
          />
              <GagetsSmallCard 
            imageSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_430988634_xl-2015-4-300x208.jpg"
            title="The Famous Dyson Bladeless Fan is On Sale at Walmart"
            date="Jan 12, 2021"
          />
              <GagetsSmallCard 
            imageSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/light-fun-technology-neon-woman-enjoy-headset-happy-virtual-vr_t20_zWNmJX-1-300x201.jpg"
            title="The Famous Dyson Bladeless Fan is On Sale at Walmart"
            date="Jan 12, 2021"
          />
        </div>
      </div>

   
    </div>
  );
};

export default Gadgets;
