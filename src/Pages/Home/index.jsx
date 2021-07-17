import React, { Fragment, useEffect } from "react";
import Features from "./Features";
import Hero from "./Hero";
import Merchant from "./Merchant";
import Promo from "./Promo";

const Home = () => {

  useEffect(() => {
    document.title = "APP Uang Elektronik & Dompet Digital | IconCash"
  }, []);

  return (
    <Fragment>
      <Hero />
      <Features />
      <Promo />
      <Merchant />
    </Fragment>
  );
}

export default Home;