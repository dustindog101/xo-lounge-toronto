import type { Metadata } from "next";
import { Cinzel, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xolounge.ca"),
  title: "XO Lounge Toronto | Premier Nightclub, Lounge & Bottle Service (Queen East)",
  description:
    "Experience XO Lounge Toronto at 364 Queen St East. High-energy weekend DJs (Afrobeats, Amapiano, R&B), luxury VIP bottle service booths, LED grid ceiling ambiance, craft cocktails & late-night diaspora tapas. Call +1 437-473-0042 to RSVP.",
  keywords: [
    "XO Lounge Toronto",
    "Toronto nightclub",
    "Queen East lounge",
    "Corktown nightlife",
    "bottle service Toronto",
    "Afrobeats club Toronto",
    "VIP booths Toronto",
    "birthday party Toronto lounge",
    "364 Queen St E",
  ],
  openGraph: {
    title: "XO Lounge Toronto | Premier Nightclub & VIP Bottle Service",
    description:
      "Toronto's top Queen East nightlife destination. DJs Fri-Sun, luxury VIP booths, craft cocktails & diaspora tapas.",
    url: "https://xolounge.ca",
    siteName: "XO Lounge Toronto",
    images: [
      {
        url: "/images/venue-interior.jpg",
        width: 1200,
        height: 800,
        alt: "XO Lounge Toronto Interior with LED grid ceiling and VIP bar",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["NightClub", "BarOrPub", "Restaurant"],
    name: "XO Lounge Toronto",
    image: "https://xolounge.ca/images/venue-interior.jpg",
    telephone: "+1-437-473-0042",
    email: "info@xolounge.ca",
    url: "https://xolounge.ca",
    address: {
      "@type": "PostalAddress",
      streetAddress: "364 Queen St E",
      addressLocality: "Toronto",
      addressRegion: "ON",
      postalCode: "M5A 1T1",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.6558,
      longitude: -79.3621,
    },
    priceRange: "$$",
    servesCuisine: "Cocktails, Tapas, Ethiopian fusion bites",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Wednesday", "Thursday", "Sunday"],
        opens: "19:00",
        closes: "02:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "20:00",
        closes: "03:00",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-[100dvh] bg-[#08090b] text-[#f4f4f5] selection:bg-[#c5a880] selection:text-[#08090b]">
        {children}
      </body>
    </html>
  );
}
