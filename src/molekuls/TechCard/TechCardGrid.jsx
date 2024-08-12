import React from "react";
import FeaturedCard from "../../atoms/FeaturedCard";
import SmallCard from "../../atoms/SmallCard";
import SidebarCard from "../../atoms/SidebarCard";

const TechCardGrid = () => {
  return (
    <div className="container mx-auto p-[2rem]">
      <div className="grid grid-cols-1 lg:grid-cols-4 ">
        <div className="lg:col-span-3 space-y-4">
          <FeaturedCard
            image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_29247013_xl-2015-2-1024x683.jpg"
            category="Gadgets"
            title1="Save $25 on Philips Wired Headphone For A "
            title2="Great Sounding Over-Ear Headphone"
            author="Shane Doe"
            date="Jan 12, 2020"
            readTime="6 Mins Read"
            authorImage="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SmallCard
              image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/daniel-korpai-seLBnDRB6_M-unsplash-1-1-450x563.jpg"
              category="Technology"
              title="Tablet PC Market to Witness Exponential Growth by 2028, Sources Say"
            />
            <SmallCard
              image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_245244020_xl-2015-2-450x332.jpg"
              category="Technology"
              title="Microsoft Co-Founder Bill Gates Visits EU, Steers Clean Energy Talks"
            />
          </div>
        </div>

        <div className="lg:col-span-1">
          <h3 className="text-[19px] font-bold text-black mb-4 ml-[19px] border-b-2 border-blue-700">
            People's Favorite
          </h3>
          <div className="space-y-6">
            <SidebarCard
              category="Technology"
              title="Schools, Parents Disagree over Bans on Student Mobile Phones"
              author="Shane Doe"
              readTime="6 Mins Read"
              image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/youssef-sarhan-tze1kKj7Lgg-unsplash-1-450x287.jpg"
            />

            <SidebarCard
              category="Gadgets"
              title="PC Game Deals: Stealth Classic to Grab, Fresh VR Bundle & More"
              author="Shane Doe"
              readTime="6 Mins Read"
              image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-sound-on-3761262-1-450x267.jpg"
            />

            <SidebarCard
              category="Technology"
              title="Electric Car Owners to Pay Road Tax from 2025, Hunt Announces"
              author="Shane Doe"
              readTime="6 Mins Read"
              image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_273724454_xl-2015-450x300.jpg"
            />
            <SidebarCard
              category="Phones"
              title="Tackling Smartphone Addiction: Village Bans Mobiles for Minors"
              author="Shane Doe"
              readTime="6 Mins Read"
              image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_378099058_xl-2015-1-450x270.jpg"
            />
            <SidebarCard
              category="Technology"
              title="Epic Games Store Gives Away One of The Best VR Games"
              author="Shane Doe"
              readTime="6 Mins Read"
              image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-450x196.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCardGrid;
