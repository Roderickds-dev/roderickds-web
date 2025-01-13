"use client";

import { createContext, useContext, useEffect, useState } from "react";

const HeaderContext = createContext();

export const useHeaderContext = () => useContext(HeaderContext);

export const HeaderProvider = ({ children }) => {
  const [showContent, setShowContent] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = { showContent, setShowContent, darkMode, setDarkMode, isMobile };
  return (
    <HeaderContext.Provider value={data}>{children}</HeaderContext.Provider>
  );
};
