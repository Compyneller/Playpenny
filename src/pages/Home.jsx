import React from "react";
import AccordioCards from "../components/AccordionCards/AccordioCards";
import Applinks from "../components/Applinks/Applinks";
import Best from "../components/Best/Best";
import AllCard from "../components/Carousel/AllCard";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import HowToPlay from "../components/HowToPlay/HowToPlay";
import Ultimate from "../components/Ultimate/Ultimate";
import WhatWinner from "../components/WhatWinnerSays/WhatWinner";

const Home = () => {
  return (
    <>
      <Header />
      <Applinks />
      <Ultimate />
      <WhatWinner />
      <AllCard />
      <Best />
      <HowToPlay />
      <Best />
      <AccordioCards />
      <Footer />
    </>
  );
};

export default Home;
