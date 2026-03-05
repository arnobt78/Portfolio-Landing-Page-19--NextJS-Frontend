"use client";

import { useEffect, useState } from "react";

// Returns current window.innerWidth; updates on resize (used for nav breakpoints: 480, 768, 1024)
const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    function getScreenSize() {
      return window.innerWidth;
    }

    function handleResize() {
      setScreenSize(getScreenSize());
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;
