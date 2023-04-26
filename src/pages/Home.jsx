import React from "react";
import Experience from "../components/Home components/Experience";
import Hero from "../components/Home components/Hero";
import Plan from "../components/Home components/Plan"
import CircleSmall from "../components/Home components/CircleSmall";
import Featured from "../components/Home components/Featured"
import Guides from "../components/Home components/Guides"

const Home = () => {
  return (
    <div>
      <Hero />
      <Experience />
     <CircleSmall />
       <Plan />
       {/* <Featured />
      <Guides /> */}
    </div>
  );
};

export default Home;
