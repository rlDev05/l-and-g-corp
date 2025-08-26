"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";
import Image from "next/image";

// Types
interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "products";
  emoji: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "services";
  emoji: string;
}

// Data
const products: Product[] = [
  {
    id: "lpg",
    title: "Liquefied Petroleum Gas (LPG)",
    description: "Safe and efficient energy for households, commercial kitchens, and industrial operations.",
    image: "/products/lpg.jpg",
    category: "products",
    emoji: "🔥"
  },
  {
    id: "gasoline",
    title: "Gasoline (Petrol)",
    description: "Premium quality fuel for cars, motorcycles, and light vehicles.",
    image: "/products/petrol.jpg",
    category: "products",
    emoji: "⛽"
  },
  {
    id: "diesel",
    title: "Automotive Diesel Oil (ADO)",
    description: "Dependable fuel for trucks, buses, heavy equipment, and diesel-powered engines.",
    image: "/products/ado.webp",
    category: "products",
    emoji: "🚛"
  },
  {
    id: "jet-fuel",
    title: "Jet A-1",
    description: "Aviation-grade turbine fuel, refined to international standards for safety and performance.",
    image: "/products/jet1.jpg",
    category: "products",
    emoji: "✈️"
  },
  {
    id: "crude-oil",
    title: "Crude Oil",
    description: "Supply and trading for industrial partners and refineries.",
    image: "/products/crude.jpg",
    category: "products",
    emoji: "🛢️"
  },
  {
    id: "petroleum-fuels",
    title: "Petroleum & Other Fuels",
    description: "Wholesale and retail distribution of solid, liquid, and gaseous fuels.",
    image: "/products/petrolandother.jpg",
    category: "products",
    emoji: "⚡"
  }
];

const services: Service[] = [
  {
    id: "retail",
    title: "Retail Distribution",
    description: "LPG and other fuel products delivered with safety and reliability.",
    image: "/services/retail.jpg",
    category: "services",
    emoji: "🏪"
  },
  {
    id: "wholesale",
    title: "Wholesale Supply",
    description: "Bulk distribution of solid, liquid, and gaseous fuels to businesses and industries.",
    image: "/services/wholesale.jpg",
    category: "services",
    emoji: "📦"
  },
  {
    id: "trading",
    title: "Trading, Import & Export",
    description: "Connecting markets through trusted global partnerships in petroleum and energy products.",
    image: "/services/trading.jpg",
    category: "services",
    emoji: "🌍"
  }
];

// Constants
const FILTER_OPTIONS = [
  { value: "all", label: "All Offerings" },
  { value: "products", label: "Products" },
  { value: "services", label: "Services" }
] as const;

// Components
const FilterButton = ({ 
  value, 
  label, 
  isActive, 
  onClick 
}: { 
  value: string; 
  label: string; 
  isActive: boolean; 
  onClick: (value: string) => void; 
}) => (
  <button
    onClick={() => onClick(value)}
    className={`font-medium transition-colors duration-200 ${
      isActive 
        ? "text-primary font-semibold" 
        : "text-muted-foreground hover:text-card-foreground"
    }`}
  >
    {label}
  </button>
);

const ProductCard = ({ product }: { product: Product }) => (
  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white overflow-hidden rounded-xl">
    <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden relative">
      <Image 
        src={product.image} 
        alt={product.title}
        width={400}
        height={300}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.nextElementSibling?.classList.remove('opacity-20');
        }}
      />
      <div className="text-4xl opacity-20 absolute">
        {product.emoji}
      </div>
    </div>
    <CardContent className="pt-0 px-5 pb-5">
      <div className="text-center mb-3">
        <CardTitle className="text-base font-bold text-gray-900 leading-tight text-center">
          {product.title}
        </CardTitle>
      </div>
      <CardDescription className="text-sm text-gray-600 leading-relaxed mb-3 text-center">
        {product.description}
      </CardDescription>
      <div className="w-8 h-0.5 bg-primary mx-auto mb-3 rounded-full"></div>
      <div className="text-center">
        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
          Available
        </span>
      </div>
    </CardContent>
  </Card>
);

const ServiceCard = ({ service }: { service: Service }) => (
  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white overflow-hidden rounded-xl">
    <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden relative">
      <Image 
        src={service.image} 
        alt={service.title}
        width={400}
        height={300}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.nextElementSibling?.classList.remove('opacity-20');
        }}
      />
      <div className="text-4xl opacity-20 absolute">
        {service.emoji}
      </div>
    </div>
    <CardContent className="pt-0 px-5 pb-5">
      <div className="text-center mb-3">
        <CardTitle className="text-base font-bold text-gray-900 leading-tight text-center">
          {service.title}
        </CardTitle>
      </div>
      <CardDescription className="text-sm text-gray-600 leading-relaxed mb-3 text-center">
        {service.description}
      </CardDescription>
      <div className="w-8 h-0.5 bg-primary mx-auto mb-3 rounded-full"></div>
      <div className="text-center">
        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
          Available
        </span>
      </div>
    </CardContent>
  </Card>
);

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background/bg-2.png')" }}
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <FadeInSection delay={200} duration={800}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
            What We{" "}
            <span className="bg-gradient-to-r from-primary-foreground to-primary-foreground/80 bg-clip-text text-transparent">
              Offer
            </span>
          </h1>
        </FadeInSection>
        <FadeInSection delay={400} duration={800}>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            At L&G Energy Corp., we are committed to powering homes, businesses, and industries with reliable energy solutions. Through our extensive network and expertise in the fuel industry, we provide high-quality products and services designed to meet diverse energy needs.
          </p>
        </FadeInSection>
        <FadeInSection delay={600} duration={800}>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            L&G Energy Corp. is your trusted partner in energy — delivering quality, safety, and efficiency in every drop.
          </p>
        </FadeInSection>
        <FadeInSection delay={800} duration={800}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('products-services')}
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <span className="flex items-center gap-2">
                Explore Our Offerings
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

const FilterNavigation = ({ activeFilter, onFilterChange }: { 
  activeFilter: string; 
  onFilterChange: (filter: string) => void; 
}) => (
  <FadeInSection delay={200} duration={800}>
    <div className="flex justify-center mb-12">
      <div className="flex space-x-8 text-sm sm:text-base">
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
  <div className="mb-16">
    <FadeInSection delay={200} duration={800}>
      <div className="text-center mb-12">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-card-foreground mb-4">
          Our Products
        </h3>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We supply a full range of petroleum and fuel products trusted across industries:
        </p>
      </div>
    </FadeInSection>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {products.map((product, index) => (
        <FadeInSection key={product.id} delay={400 + index * 100} duration={800}>
          <ProductCard product={product} />
        </FadeInSection>
      ))}
    </div>
  </div>
);

const ServicesSection = () => (
  <div>
    <FadeInSection delay={200} duration={800}>
      <div className="text-center mb-12">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-card-foreground mb-4">
          Our Services
        </h3>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We go beyond fuel supply by offering complete energy solutions:
        </p>
      </div>
    </FadeInSection>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {services.map((service, index) => (
        <FadeInSection key={service.id} delay={400 + index * 100} duration={800}>
          <ServiceCard service={service} />
        </FadeInSection>
      ))}
    </div>
  </div>
);

// Main Component
export default function WhatWeOffer() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <section id="products-services" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FilterNavigation 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter} 
          />

          {(activeFilter === "all" || activeFilter === "products") && (
            <ProductsSection />
          )}

          {(activeFilter === "all" || activeFilter === "services") && (
            <ServicesSection />
          )}
        </div>
      </section>
    </div>
  );
}
