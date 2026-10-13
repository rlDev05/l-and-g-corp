'use client';

import FadeInSection from '@/components/FadeInSection';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';

// Types
interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'Product';
  emoji: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'Service';
  emoji: string;
}

// Constants
const PRODUCTS: Product[] = [
  {
    id: 'lpg',
    title: 'Liquefied Petroleum Gas (LPG)',
    description:
      'Safe and efficient energy for households, commercial kitchens, and industrial operations.',
    image: '/products/lpg.jpg',
    category: 'Product',
    emoji: '🔥',
  },
  {
    id: 'gasoline',
    title: 'Gasoline (Petrol)',
    description:
      'Premium quality fuel for cars, motorcycles, and light vehicles.',
    image: '/products/petrol.jpg',
    category: 'Product',
    emoji: '⛽',
  },
  {
    id: 'diesel',
    title: 'Automotive Diesel Oil (ADO)',
    description:
      'Dependable fuel for trucks, buses, heavy equipment, and diesel-powered engines.',
    image: '/products/ado.webp',
    category: 'Product',
    emoji: '🚛',
  },
  {
    id: 'jet-fuel',
    title: 'Jet A-1',
    description:
      'Aviation-grade turbine fuel, refined to international standards for safety and performance.',
    image: '/products/jet1.jpg',
    category: 'Product',
    emoji: '✈️',
  },
  {
    id: 'crude-oil',
    title: 'Crude Oil',
    description: 'Supply and trading for industrial partners and refineries.',
    image: '/products/crude.jpg',
    category: 'Product',
    emoji: '🛢️',
  },
  {
    id: 'petroleum-fuels',
    title: 'Petroleum & Other Fuels',
    description:
      'Wholesale and retail distribution of solid, liquid, and gaseous fuels.',
    image: '/products/petrolandother.jpg',
    category: 'Product',
    emoji: '⚡',
  },
];

const SERVICES: Service[] = [
  {
    id: 'retail',
    title: 'Retail Distribution',
    description:
      'LPG and other fuel products delivered with safety and reliability.',
    image: '/services/retail.jpg',
    category: 'Service',
    emoji: '🏪',
  },
  {
    id: 'wholesale',
    title: 'Wholesale Supply',
    description:
      'Bulk distribution of solid, liquid, and gaseous fuels to businesses and industries.',
    image: '/services/wholesale.jpg',
    category: 'Service',
    emoji: '📦',
  },
  {
    id: 'trading',
    title: 'Trading, Import & Export',
    description:
      'Connecting markets through trusted global partnerships in petroleum and energy products.',
    image: '/services/trading.jpg',
    category: 'Service',
    emoji: '🌍',
  },
];

const FILTER_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'products', label: 'Product' },
  { value: 'services', label: 'Service' },
] as const;

// Utility function for smooth scrolling
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Components
const FilterButton = ({
  value,
  label,
  isActive,
  onClick,
}: {
  value: string;
  label: string;
  isActive: boolean;
  onClick: (value: string) => void;
  className?: string;
}) => (
  <button
    onClick={() => onClick(value)}
    className={`px-6 py-3 rounded-xl ${
      isActive ? 'font-bold' : 'font-normal'
    } transition-all duration-300 transform hover:scale-95 shadow-lg hover:shadow-xl cursor-pointer ${
      isActive
        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
        : 'bg-white text-muted-foreground hover:bg-gray-50 border border-muted-foreground hover:border-primary hover:text-primary'
    }`}
  >
    {label}
  </button>
);

const OfferingCard = ({ item }: { item: Product | Service }) => (
  <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-97 border-0 shadow-md bg-white overflow-hidden rounded-xl">
    <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden relative">
      <Image
        src={item.image}
        alt={item.title}
        width={400}
        height={300}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.nextElementSibling?.classList.remove('opacity-20');
        }}
      />
      <div className="text-4xl opacity-20 absolute">{item.emoji}</div>
    </div>
    <CardContent className="pt-0 px-5">
      <div className="text-center mb-5">
        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
          {item.category}
        </span>
      </div>
      <div className="text-center mb-3">
        <CardTitle className="text-base font-bold text-gray-900 leading-tight text-center">
          {item.title}
        </CardTitle>
      </div>
      <div className="w-8 h-0.5 bg-primary mx-auto mb-3 rounded-full"></div>
      <CardDescription className="text-sm text-gray-600 leading-relaxed mb-3 text-center">
        {item.description}
      </CardDescription>
      <div className="text-center text-muted-foreground text-sm group-hover:text-primary mt-8">
        <p>Click here to Inquire</p>
      </div>
    </CardContent>
  </Card>
);

