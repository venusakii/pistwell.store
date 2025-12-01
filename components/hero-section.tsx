"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Backpack, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1C1F24] via-[#2a2e35] to-[#3E6B57]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cinematic-blurred-mountain-landscape-at-dawn-with-.jpg"
          alt="Adventure background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A3D]/20 via-transparent to-[#FF7A3D]/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-slide-in-up">
          <div className="inline-flex items-center gap-2 bg-[#FF7A3D]/90 text-[#1C1F24] px-4 py-2 rounded-full mb-6 font-semibold text-sm">
            <Zap className="w-4 h-4" />
            <span>Gear for your next two-day adventure</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance">
            Gear up fast.
            <br />
            Escape quicker.
          </h1>

          <p className="text-xl md:text-2xl text-[#EEEEEE] mb-8 max-w-3xl mx-auto text-pretty">
            Specialized equipment designed for micro-adventures and spontaneous weekend trips.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[#FF7A3D] hover:bg-[#FF7A3D]/90 text-[#1C1F24] text-lg px-8 py-6 font-semibold group"
            >
              Shop Micro-Adventure Essentials
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 font-semibold bg-transparent"
            >
              <Backpack className="mr-2 w-5 h-5" />
              Weekend Gear Kits
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FF7A3D]">{"<2kg"}</div>
            <div className="text-sm text-[#EEEEEE] mt-1">Average Pack Weight</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FF7A3D]">48h</div>
            <div className="text-sm text-[#EEEEEE] mt-1">Perfect Trip Duration</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FF7A3D]">{"<10min"}</div>
            <div className="text-sm text-[#EEEEEE] mt-1">Pack Time</div>
          </div>
        </div>
      </div>
    </section>
  )
}
