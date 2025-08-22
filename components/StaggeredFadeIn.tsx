"use client";

import { ReactNode } from "react";
import FadeInSection from "./FadeInSection";

interface StaggeredFadeInProps {
  children: ReactNode[];
  staggerDelay?: number;
  baseDelay?: number;
  duration?: number;
  className?: string;
}

export default function StaggeredFadeIn({
  children,
  staggerDelay = 100,
  baseDelay = 0,
  duration = 600,
  className = "",
}: StaggeredFadeInProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <FadeInSection
          key={index}
          delay={baseDelay + index * staggerDelay}
          duration={duration}
        >
          {child}
        </FadeInSection>
      ))}
    </div>
  );
}
