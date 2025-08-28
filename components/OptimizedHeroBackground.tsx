'use client';

import Image from 'next/image';

interface OptimizedHeroBackgroundProps {
  imagePath: string;
  alt: string;
  className?: string;
  children: React.ReactNode;
  overlayOpacity?: number;
}

export default function OptimizedHeroBackground({
  imagePath,
  alt,
  className = '',
  children,
  overlayOpacity = 0.4,
}: OptimizedHeroBackgroundProps) {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-12 sm:pt-16 lg:pt-20 xl:pt-24 ${className}`}
    >
      {/* Optimized Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imagePath}
          alt={alt}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Overlay Filter */}
      <div
        className="absolute inset-0 backdrop-blur-[2px]"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {children}
      </div>
    </section>
  );
}
