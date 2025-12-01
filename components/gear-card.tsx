import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Weight, Package, Thermometer, Star } from "lucide-react"

interface GearCardProps {
  name: string
  image: string
  price: number
  weight: string
  packSize: string
  weatherRating: string
  quickScore: number
  category: string
}

export function GearCard({ name, image, price, weight, packSize, weatherRating, quickScore, category }: GearCardProps) {
  return (
    <Card className="overflow-hidden hover-lift border-border/50 bg-[#D8C6A4]/5">
      <div className="relative aspect-square overflow-hidden bg-[#D8C6A4]/10">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          
        </div>
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-[#EEEEEE]/90 text-[#1C1F24] text-xs">
            {category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4 bg-[#D8C6A4]/5">
        <h3 className="font-bold text-lg mb-3 text-foreground">{name}</h3>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Weight className="w-3.5 h-3.5 text-[#3E6B57]" />
            <span className="font-medium">{weight}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Package className="w-3.5 h-3.5 text-[#3E6B57]" />
            <span className="font-medium">{packSize}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Thermometer className="w-3.5 h-3.5 text-[#3E6B57]" />
            <span className="font-medium">{weatherRating}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Star className="w-3.5 h-3.5 fill-[#FF7A3D] text-[#FF7A3D]" />
            <span className="font-medium">Score: {quickScore}/10</span>
          </div>
        </div>

        <Button className="w-full bg-[#FF7A3D] hover:bg-[#FF7A3D]/90 text-[#1C1F24] font-semibold">Quick Add</Button>
      </CardContent>
    </Card>
  )
}
