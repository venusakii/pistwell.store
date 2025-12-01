import { Mountain, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1C1F24] text-[#EEEEEE] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="w-6 h-6 text-[#FF7A3D]" />
              <span className="font-bold text-xl text-white">Pistwell</span>
            </div>
            <p className="text-sm text-[#EEEEEE]/70 mb-4">Adventure doesn't need a plan — just the right gear.</p>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-[#FF7A3D] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#FF7A3D] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#FF7A3D] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/shop" className="hover:text-[#FF7A3D] transition-colors">
                  All Gear
                </a>
              </li>
              <li>
                <a href="/bundles" className="hover:text-[#FF7A3D] transition-colors">
                  Weekend Bundles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF7A3D] transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF7A3D] transition-colors">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/micro-guides" className="hover:text-[#FF7A3D] transition-colors">
                  Micro-Guides
                </a>
              </li>
              <li>
                <a href="/routes" className="hover:text-[#FF7A3D] transition-colors">
                  Adventure Routes
                </a>
              </li>
              <li>
                <a href="/quick-pack" className="hover:text-[#FF7A3D] transition-colors">
                  Quick-Pack Tool
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF7A3D] transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-[#FF7A3D] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#FF7A3D] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF7A3D] transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF7A3D] transition-colors">
                  Returns
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#EEEEEE]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#EEEEEE]/60">
          <p>© 2025 Pistwell. Pack small. Move fast. Rest well.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#FF7A3D] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#FF7A3D] transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-[#FF7A3D] transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
