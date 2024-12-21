import React from "react";
import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";
import NewArrivals from "./components/Section/NewArrivals";
import Category from "./components/Section/Categories/Category";
import content from "./data/content.json";

// import Footer from "./components/Footer/Footer";
const Shop = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <NewArrivals />
      <Category
        title={content?.categories[0]?.title}
        data={content?.categories[0]?.data}
      />
      {/* <Footer content={content?.footer} /> */}
    </>
  );
};

export default Shop;
