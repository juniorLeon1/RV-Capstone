import React from "react";
import Experience from "../components/Home components/Experience";
import Hero from "../components/Home components/Hero";
import Plan from "../components/Home components/Plan"
import CircleSmall from "../components/Home components/CircleSmall";

const Home = () => {
  return (
    <div>
      <Hero />
      <Experience />
      <CircleSmall />
      <Plan />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
