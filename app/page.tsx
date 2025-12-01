import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { GearCard } from "@/components/gear-card"
import { BundleCard } from "@/components/bundle-card"
import { GuideCard } from "@/components/guide-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Map, Calculator } from "lucide-react"

export default function Home() {
  const featuredGear = [
    {
      name: "UltraLight Bivvy Tent",
      image: "/compact-ultralight-tent-on-mountain.jpg",
      price: 189,
      weight: "680g",
      packSize: "15x8cm",
      weatherRating: "3-season",
      quickScore: 9.2,
      category: "Shelter",
    },
    {
      name: "Micro Titanium Stove",
      image: "/compact-camping-stove-titanium-portable.jpg",
      price: 45,
      weight: "95g",
      packSize: "7x5cm",
      weatherRating: "All-weather",
      quickScore: 8.8,
      category: "Cooking",
    },
    {
      name: "Fast-Pack Sleeping Bag",
      image: "/compact-sleeping-bag-compressed-outdoor.jpg",
      price: 129,
      weight: "520g",
      packSize: "12x18cm",
      weatherRating: "15°C / 5°C",
      quickScore: 9.0,
      category: "Sleep",
    },
    {
      name: "Adventure Day Pack 22L",
      image: "/minimalist-backpack-hiking-compact-design.jpg",
      price: 85,
      weight: "390g",
      packSize: "Foldable",
      weatherRating: "Water-resist",
      quickScore: 8.5,
      category: "Pack",
    },
  ]

  const bundles = [
    {
      title: "48-Hour Escape Kit",
      description: "Everything you need for a spontaneous weekend in nature.",
      items: [
        "UltraLight Bivvy Tent",
        "Fast-Pack Sleeping Bag",
        "Micro Stove + Fuel",
        "Compact Cookset",
        "Adventure Pack 22L",
      ],
      totalWeight: "1.8kg",
      price: 399,
      image: "/camping-gear-laid-out-organized-weekend-trip.jpg",
    },
    {
      title: "Micro-Hike Essentials",
      description: "Lightweight gear for day trips and overnight forest loops.",
      items: ["Day Pack 18L", "Compact First Aid", "Water Filter", "Energy Snacks Kit", "Emergency Shelter"],
      totalWeight: "1.1kg",
      price: 189,
      image: "/hiking-essentials-minimal-gear-forest-trail.jpg",
    },
    {
      title: "Rainy Weekend Pack",
      description: "All-weather protection for unpredictable conditions.",
      items: ["Waterproof Tent", "Rain Shell Jacket", "Quick-Dry Towel", "Waterproof Bag Liner", "Storm Stove"],
      totalWeight: "2.2kg",
      price: 449,
      image: "/rain-gear-waterproof-camping-equipment-wet-weather.jpg",
    },
  ]

  const guides = [
    {
      title: "10 Micro-Adventures Under 2 Hours From Home",
      description:
        "Discover hidden gems within driving distance. Forest loops, coastal walks, and overnight spots you never knew existed.",
      readTime: "8 min read",
      category: "Routes",
      image: "/forest-trail-sunset-golden-hour-nature-walk.jpg",
    },
    {
      title: "How to Pack for a 48-Hour Trip in Under 10 Minutes",
      description: "Master the art of fast packing with our proven system. Never miss a spontaneous adventure again.",
      readTime: "5 min read",
      category: "Tips",
      image: "/packing-backpack-organized-gear-efficient-camping.jpg",
    },
    {
      title: "Best All-Weather Mini Tents for Short Trips",
      description: "We tested 15 compact tents in real conditions. Here's what actually works when weather turns.",
      readTime: "12 min read",
      category: "Gear Review",
      image: "/small-tent-in-rain-mountain-camping-weather.jpg",
    },
    {
      title: "Build Your Always-Ready Adventure Kit",
      description: "Keep a grab-and-go bag ready at all times. What to include and how to maintain it year-round.",
      readTime: "6 min read",
      category: "Strategy",
      image: "/backpack-ready-by-door-adventure-kit-prepared.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <HeroSection />

      {/* Featured Gear Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-3 text-foreground">Quick-Action Essentials</h2>
            <p className="text-muted-foreground text-lg">Compact. Smart. Adventure-ready.</p>
          </div>
          <Button
            variant="outline"
            className="hidden md:flex border-[#FF7A3D] text-[#FF7A3D] hover:bg-[#FF7A3D] hover:text-[#1C1F24] bg-transparent"
          >
            View All Gear
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGear.map((gear, index) => (
            <GearCard key={index} {...gear} />
          ))}
        </div>

        <Button
          variant="outline"
          className="md:hidden w-full mt-6 border-[#FF7A3D] text-[#FF7A3D] hover:bg-[#FF7A3D] hover:text-[#1C1F24] bg-transparent"
        >
          View All Gear
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </section>

      {/* Trip-Ready Bundles */}
      <section className="py-20 bg-[#D8C6A4]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#3E6B57] text-white mb-4 text-sm px-3 py-1">Save Up To 20%</Badge>
            <h2 className="text-4xl font-bold mb-3 text-foreground">Trip-Ready Bundles</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Curated gear collections for every type of micro-adventure. Tested. Perfected. Ready to go.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bundles.map((bundle, index) => (
              <BundleCard key={index} {...bundle} />
            ))}
          </div>
        </div>
      </section>

      {/* Signature Features */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-lg bg-gradient-to-br from-[#FF7A3D]/10 to-[#FF7A3D]/5 hover-lift">
            <div className="w-16 h-16 bg-[#FF7A3D] rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-8 h-8 text-[#1C1F24]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Quick-Pack Generator</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Select duration, weather, and terrain. Get instant gear recommendations with total pack weight.
            </p>
            <Button variant="link" className="text-[#FF7A3D] font-semibold">
              Try It Now <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </div>

          <div className="text-center p-8 rounded-lg bg-gradient-to-br from-[#3E6B57]/10 to-[#3E6B57]/5 hover-lift">
            <div className="w-16 h-16 bg-[#3E6B57] rounded-full flex items-center justify-center mx-auto mb-4">
              <Map className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Micro-Adventure Maps</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Curated routes near you. Forest loops, coastal walks, mini-summits, and overnight spots.
            </p>
            <Button variant="link" className="text-[#3E6B57] font-semibold">
              Explore Routes <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </div>

          <div className="text-center p-8 rounded-lg bg-gradient-to-br from-[#D8C6A4]/20 to-[#D8C6A4]/10 hover-lift">
            <div className="w-16 h-16 bg-[#D8C6A4] rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-[#1C1F24]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Gear Compression Preview</h3>
            <p className="text-muted-foreground text-sm mb-4">
              See exactly how small each item packs down. Animated visuals for tents, bags, and jackets.
            </p>
            <Button variant="link" className="text-[#1C1F24] font-semibold">
              View Demo <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Guides & Inspiration */}
      <section className="py-20 bg-[#1C1F24]/5">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-3 text-foreground">Plan Your Escape</h2>
            <p className="text-muted-foreground text-lg">Guides, tips, and inspiration for spontaneous adventures.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((guide, index) => (
              <GuideCard key={index} {...guide} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1C1F24] via-[#2a2e35] to-[#3E6B57] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Weekend freedom starts here.</h2>
          <p className="text-xl text-[#EEEEEE] mb-8 max-w-2xl mx-auto text-pretty">Pack small. Move fast. Rest well.</p>
          <Button
            size="lg"
            className="bg-[#FF7A3D] hover:bg-[#FF7A3D]/90 text-[#1C1F24] text-lg px-8 py-6 font-semibold"
          >
            Start Your Adventure
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
