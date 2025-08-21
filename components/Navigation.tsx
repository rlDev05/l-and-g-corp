"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#company-profile" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-lg"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center mr-2">
                <Image
                  src="/logo/lng-transparent.png"
                  alt="L&G Corporation Logo"
                  width={80}
                  height={80}
                  className="w-14 h-14 lg:w-18 lg:h-18 object-cover"
                />
              </div>
              <span
                className={cn(
                  "text-xl lg:text-2xl font-semibold",
                  isScrolled ? "text-card-foreground" : "text-white"
                )}
              >
                L&G Energy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-6 py-3 rounded-xl text-sm lg:text-base font-medium transition-all duration-300 relative group",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : isScrolled
                          ? "text-card-foreground hover:text-primary hover:bg-accent/50"
                          : "text-white hover:text-primary/80 hover:bg-white/10",
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-12 h-12 p-0"
            >
              <div className="flex flex-col items-center justify-center w-7 h-7">
                <span
                  className={cn(
                    "block w-6 h-0.5 transition-all duration-300",
                    isScrolled ? "bg-card-foreground" : "bg-white",
                  )}
                ></span>
                <span
                  className={cn(
                    "block w-6 h-0.5 transition-all duration-300",
                    isScrolled ? "bg-card-foreground" : "bg-white",
                  )}
                ></span>
                <span
                  className={cn(
                    "block w-6 h-0.5 transition-all duration-300",
                    isScrolled ? "bg-card-foreground" : "bg-white",
                  )}
                ></span>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div
          className={cn(
            "px-4 pt-2 pb-4 space-y-2 border-t",
            isScrolled
              ? "bg-white/95 backdrop-blur border-border"
              : "bg-black/20 backdrop-blur border-white/20",
          )}
        >
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : isScrolled
                      ? "text-card-foreground hover:text-primary hover:bg-accent/50"
                      : "text-white hover:text-primary/80 hover:bg-white/10",
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
