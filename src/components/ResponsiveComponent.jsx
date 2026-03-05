"use client";

import React from "react";
import useScreenSize from "./hooks/useScreenSize";

// Render-prop component: passes current width (size) to children for breakpoint-based rendering
const ResponsiveComponent = ({ children }) => {
  const size = useScreenSize();

  return <>{children({ size })}</>;
};

export default ResponsiveComponent;
