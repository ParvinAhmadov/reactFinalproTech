import React from 'react';
import FeaturedLargeCard from '../../atoms/FeaturedLargeCard';
import FeaturedSmallCard from '../../atoms/FeaturedSmallCard';

const FeaturedReviewsSection = () => {
  return (
    <div className="container mx-auto max-w-7xl py-8">
      <div className="flex">
        <FeaturedLargeCard
          image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/woman-in-3d-virtual-reality-glasses_t20_WQVvL4.jpg"
          category="Gaming"
          title="Pico 4 Review: Should You Actually Buy One Instead Of Quest 2?"
          author="Shane Doe"
                  date="Jan 15, 2021"
                  desrp="To understand the new smart watched and other pro devices of recent focus, we should look to…"
                  authorImage="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                  rating="89"
        />
      </div>
      <div className="flex gap-4 mt-8">
        <FeaturedSmallCard
          image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-leon-3636001-2-450x300.jpg"
          category="Technology"
          title="A Review of the Venus Optics Argus 18mm f/0.95 MFT APO "
          rating="8.1"
        />
        <FeaturedSmallCard
          image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/surya-devarakonda-lnEM5jOu-mc-unsplash-450x300.jpg"
          category="Gadgets"
          title="DJI Avata Review: Immersive FPV Flying For Drone Enthusiasts"
          rating="8.9"
        />
        <FeaturedSmallCard
          image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-gSZCLsE7ysc-unsplash-450x300.jpg"
          category="Gadgets"
          title="Bose QuietComfort Earbuds II: Noise-Cancellation Kings "
          rating="8.9"
        />
        <FeaturedSmallCard
          image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/42996726655_0df7830ab6_b-1-450x253.jpg"
          category="Technology"
          title="AMD Ryzen 9 7900X Review: Zen 4 Has a Pricing Problem"
          rating="8.1"
        />
      </div>
    </div>
  );
};

export default FeaturedReviewsSection;
