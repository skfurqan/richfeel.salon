import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Richfeel A/C Handsome Care – Premium Men's Salon",
  description:
    "Premium men's grooming salon in Korutla. Hair design, facials, spa treatments. 4.5⭐ rated. Hygiene, professionalism, hospitality.",
  keywords:
    "men's salon, haircut, grooming, spa, facials, Korutla, handsome care",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Richfeel A/C Handsome Care",
    description:
      "Premium men's grooming salon in Korutla with expert stylists",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
