import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, ArrowRight } from "lucide-react"

interface BundleCardProps {
  title: string
  description: string
  items: string[]
  totalWeight: string
  price: number
  image: string
}

export function BundleCard({ title, description, items, totalWeight, price, image }: BundleCardProps) {
  return (
    <Card className="overflow-hidden hover-lift bg-gradient-to-br from-[#1C1F24] to-[#2a2e35] border-[#3E6B57]/30">
      <div className="relative h-48 overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F24] to-transparent" />
        <div className="absolute top-4 right-4">
          
        </div>
      </div>

      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl text-white mb-2">{title}</CardTitle>
            <p className="text-sm text-[#EEEEEE]/80">{description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-[#D8C6A4]">
          <Package className="w-4 h-4" />
          <span className="text-sm font-medium">Total: {totalWeight}</span>
        </div>

        <ul className="space-y-1.5 text-sm text-[#EEEEEE]/70">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#FF7A3D]" />
              {item}
            </li>
          ))}
        </ul>

        <Button className="w-full bg-[#FF7A3D] hover:bg-[#FF7A3D]/90 text-[#1C1F24] font-semibold group">
          Get This Bundle
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  )
}
