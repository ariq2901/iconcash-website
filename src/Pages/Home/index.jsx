import React, { Fragment, useEffect } from "react";
import Features from "./Features";
import Hero from "./Hero";

const Home = () => {

  useEffect(() => {
    document.title = "APP Uang Elektronik & Dompet Digital | IconCash"
  }, []);

  return (
    <Fragment>
      <Hero />
      <Features />
    </Fragment>
  );
}

export default Home;