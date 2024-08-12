import React from 'react';
import TechCardGrid from '../molekuls/TechCard/TechCardGrid';
import SponsoredBanner from '../molekuls/SponsoredBanner.jsx/SponsoredBanner';
import CardList from '../molekuls/CardList/CardList';
import EditorPicks from '../atoms/EditorPicks';
import TrendingVideos from '../molekuls/TrendingVideos/TrendingVideos';
import Gadgets from '../molekuls/Gadgets/Gadgets';
import PhonesSection from '../molekuls/PhonesSection/PhonesSection';
import SubscribeForm from '../atoms/SubscribeForm';

const Home = () => {
  return (
    <div>
      <div className='container mx-auto max-w-7xl'>
        <TechCardGrid />
        <SponsoredBanner
          imageSrc="https://smartmag.theme-sphere.com/tech-drop/wp-content/uploads/sites/33/2022/10/Wide-Top.jpg"
          altText="Sponsored Content"
          linkUrl="https://themeforest.net/item/smartmag-responsive-retina-wordpress-magazine/6652608?irgwc=1&clickid=TzwzpHV0JxyPTXIQqW0aHyZuUkCz%3AI3w1UE-Ss0&iradid=275988&irpid=2241910&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_2241910&utm_medium=affiliate&utm_source=impact_radius"
          label="Sponsored"
        />
        <EditorPicks />
        <CardList />
      </div>
      <TrendingVideos />
      <div className='container mx-auto max-w-7xl flex flex-col md:flex-row gap-8'>
        <div className="flex-1 space-y-8">
          <Gadgets />
          <PhonesSection />
        </div>

        <div className="w-full md:w-[336px]">
          <div className="sticky top-4">
            <SubscribeForm />
          </div>
        </div>
      </div>
      <SponsoredBanner
          imageSrc="https://smartmag.theme-sphere.com/tech-drop/wp-content/uploads/sites/33/2022/10/Wide-Top.jpg"
          altText="Sponsored Content"
          linkUrl="https://themeforest.net/item/smartmag-responsive-retina-wordpress-magazine/6652608?irgwc=1&clickid=TzwzpHV0JxyPTXIQqW0aHyZuUkCz%3AI3w1UE-Ss0&iradid=275988&irpid=2241910&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_2241910&utm_medium=affiliate&utm_source=impact_radius"
          label="Sponsored"
        />
    </div>
  );
}

export default Home;
