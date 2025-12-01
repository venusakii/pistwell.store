import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pistwell — Gear Up Fast. Escape Quicker.",
  description:
    "Specialized equipment designed for micro-adventures and spontaneous weekend trips. Compact, smart, durable gear for your next two-day adventure.",
  generator: "v0.app",
  keywords: [
    "adventure gear",
    "micro-adventure",
    "weekend trips",
    "compact gear",
    "outdoor equipment",
    "hiking",
    "camping",
  ],
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
