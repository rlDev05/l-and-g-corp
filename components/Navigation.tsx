"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-primary-foreground font-bold text-sm">L&G</span>
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                L&G Corp
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-foreground rounded-full"></div>
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
              className="relative w-10 h-10 p-0"
            >
              <div className="flex flex-col items-center justify-center w-6 h-6">
                <span className={cn(
                  "block w-5 h-0.5 bg-foreground transition-all duration-300",
                  isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                )}></span>
                <span className={cn(
                  "block w-5 h-0.5 bg-foreground transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                )}></span>
                <span className={cn(
                  "block w-5 h-0.5 bg-foreground transition-all duration-300",
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
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
        <div className="px-4 pt-2 pb-4 space-y-2 bg-background/95 backdrop-blur border-t border-border">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
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
