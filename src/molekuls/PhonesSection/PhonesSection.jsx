import React from "react";
import GagetsSmallCard from "../../atoms/GadgetsSmallCard";
import PhonesSectionCard from "../../atoms/PhonesSectionCard";
import TrendingHeader from "../../atoms/TrendingHeader ";

const PhonesSection = () => {
  return (
    <div className="container mx-auto max-w-7xl py-8 flex flex-col md:flex-row gap-8">
      <div className="flex-1 space-y-8">
        <TrendingHeader textColor="text-black" title="New Gadgets" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PhonesSectionCard
            image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_352742574_xl-2015-1-450x300.jpg"
            category="Phones"
            title="Google Says Surveillance Vendor Targeted Samsung Phones"
            author="Shane Doe"
            date="Jan 14, 2021"
          />
          <PhonesSectionCard
            image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/sahej-brar-6Pg2e3W1KDY-unsplash-450x450.jpg"
            category="Phones"
            title="Why Are iPhones More Expensive Than Android Phones?"
            author="Shane Doe"
            date="Jan 14, 2021"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GagetsSmallCard
            imageSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-fxJIHyWTRu4-unsplash-450x302.jpg"
            title="The Pros of Buying a Used/Refurbished iPhone 11"
            date="Jan 14, 2021"
          />
          <GagetsSmallCard
            imageSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-2ZgdviaHOkc-unsplash-2-267x300.jpg"
            title="These OnePlus Phones Are Getting Stable Android 13 Update"
            date="Jan 14, 2021"
          />
          <GagetsSmallCard
            imageSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-mP4sfCCoTrI-unsplash-1-450x744.jpg"
            title="Huawei Phones are Moving Forward Without Google Mobile Services"
            date="Jan 13, 2021"
          />
          <GagetsSmallCard
            imageSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/vinit-vispute-enqYaZPSDjQ-unsplash-300x200.jpg"
            title="OnePlus Will Focus on a Premium Build Over Camera Performance"
            date="Jan 13, 2021"
          />
          <GagetsSmallCard
            imageSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/ivan-shilov-D24B2DiV0sY-unsplash-300x200.jpg"
            title="The Best Wireless Earbuds for the Samsung Galaxy S22 in 2022"
            date="Jan 13, 2021"
          />
          <GagetsSmallCard
            imageSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/mark-chan-489jbTi51sg-unsplash-300x169.jpg"
            title="Redmi Series Launched With 200MP Camera and a Fast Charging"
            date="Jan 13, 2021"
          />
        </div>
      </div>
    </div>
  );
};

export default PhonesSection;
