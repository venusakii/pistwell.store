import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock } from "lucide-react"

interface GuideCardProps {
  title: string
  description: string
  readTime: string
  category: string
  image: string
}

export function GuideCard({ title, description, readTime, category, image }: GuideCardProps) {
  return (
    <Card className="overflow-hidden hover-lift cursor-pointer group border-border/50">
      <div className="relative h-48 overflow-hidden bg-[#D8C6A4]/10">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-[#3E6B57] text-white border-0">{category}</Badge>
        </div>
      </div>

      <CardContent className="p-5">
        <h3 className="font-bold text-lg mb-2 group-hover:text-[#FF7A3D] transition-colors text-balance">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 text-pretty">{description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            <span>{readTime}</span>
          </div>
          <ArrowRight className="w-4 h-4 text-[#FF7A3D] group-hover:translate-x-1 transition-transform" />
        </div>
      </CardContent>
    </Card>
  )
}
