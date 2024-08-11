import React from "react";
import TrendingHeader from "../../atoms/TrendingHeader ";
import VideoCard from "../../atoms/VideoCard";
import SmallVideoCard from "../../atoms/SmallVideoCard ";
import MediumVideoCard from "../../atoms/MediumVideoCard";

const TrendingVideos = () => {
  return (
    <div className="bg-[#111129] p-[2rem]">
      <div className="container mx-auto max-w-7xl">
        <TrendingHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="col-span-2 row-span-2">
            <VideoCard
              imageSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/sajad-nori-CeyE899Q73Y-unsplash-1024x683.jpg"
              title1="Soundcore VR Gaming Earbuds Designed for"
              title2="Meta Quest 2 Launched"
              category="GADGETS"
              author="Shane Doe"
              date="Sep 20, 2020"
              size="large"
              authorImage="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            <SmallVideoCard
              imageSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/jerin-john-Smbz6GQt_CI-unsplash-2-450x264.jpg"
              title="Photography: Save $800 on a Fujifilm Camera Before Black Friday"
              author="Shane Doe"
              date="Sep 12, 2020"
            />
            <SmallVideoCard
              imageSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/freestocks-hRVrvH9-dG0-unsplash-1-450x300.jpg"
              title="Wireless Earbuds May Help Amplify Sound for People with Hearing Loss"
              author="Shane Doe"
              date="Sep 16, 2020"
            />
            <SmallVideoCard
              imageSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/freestocks-hRVrvH9-dG0-unsplash-1-450x300.jpg"
              title="Wireless Earbuds May Help Amplify Sound for People with Hearing Loss"
              author="Shane Doe"
              date="Sep 16, 2020"
            />
            <SmallVideoCard
              imageSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/freestocks-hRVrvH9-dG0-unsplash-1-450x300.jpg"
              title="Wireless Earbuds May Help Amplify Sound for People with Hearing Loss"
              author="Shane Doe"
              date="Sep 16, 2020"
            />
          </div>

          <div className="col-span-3 grid grid-cols-4 gap-4">
            <MediumVideoCard
              imageSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/billy-freeman-yk-jzxSIk90-unsplash-450x253.jpg"
              title="Leaf Headphones: Here are Some of The Best Devices"
            />
            <MediumVideoCard
              imageSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/nasa-Zzc0vZE2JZI-unsplash-450x350.jpg"
              title="A Piece of The Wrecked 1986 Challenger Space Shuttle Was Found"
            />
            <MediumVideoCard
              imageSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_314150492_xl-2015-1-768x361.jpg"
              title="Security Cameras Make Us Feel Safe, but Are They Really Secure?"
            />
            <MediumVideoCard
              imageSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pragyan-goswami-GziKHv-3lVc-unsplash-450x315.jpg"
              title="Why We Should Be Cautious About Virtual Reality"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingVideos;
