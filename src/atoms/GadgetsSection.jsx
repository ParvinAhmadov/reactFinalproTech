import React from "react";
import GadgetsLargeCard from "./GadgetsLargeCard";
import GadgetsContent from "./GadgetsContent";
import TrendingHeader from "./TrendingHeader ";

const GadgetsSection = () => {
  return (
    <div>
      <TrendingHeader textColor="text-black" title="New Gadgets" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GadgetsLargeCard
          imageSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-768x334.jpg"
          category="Gadgets"
        />
        <GadgetsContent
          title="Oculus Founder Makes a VR Headset That Can Literally Kill You"
          author="Shane Doe"
          date="Jan 13, 2021"
          description="To understand the new smart watched and other pro devices of recent focus, we should..."
        />
      </div>
    </div>
  );
};

export default GadgetsSection;
