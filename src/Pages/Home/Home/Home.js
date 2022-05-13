import React from "react";

/* import Banner from "./Banner/Banner.jsx";
import Experience from "./Experience/Experience.jsx";
import Review from "./Review/Review.jsx";
import Service from "./Service/Service.jsx"; */

import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Experience from "../Experience/Experience";
import Review from "../Review/Review";
const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <Experience />
      <Review />
    </div>
  );
};

export default Home;
