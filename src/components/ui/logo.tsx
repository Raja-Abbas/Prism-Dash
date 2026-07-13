"use client";

import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ size = "md", showText = true }: LogoProps) {
  const iconSize = size === "sm" ? 28 : size === "md" ? 36 : 48;
  const textSize = size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-2xl";

  return (
    <div className="flex items-center gap-2.5">
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="prism-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="12" fill="url(#prism-grad)" />
        <rect x="10" y="28" width="6" height="10" rx="1.5" fill="white" fillOpacity="0.9" />
        <rect x="18" y="20" width="6" height="18" rx="1.5" fill="white" fillOpacity="0.75" />
        <rect x="26" y="14" width="6" height="24" rx="1.5" fill="white" fillOpacity="0.85" />
        <rect x="34" y="10" width="6" height="28" rx="1.5" fill="white" fillOpacity="0.65" />
      </svg>
      {showText && (
        <span className={`${textSize} font-bold tracking-tight`}>
          <span className="text-foreground">Prism</span>
          <span className="text-blue-600 dark:text-blue-400">Dash</span>
        </span>
      )}
    </div>
  );
}
