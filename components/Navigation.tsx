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
  { name: "Mission & Vision", href: "/core-values" },
  { name: "What We Offer", href: "/what-we-offer" },
  { name: "Certifications", href: "/certifications" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      // Check if we're on the home page
      if (window.location.pathname === '/') {
        const companyProfileSection = document.getElementById('company-profile');
        if (companyProfileSection) {
          const rect = companyProfileSection.getBoundingClientRect();
          const isInView = rect.top <= 150;
          
          if (isInView) {
            setActiveSection('about');
          } else {
            setActiveSection('');
          }
        }
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-lg"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-16 lg:h-20 xl:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 flex items-center justify-center">
                <Image
                  src="/logo/lng-transparent.png"
                  alt="L&G Corporation Logo"
                  width={112}
                  height={112}
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 object-cover"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1 xl:space-x-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href && !(item.name === "Home" && activeSection === "about");
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      if (item.name === "About") {
                        e.preventDefault();
                        if (window.location.pathname === '/') {
                          const element = document.getElementById('company-profile');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        } else {
                          window.location.href = '/#company-profile';
                        }
                      }
                    }}
                    className={cn(
                      "px-3 xl:px-6 py-3 text-sm xl:text-base font-medium transition-all duration-300 relative group hover:scale-105",
                      isScrolled
                        ? "text-black hover:text-primary"
                        : "text-white hover:text-primary/80",
                    )}
                    style={{
                      color: (isActive || (item.name === "About" && activeSection === "about")) 
                        ? 'var(--color-primary)' 
                        : isScrolled ? 'inherit' : 'white'
                    }}
                  >
                    {item.name}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300",
                        (isActive || (item.name === "About" && activeSection === "about"))
                          ? "bg-primary"
                          : "bg-transparent group-hover:bg-primary/50"
                      )}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden mobile-menu-container">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10 sm:w-12 sm:h-12 p-0 hover:bg-transparent focus:bg-transparent"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="flex flex-col items-center justify-center w-6 h-6 sm:w-7 sm:h-7 relative">
                <span
                  className={cn(
                    "block w-5 h-0.5 sm:w-6 sm:h-0.5 transition-all duration-300 origin-center",
                    isScrolled ? "bg-black" : "bg-white",
                    isMobileMenuOpen && "rotate-45 translate-y-1.5"
                  )}
                />
                <span
                  className={cn(
                    "block w-5 h-0.5 sm:w-6 sm:h-0.5 transition-all duration-300 mt-1.5",
                    isScrolled ? "bg-black" : "bg-white",
                    isMobileMenuOpen && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "block w-5 h-0.5 sm:w-6 sm:h-0.5 transition-all duration-300 mt-1.5 origin-center",
                    isScrolled ? "bg-black" : "bg-white",
                    isMobileMenuOpen && "-rotate-45 -translate-y-1.5"
                  )}
                />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out",
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
        style={{
          backgroundColor: isScrolled 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(0, 0, 0, 0.9)'
        }}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-6 sm:space-y-8 px-6">
          {navigation.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block text-xl sm:text-2xl lg:text-3xl font-semibold transition-all duration-300 relative group hover:scale-110",
                  isScrolled
                    ? "text-black hover:text-primary"
                    : "text-white hover:text-primary/80",
                )}
                style={{
                  color: isActive 
                    ? 'var(--color-primary)' 
                    : isScrolled ? 'inherit' : 'white',
                  animationDelay: `${index * 100}ms`
                }}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300",
                    isActive
                      ? "bg-primary"
                      : "bg-transparent group-hover:bg-primary/50"
                  )}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
