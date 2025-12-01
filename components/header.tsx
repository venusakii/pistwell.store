"use client"

import { Button } from "@/components/ui/button"
import { Menu, ShoppingBag, Search, Mountain } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-foreground hover:text-[#FF7A3D] transition-colors"
          >
            <Mountain className="w-6 h-6 text-[#FF7A3D]" />
            <span>Pistwell</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/shop" className="text-sm font-medium hover:text-[#FF7A3D] transition-colors">
              Shop
            </a>
            <a href="/bundles" className="text-sm font-medium hover:text-[#FF7A3D] transition-colors">
              Bundles
            </a>
            <a href="/micro-guides" className="text-sm font-medium hover:text-[#FF7A3D] transition-colors">
              Micro-Guides
            </a>
            <a href="/quick-pack" className="text-sm font-medium hover:text-[#FF7A3D] transition-colors">
              Quick-Pack
            </a>
            <a href="/routes" className="text-sm font-medium hover:text-[#FF7A3D] transition-colors">
              Routes
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-3">
            <a href="/shop" className="block text-sm font-medium hover:text-[#FF7A3D] transition-colors">
              Shop
            </a>
            <a href="/bundles" className="block text-sm font-medium hover:text-[#FF7A3D] transition-colors">
              Bundles
            </a>
            <a href="/micro-guides" className="block text-sm font-medium hover:text-[#FF7A3D] transition-colors">
              Micro-Guides
            </a>
            <a href="/quick-pack" className="block text-sm font-medium hover:text-[#FF7A3D] transition-colors">
              Quick-Pack
            </a>
            <a href="/routes" className="block text-sm font-medium hover:text-[#FF7A3D] transition-colors">
              Routes
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
