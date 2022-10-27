import React from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import useTitle from "../../hooks/useTitle";
import HeroSection from "./HeroSection";
import HomeAppContent from "./HomeAppContent";

const Home = () => {
  useScrollToTop();
  useTitle("Home");

  return (
    <div>
      <HeroSection />
      <HomeAppContent />
    </div>
  );
};

export default Home;
