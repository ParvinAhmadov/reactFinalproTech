import React from "react";
import ArticleCard from "../../atoms/ArticleCard";
import FeaturedCard from "../../atoms/FeaturedCard";
import SocialAndGaming from "../../atoms/SocialAndGaming";
import TrendingHeader from "../../atoms/TrendingHeader ";

const ArticleSection = () => {
  return (
    <div className="container mx-auto max-w-7xl py-8 flex flex-col md:flex-row gap-8">
          <div className="flex-1 space-y-8">
          <TrendingHeader
        textColor="text-black"
        title="Latest Articles"
      />
        <ArticleCard
          image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/thisisengineering-raeng-a7A9O5htrKs-unsplash-450x300.jpg"
          category="GAMING"
          title="Game Development This Week: Save On Essential Tools and More"
          author="Shane Doe"
          date="Nov 19, 2022"
          description="To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified..."
          authorImage="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
        />
        <ArticleCard
          image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-450x256.jpg"
          category="TECHNOLOGY"
          title="Is the Hyperloop Doomed? What Elon Musk's Latest Setback Really Means"
          author="Shane Doe"
          date="Mar 10, 2022"
          description="To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified..."
          authorImage="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
        />
        <ArticleCard
          image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy_loz-3vVzdb8KKIw-unsplash-450x300.jpg"
          category="TECHNOLOGY"
          title="The Best Early Black Friday Deals on Gaming Laptops and Accessories"
          author="Shane Doe"
          date="Mar 10, 2022"
          description="To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified..."
          authorImage="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
        />
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
        <ArticleCard
          image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy-gieling-bA5ZJ9JVrb8-unsplash-1-450x286.jpg"
          category="GAMING"
          title="Latest Gaming News: PS5 vs Xbox Series X, Who Will Win?"
          author="Shane Doe"
          date="Mar 10, 2022"
          description="To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified..."
          authorImage="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
        />
        <ArticleCard
          image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-bogdan-glisik-1661469-1-450x390.jpg"
          category="GAMING"
          title="Latest Gaming News: PS5 vs Xbox Series X, Who Will Win?"
          author="Shane Doe"
          date="Mar 10, 2022"
          description="To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified..."
          authorImage="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
        />
        <ArticleCard
          image="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-luis-quintero-1787236-450x300.jpg"
          category="GAMING"
          title="Latest Gaming News: PS5 vs Xbox Series X, Who Will Win?"
          author="Shane Doe"
          date="Mar 10, 2022"
          description="To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified..."
          authorImage="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
        />
      </div>

      <div className="w-full md:w-[336px]">
        <div className="sticky top-4">
          <SocialAndGaming />
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
