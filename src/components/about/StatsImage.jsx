"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";

// Fallback when external stats APIs return 503 or fail; no API key needed
const PLACEHOLDER_STATS_URL = "/placeholder-stats.svg";

/**
 * Reusable client-only image with fallback on error (e.g. for GitHub readme-stats, skillicons).
 * Use from Server Components to keep the page server-rendered; only this image is client-side.
 */
const StatsImage = ({ src, alt, className = "w-full h-auto", loading = "lazy" }) => {
  const onError = (e) => {
    e.target.onerror = null;
    e.target.src = PLACEHOLDER_STATS_URL;
  };
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={loading}
      onError={onError}
    />
  );
};

export default StatsImage;
