import React from "react";
import Hero from "../components/Home/Hero";
import Feature from "../components/Home/Feature";
import Work from "../components/Home/Work";
import CTA from "../components/Home/CTA";
import JobList from "./JobList";


export const Home = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Work />
      {/* <JobList/> */}
      <CTA />
    </div>
  );
};
