import React, { Fragment } from "react";
import Home from "./home/index";
import Portfolio from "./portfolio/index";
import About from "./about/index";
import Header from "@/components/Header";

const page = () => {
  return (
    <Fragment>
      <main>
        <Header />
        <Home />
        <About />
        <Portfolio />
      </main>
    </Fragment>
  );
};

export default page;
