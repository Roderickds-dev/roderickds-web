import { useHeaderContext } from "@/context/HeaderContext";
import React from "react";
import About from "../sections/About";
import Short from "../sections/Short";
import Portfolio from "../sections/Portfolio";
import Contact from "../sections/Contact";

const MainContent = () => {
  const { showContent } = useHeaderContext();
  return (
    <div className="flex rounded-md w-[450px] sm:w-[650px] h-[550px] md:w-[750px] md:h-[750px] bg-mediumBlue overflow-auto md:mt-4 ml-2 overflow-y-scroll [scrollbar-width:thin]">
      <div className="flex md:justify-center md:items-center">
        {!showContent && <About />}
      </div>
      <div className="flex md:justify-center md:items-center">
        {showContent === 1 && <About />}
      </div>
      <div className="overflow-x-hidden overflow-y-auto [scrollbar-width:thin]">
        {showContent === 2 && <Short />}
      </div>
      <div>{showContent === 3 && <Portfolio />}</div>
      <div className="overflow-x-hidden overflow-y-auto [scrollbar-width:thin]">
        {showContent === 4 && <Contact />}
      </div>
    </div>
  );
};

export default MainContent;
