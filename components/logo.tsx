"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const sizes = {
  xs: { fontSize: 16, height: 20 },
  sm: { fontSize: 20, height: 28 },
  md: { fontSize: 26, height: 36 },
  lg: { fontSize: 32, height: 44 },
  xl: { fontSize: 40, height: 54 },
} as const;

interface LogoProps {
  variant?: "full" | "symbol";
  size?: keyof typeof sizes;
  forcedTheme?: "light" | "dark";
  className?: string;
}

export function Logo({
  variant = "full",
  size = "md",
  forcedTheme,
  className,
}: LogoProps) {
  const sizeConfig = sizes[size];

  // Symbol-only variant - simple "R" in a circle
  if (variant === "symbol") {
    const symbolSize = sizeConfig.height;

    return (
      <div
        className={cn(
          "flex-shrink-0 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground",
          className
        )}
        style={{
          width: symbolSize,
          height: symbolSize,
          fontSize: symbolSize * 0.5,
        }}
      >
        R
      </div>
    );
  }

  // Full logo - "Ramp" wordmark
  return (
    <span
      className={cn(
        "font-bold tracking-tight text-foreground flex-shrink-0",
        className
      )}
      style={{
        fontSize: sizeConfig.fontSize,
        lineHeight: `${sizeConfig.height}px`,
      }}
    >
      Ramp
    </span>
  );
}

export default Logo;
