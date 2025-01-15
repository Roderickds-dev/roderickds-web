"use client";
import { useHeaderContext } from "@/context/HeaderContext";
import React from "react";
import About from "../sections/About";
import Short from "../sections/Short";
import Portfolio from "../sections/Portfolio";
import Contact from "../sections/Contact";

const MainContent = () => {
  const { showContent } = useHeaderContext();
  return (
    <div className="flex w-full h-full ">
      <div id="about" className={`${showContent === 1 ? "flex" : "hidden"}`}>
        {(!showContent || showContent === 1) && <About />}
      </div>
      <div
        id="short"
        className={`${showContent === 2 ? "flex" : "hidden"} w-full h-full`}
      >
        {showContent === 2 && <Short />}
      </div>
      <div
        id="portfolio"
        className={`${showContent === 3 ? "flex" : "hidden"} w-full h-full`}
      >
        {showContent === 3 && <Portfolio />}
      </div>

      <div id="contact" className={`${showContent === 4 ? "flex" : "hidden"}`}>
        {showContent === 4 && <Contact />}
      </div>
    </div>
  );
};

export default MainContent;
