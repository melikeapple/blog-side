import React from "react";
import MiddleCarousel from "../partials/MiddleCarousel";
import BigCarousel from "../partials/BigCarousel";
import Cards from "../partials/Cards";
import ListCard from "../partials/ListCard";

const HomePage = () => {
  return (
    <>
      <BigCarousel />
      <MiddleCarousel />
      <Cards />
      <ListCard />
    </>
  );
};
export default HomePage;
