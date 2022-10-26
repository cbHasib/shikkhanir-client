import React from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import useTitle from "../../hooks/useTitle";
import HeroSection from "./HeroSection";

const Home = () => {

  useScrollToTop();
  useTitle("Home");

  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default Home;