const HeroSection = () => {
  const handleScrollToSection = useCallback(() => {
    scrollToSection('products-services');
  }, []);

  // return (
  //   <OptimizedHeroBackground
  //     imagePath="/background/bg-2.jpg"
  //     alt="What We Offer Hero Background"
  //     overlayOpacity={0.6}
  //     className="pt-20 lg:pt-24"
  //   >
  //     <FadeInSection delay={200} duration={800}>
  //       <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
  //         <span className="bg-gradient-to-r from-primary-foreground to-primary-foreground/80 bg-clip-text text-transparent">
  //           What We Offer
  //         </span>
  //       </h1>
  //     </FadeInSection>
  //     <FadeInSection delay={400} duration={800}>
  //       <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-light text-justify">
  //         At L&G Energy Corp., we are committed to powering homes, businesses,
  //         and industries with reliable energy solutions. Through our extensive
  //         network and expertise in the fuel industry, we provide high-quality
  //         products and services designed to meet diverse energy needs.
  //       </p>
  //     </FadeInSection>
  //     <FadeInSection delay={600} duration={800}>
  //       <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-light text-justify">
  //         L&G Energy Corp. is your trusted partner in energy — delivering
  //         quality, safety, and efficiency in every drop.
  //       </p>
  //     </FadeInSection>
  //     <FadeInSection delay={800} duration={800}>
  //       <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  //         <button
  //           onClick={handleScrollToSection}
  //           className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
  //         >
  //           <span className="flex items-center gap-2">
  //             Explore Products
  //             <svg
  //               className="w-4 h-4 group-hover:translate-x-1 transition-transform"
  //               fill="none"
  //               stroke="currentColor"
  //               viewBox="0 0 24 24"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth={2}
  //                 d="M9 5l7 7-7 7"
  //               />
  //             </svg>
  //           </span>
  //         </button>
  //       </div>
  //     </FadeInSection>
  //   </OptimizedHeroBackground>
  // );
  return (
    <FadeInSection delay={600} duration={800} className="pt-25 lg:pt-40 mb-0">
      <div className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light space-y-4 sm:space-y-6 px-6 lg:px-0 text-center lg:text-justify ">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-card-foreground">
          What we{' '}
          <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
            Offer
          </span>
        </h2>
        <div className="w-20 h-1 bg-primary rounded-full mb-8 mx-auto lg:mx-0"></div>
      </div>
      <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light text-justify space-y-4 sm:space-y-6 px-5 lg:px-0">
        L&G Energy Corp. is your trusted partner in energy — delivering quality,
        safety, and efficiency in every drop. We supply a full range of
        petroleum and fuel products trusted across industries, we go beyond fuel
        supply by offering complete energy solutions.
      </p>
    </FadeInSection>
  );
};

const FilterNavigation = ({
  activeFilter,
  onFilterChange,
}: {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}) => (
  <FadeInSection delay={200} duration={800}>
    <div className="flex justify-center mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 max-w-2xl w-full mx-auto">
        {FILTER_OPTIONS.map((option) => (
          <FilterButton
            key={option.value}
            value={option.value}
            label={option.label}
            isActive={activeFilter === option.value}
            onClick={onFilterChange}
          />
        ))}
      </div>
    </div>
  </FadeInSection>
);

const ProductsSection = () => (
  <div className="mb-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {PRODUCTS.map((product, index) => (
        <FadeInSection
          key={product.id}
          delay={400 + index * 100}
          duration={800}
        >
          <Link href="/contact" className="block h-full">
            {' '}
            <OfferingCard item={product} />{' '}
          </Link>
        </FadeInSection>
      ))}
    </div>
  </div>
);

const ServicesSection = () => (
  <div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {SERVICES.map((service, index) => (
        <FadeInSection
          key={service.id}
          delay={400 + index * 100}
          duration={800}
        >
          <Link href="/contact" className="block h-full">
            {' '}
            <OfferingCard item={service} />{' '}
          </Link>
        </FadeInSection>
      ))}
    </div>
  </div>
);

// Main Component
export default function WhatWeOffer() {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter);
  }, []);

  const showProducts = useMemo(
    () => activeFilter === 'all' || activeFilter === 'products',
    [activeFilter]
  );

  const showServices = useMemo(
    () => activeFilter === 'all' || activeFilter === 'services',
    [activeFilter]
  );

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <section id="products-services" className="pt-16 sm:py-20 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FilterNavigation
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />

          {showProducts && <ProductsSection />}
          {showServices && <ServicesSection />}
        </div>
      </section>
    </div>
  );
}
