import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import NewArrivals from "./components/Section/NewArrivals";
import Category from "./components/Section/Categories/Category";
import content from "./data/content.json";

import Footer from "./components/Footer/Footer";
const Shop = () => {
  return (
    <>
      <HeroSection />
      <NewArrivals />
      {/* <Category
        title={content?.categories[0]?.title}
        data={content?.categories[0]?.data}
      /> */}

      {content?.categories &&
        content?.categories?.map((item, index) => (
          <Category key={item?.title + index} {...item} />
        ))}

      <Footer content={content?.footer} />
    </>
  );
};

export default Shop;
