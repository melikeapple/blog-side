import React from "react";
import MiddleCarousel from "../partials/MiddleCarousel";
import BigCarousel from "../partials/BigCarousel";
import Cards from "../partials/Cards";

const HomePage = () => {
  return (
    <>
      <BigCarousel />
      <MiddleCarousel />
      <Cards />
    </>
  );
};
export default HomePage;
