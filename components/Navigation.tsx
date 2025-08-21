"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border shadow-lg" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Image
                  src="/logo/l-and-g-corp-logo.jpg"
                  alt="L&G Corporation Logo"
                  width={56}
                  height={56}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg object-cover"
                />
              </div>
              <span className={cn(
                "text-2xl lg:text-3xl font-bold transition-colors duration-300",
                isScrolled ? "text-card-foreground group-hover:text-primary" : "text-white group-hover:text-primary/80"
              )}>
                L&G Corp
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-5 py-3 rounded-xl text-base lg:text-lg font-medium transition-all duration-300 relative group",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : isScrolled 
                          ? "text-card-foreground hover:text-primary hover:bg-accent/50"
                          : "text-white hover:text-primary/80 hover:bg-white/10"
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary-foreground rounded-full"></div>
                    )}
                  </Link>
                )
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
                <span className={cn(
                  "block w-6 h-0.5 transition-all duration-300",
                  isScrolled ? "bg-card-foreground" : "bg-white"
                )}></span>
                <span className={cn(
                  "block w-6 h-0.5 transition-all duration-300",
                  isScrolled ? "bg-card-foreground" : "bg-white"
                )}></span>
                <span className={cn(
                  "block w-6 h-0.5 transition-all duration-300",
                  isScrolled ? "bg-card-foreground" : "bg-white"
                )}></span>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
        isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className={cn(
          "px-4 pt-2 pb-4 space-y-2 border-t",
          isScrolled 
            ? "bg-white/95 backdrop-blur border-border" 
            : "bg-black/20 backdrop-blur border-white/20"
        )}>
          {navigation.map((item) => {
            const isActive = pathname === item.href
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
                      : "text-white hover:text-primary/80 hover:bg-white/10"
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
