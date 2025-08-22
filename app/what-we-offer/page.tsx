"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

const products = [
  {
    id: "lpg",
    title: "Liquefied Petroleum Gas (LPG)",
    description: "Safe and efficient energy for households, commercial kitchens, and industrial operations.",
    image: "/products/lpg.jpg",
    category: "products"
  },
  {
    id: "gasoline",
    title: "Gasoline (Petrol)",
    description: "Premium quality fuel for cars, motorcycles, and light vehicles.",
    image: "/products/petrol.jpg",
    category: "products"
  },
  {
    id: "diesel",
    title: "Automotive Diesel Oil (ADO)",
    description: "Dependable fuel for trucks, buses, heavy equipment, and diesel-powered engines.",
    image: "/products/ado.webp",
    category: "products"
  },
  {
    id: "jet-fuel",
    title: "Jet A-1",
    description: "Aviation-grade turbine fuel, refined to international standards for safety and performance.",
    image: "/products/jet1.jpg",
    category: "products"
  },
  {
    id: "crude-oil",
    title: "Crude Oil",
    description: "Supply and trading for industrial partners and refineries.",
    image: "/products/crude.jpg",
    category: "products"
  },
  {
    id: "petroleum-fuels",
    title: "Petroleum & Other Fuels",
    description: "Wholesale and retail distribution of solid, liquid, and gaseous fuels.",
    image: "/products/petrolandother.jpg",
    category: "products"
  }
];

const services = [
  {
    id: "retail",
    title: "Retail Distribution",
    description: "LPG and other fuel products delivered with safety and reliability.",
    image: "/services/retail.jpg",
    category: "services"
  },
  {
    id: "wholesale",
    title: "Wholesale Supply",
    description: "Bulk distribution of solid, liquid, and gaseous fuels to businesses and industries.",
    image: "/services/wholesale.jpg",
    category: "services"
  },
  {
    id: "trading",
    title: "Trading, Import & Export",
    description: "Connecting markets through trusted global partnerships in petroleum and energy products.",
    image: "/services/trading.jpg",
    category: "services"
  }
];

const allItems = [...products, ...services];

export default function WhatWeOffer() {
  const [activeFilter, setActiveFilter] = useState("all");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/background/bg-2.png')",
          }}
        />

        {/* Overlay Filter */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
            What We{" "}
            <span className="text-primary-foreground bg-gradient-to-r from-primary-foreground to-primary-foreground/80 bg-clip-text text-transparent">
              Offer
            </span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Discover our comprehensive range of energy solutions designed to power the Philippines&apos; growth and development with reliability, efficiency, and sustainability.
          </p>
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
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 sm:py-20 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              At L&G Energy Corp., we are committed to powering homes, businesses, and industries with reliable energy solutions. Through our extensive network and expertise in the fuel industry, we provide high-quality products and services designed to meet diverse energy needs.
            </p>
            <div className="text-xl sm:text-2xl font-bold text-card-foreground">
              L&G Energy Corp. is your trusted partner in energy — delivering quality, safety, and efficiency in every drop.
            </div>
          </div>
        </div>
      </section>

      {/* Products & Services Section */}
      <section id="products-services" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-card-foreground">
                Our{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Products & Services
                </span>
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-8 leading-relaxed">
              Have a comprehensive setup for your energy needs
            </p>
          </div>

          {/* Filter Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-8 text-sm sm:text-base">
              <button
                onClick={() => handleFilter("all")}
                className={`font-medium transition-colors duration-200 ${
                  activeFilter === "all" 
                    ? "text-primary font-semibold" 
                    : "text-muted-foreground hover:text-card-foreground"
                }`}
              >
                All Offerings
              </button>
              <button
                onClick={() => handleFilter("products")}
                className={`font-medium transition-colors duration-200 ${
                  activeFilter === "products" 
                    ? "text-primary font-semibold" 
                    : "text-muted-foreground hover:text-card-foreground"
                }`}
              >
                Products
              </button>
              <button
                onClick={() => handleFilter("services")}
                className={`font-medium transition-colors duration-200 ${
                  activeFilter === "services" 
                    ? "text-primary font-semibold" 
                    : "text-muted-foreground hover:text-card-foreground"
                }`}
              >
                Services
              </button>
            </div>
          </div>

          {/* Products Grid */}
          {activeFilter === "all" || activeFilter === "products" ? (
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-4">
                  🔹 Our Products
                </h3>
                <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                  We supply a full range of petroleum and fuel products trusted across industries:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {products.map((product) => (
                  <Card
                    key={product.id}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-card overflow-hidden"
                  >
                    <div className="aspect-video bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to emoji if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('opacity-20');
                        }}
                      />
                      <div className="text-4xl opacity-20 absolute">
                        {product.id === "lpg" && "🔥"}
                        {product.id === "gasoline" && "⛽"}
                        {product.id === "diesel" && "🚛"}
                        {product.id === "jet-fuel" && "✈️"}
                        {product.id === "crude-oil" && "🛢️"}
                        {product.id === "petroleum-fuels" && "⚡"}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <CardTitle className="text-lg font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {product.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                        {product.description}
                      </CardDescription>
                      <div className="w-8 h-0.5 bg-primary/30 mx-auto mt-4 mb-3"></div>
                      <div className="text-center">
                        <span className="text-sm font-semibold text-primary">
                          Available
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : null}

          {/* Services Grid */}
          {activeFilter === "all" || activeFilter === "services" ? (
            <div>
              <div className="text-center mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-4">
                  🔹 Our Services
                </h3>
                <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                  We go beyond fuel supply by offering complete energy solutions:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {services.map((service) => (
                  <Card
                    key={service.id}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-card overflow-hidden"
                  >
                    <div className="aspect-video bg-gradient-to-br from-green-50 to-gray-100 flex items-center justify-center overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to emoji if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('opacity-20');
                        }}
                      />
                      <div className="text-4xl opacity-20 absolute">
                        {service.id === "retail" && "🏪"}
                        {service.id === "wholesale" && "📦"}
                        {service.id === "trading" && "🌍"}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <CardTitle className="text-lg font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                        {service.description}
                      </CardDescription>
                      <div className="w-8 h-0.5 bg-primary/30 mx-auto mt-4 mb-3"></div>
                      <div className="text-center">
                        <span className="text-sm font-semibold text-primary">
                          Available
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
