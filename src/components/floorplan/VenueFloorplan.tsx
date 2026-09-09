"use client";

import { CheckCircle2, ChevronRight, Sparkles, Users } from "lucide-react";
import { useState } from "react";

interface VenueFloorplanProps {
  onSelectBooth: (boothName: string, minSpend: number, maxGuests: number) => void;
  language: "en" | "am";
}

interface BoothData {
  id: string;
  name: string;
  category: string;
  capacity: number;
  minSpend: number;
  description: string;
  features: string[];
}

const BOOTHS: BoothData[] = [
  {
    id: "stage-vip-a",
    name: "DJ Stage VIP Booth A",
    category: "Prime Stage Left",
    capacity: 10,
    minSpend: 750,
    description:
      "Front-row stage experience directly adjacent to the DJ deck and acoustic visual wall. The premier centerpiece of the room.",
    features: [
      "10 Complimentary VIP admissions with expedited entry",
      "Signature bottle presentation with dedicated VIP host",
      "Unobstructed front sightlines of weekend headliners",
      "Dedicated cocktail and bottle service team",
    ],
  },
  {
    id: "stage-vip-b",
    name: "DJ Stage VIP Booth B",
    category: "Prime Stage Right",
    capacity: 10,
    minSpend: 750,
    description:
      "Flanking the right of the DJ booth with direct immersion into the dance floor energy and lighting.",
    features: [
      "10 Complimentary VIP admissions with expedited entry",
      "Signature bottle presentation with dedicated VIP host",
      "Front-row acoustic immersion and dance floor proximity",
      "Dedicated cocktail and bottle service team",
    ],
  },
  {
    id: "main-booth-1",
    name: "Main Room Banquette #1",
    category: "Main Salon",
    capacity: 8,
    minSpend: 500,
    description:
      "Plush upholstered leather banquette along the main lounge corridor under custom architectural illumination.",
    features: [
      "8 Complimentary VIP admissions",
      "Prime vantage of the room and dance floor",
      "Full premium mixer package & dedicated server",
      "Ideal for birthday and anniversary groups",
    ],
  },
  {
    id: "main-booth-2",
    name: "Main Room Banquette #2",
    category: "Main Salon",
    capacity: 8,
    minSpend: 500,
    description:
      "Central banquette position positioned in the core pulse of the lounge, balancing social energy with private comfort.",
    features: [
      "8 Complimentary VIP admissions",
      "Custom celebration welcome display on request",
      "Full premium mixer package & ice service",
      "Dedicated server throughout the evening",
    ],
  },
  {
    id: "main-booth-3",
    name: "Main Room Banquette #3",
    category: "Main Salon",
    capacity: 6,
    minSpend: 400,
    description:
      "Intimate seating for focused groups desiring upscale bottle hospitality with swift bar proximity.",
    features: [
      "6 Complimentary VIP admissions",
      "Premium mixers, garnishes and ice service",
      "Balanced acoustic profile and easy lounge transit",
    ],
  },
  {
    id: "corner-vip",
    name: "Private Corner VIP Banquette",
    category: "Private Nook",
    capacity: 8,
    minSpend: 600,
    description:
      "Elevated wrap-around corner booth offering enhanced privacy while retaining full sightlines of the entire lounge.",
    features: [
      "8 VIP expedited bypass entries",
      "Discreet elevated corner perspective",
      "Complimentary champagne toast for celebrations",
      "Dedicated bottle concierge host",
    ],
  },
];

export default function VenueFloorplan({ onSelectBooth, language }: VenueFloorplanProps) {
  const [selectedBooth, setSelectedBooth] = useState<BoothData>(BOOTHS[0]);

  return (
    <section
      id="floorplan"
      className="py-24 bg-[#08090b] border-t border-white/5 relative scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="font-sculpted text-xs tracking-[0.25em] text-[#d4af37] uppercase block font-semibold">
            ARCHITECTURAL SEATING SCHEMATIC
          </span>

          <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white tracking-tight">
            {language === "en" ? "VIP Booths & Seating Plan" : "የቦታ ካርታ እና የቪአይፒ መቀመጫዎች"}
          </h2>

          <p className="text-sm sm:text-base text-[#9ea2ac]">
            {language === "en"
              ? "Select your preferred seating area on our venue schematic to inspect guest capacity, minimum spend parameters, and reserve directly with our concierge."
              : "የሚፈልጉትን የቪአይፒ ጠረጴዛ ይምረጡ፤ የሰው ብዛት፣ ዝቅተኛ ወጪ እና ጥቅማጥቅሞችን ይመልከቱ።"}
          </p>
        </div>

        {/* 2-Column Layout: Interactive Floor Map + Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Schematic Diagram (7 cols) */}
          <div className="lg:col-span-7 bg-[#0b0d13] border border-white/10 rounded-xl p-5 sm:p-7 shadow-2xl relative">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#6b707d] uppercase tracking-widest pb-4 border-b border-white/10 mb-6">
              <span>364 QUEEN ST E • VENUE INTERIOR</span>
              <span className="flex items-center gap-1.5 text-[#d4af37]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
                SELECT ANY BOOTH TO INSPECT
              </span>
            </div>

            {/* Layout Grid */}
            <div className="space-y-4">
              {/* DJ STAGE & ACOUSTIC WALL */}
              <div className="bg-[#12141c] border border-white/15 rounded-lg py-3 px-4 text-center">
                <span className="font-editorial text-sm tracking-[0.2em] text-[#f3e5ab] uppercase block">
                  DJ STAGE & ACOUSTIC WALL
                </span>
                <span className="text-[10px] text-[#6b707d] font-mono tracking-wider block mt-0.5">
                  WEEKEND HEADLINERS • AFROBEATS • R&B • AMAPIANO
                </span>
              </div>

              {/* STAGE VIP BOOTHS (A & B) */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedBooth(BOOTHS[0])}
                  className={`p-3.5 sm:p-4 rounded-lg text-left border transition-all cursor-pointer min-h-[44px] ${
                    selectedBooth.id === "stage-vip-a"
                      ? "bg-[#161a26] border-[#d4af37] shadow-lg shadow-[#d4af37]/10"
                      : "bg-[#0f1118] border-white/10 hover:border-white/20 hover:bg-[#141722]"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-2 mb-1">
                    <span className="font-editorial font-bold text-xs sm:text-sm text-white whitespace-nowrap">
                      VIP BOOTH A
                    </span>
                    <span className="text-[10px] font-mono text-[#d4af37] whitespace-nowrap">
                      10 GUESTS
                    </span>
                  </div>
                  <div className="text-[11px] text-[#6b707d]">Stage Left Center</div>
                  <div className="text-xs font-mono font-bold text-[#f3e5ab] mt-2">
                    Min. $750 CAD
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedBooth(BOOTHS[1])}
                  className={`p-3.5 sm:p-4 rounded-lg text-left border transition-all cursor-pointer min-h-[44px] ${
                    selectedBooth.id === "stage-vip-b"
                      ? "bg-[#161a26] border-[#d4af37] shadow-lg shadow-[#d4af37]/10"
                      : "bg-[#0f1118] border-white/10 hover:border-white/20 hover:bg-[#141722]"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-2 mb-1">
                    <span className="font-editorial font-bold text-xs sm:text-sm text-white whitespace-nowrap">
                      VIP BOOTH B
                    </span>
                    <span className="text-[10px] font-mono text-[#d4af37] whitespace-nowrap">
                      10 GUESTS
                    </span>
                  </div>
                  <div className="text-[11px] text-[#6b707d]">Stage Right Center</div>
                  <div className="text-xs font-mono font-bold text-[#f3e5ab] mt-2">
                    Min. $750 CAD
                  </div>
                </button>
              </div>

              {/* DANCE FLOOR (CENTRAL ZONE) */}
              <div className="bg-[#0f1118] border border-white/10 rounded-lg py-7 px-4 text-center space-y-1">
                <span className="font-editorial text-sm tracking-[0.2em] text-[#e4e4e7] uppercase block">
                  CENTRAL LOUNGE DANCE FLOOR
                </span>
                <span className="text-[10px] text-[#6b707d] font-mono tracking-wider block">
                  ARCHITECTURAL LIGHTING CANOPY
                </span>
              </div>

              {/* MAIN FLOOR BOOTHS 1, 2, 3 */}
              <div className="grid grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedBooth(BOOTHS[2])}
                  className={`p-3 rounded-lg text-left border transition-all cursor-pointer min-h-[44px] ${
                    selectedBooth.id === "main-booth-1"
                      ? "bg-[#161a26] border-[#d4af37] shadow-lg shadow-[#d4af37]/10"
                      : "bg-[#0f1118] border-white/10 hover:border-white/20 hover:bg-[#141722]"
                  }`}
                >
                  <div className="font-editorial font-bold text-xs text-white">BOOTH 1</div>
                  <div className="text-[10px] text-[#6b707d]">Main Salon</div>
                  <div className="text-[11px] font-mono font-bold text-[#f3e5ab] mt-1.5">
                    Min. $500
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedBooth(BOOTHS[3])}
                  className={`p-3 rounded-lg text-left border transition-all cursor-pointer min-h-[44px] ${
                    selectedBooth.id === "main-booth-2"
                      ? "bg-[#161a26] border-[#d4af37] shadow-lg shadow-[#d4af37]/10"
                      : "bg-[#0f1118] border-white/10 hover:border-white/20 hover:bg-[#141722]"
                  }`}
                >
                  <div className="font-editorial font-bold text-xs text-white">BOOTH 2</div>
                  <div className="text-[10px] text-[#6b707d]">Main Salon</div>
                  <div className="text-[11px] font-mono font-bold text-[#f3e5ab] mt-1.5">
                    Min. $500
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedBooth(BOOTHS[4])}
                  className={`p-3 rounded-lg text-left border transition-all cursor-pointer min-h-[44px] ${
                    selectedBooth.id === "main-booth-3"
                      ? "bg-[#161a26] border-[#d4af37] shadow-lg shadow-[#d4af37]/10"
                      : "bg-[#0f1118] border-white/10 hover:border-white/20 hover:bg-[#141722]"
                  }`}
                >
                  <div className="font-editorial font-bold text-xs text-white">BOOTH 3</div>
                  <div className="text-[10px] text-[#6b707d]">Main Salon</div>
                  <div className="text-[11px] font-mono font-bold text-[#f3e5ab] mt-1.5">
                    Min. $400
                  </div>
                </button>
              </div>

              {/* CORNER VIP & MARBLE BAR */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedBooth(BOOTHS[5])}
                  className={`sm:col-span-5 p-3.5 rounded-lg text-left border transition-all cursor-pointer min-h-[44px] ${
                    selectedBooth.id === "corner-vip"
                      ? "bg-[#161a26] border-[#d4af37] shadow-lg shadow-[#d4af37]/10"
                      : "bg-[#0f1118] border-white/10 hover:border-white/20 hover:bg-[#141722]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-editorial font-bold text-xs text-white">CORNER VIP</span>
                    <span className="text-[10px] font-mono text-[#d4af37]">8 GUESTS</span>
                  </div>
                  <div className="text-[10px] text-[#6b707d]">Elevated Nook</div>
                  <div className="text-xs font-mono font-bold text-[#f3e5ab] mt-1.5">
                    Min. $600 CAD
                  </div>
                </button>

                {/* MARBLE ISLAND BAR */}
                <div className="sm:col-span-7 bg-[#0f1118] border border-white/15 rounded-lg p-3.5 text-center flex flex-col justify-center">
                  <span className="font-editorial font-normal text-xs tracking-wider text-white block">
                    MARBLE ISLAND COCKTAIL BAR
                  </span>
                  <span className="text-[10px] text-[#6b707d] font-mono mt-0.5">
                    25 UPHOLSTERED BAR STOOLS • WALK-INS ALWAYS WELCOME
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Selected Booth Detail & Fast Action Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#0b0d13] border border-white/15 rounded-xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-sculpted font-bold tracking-widest px-2.5 py-1 rounded-sm border border-[#d4af37]/40 bg-[#040507] text-[#f3e5ab] uppercase">
                  {selectedBooth.category}
                </span>
                <span className="text-xs font-mono text-[#9ea2ac] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                  Capacity: {selectedBooth.capacity} Guests
                </span>
              </div>

              <h3 className="font-editorial text-3xl font-normal text-white tracking-wide">
                {selectedBooth.name}
              </h3>

              <p className="text-xs text-[#9ea2ac] leading-relaxed">{selectedBooth.description}</p>
            </div>

            {/* Minimum Spend Card */}
            <div className="bg-[#040507] border border-white/10 rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#9ea2ac]">Table Minimum Spend:</span>
                <span className="text-xl font-mono font-bold text-[#f3e5ab]">
                  ${selectedBooth.minSpend} CAD
                </span>
              </div>
              <div className="text-[11px] text-[#6b707d] leading-tight">
                Applicable towards premium spirits, champagne, and tapas. Taxes and gratuity added
                at settlement.
              </div>
            </div>

            {/* Features list */}
            <div className="space-y-2.5">
              <span className="text-xs font-sculpted font-semibold text-white uppercase tracking-wider block">
                Hospitality Inclusions:
              </span>
              <ul className="space-y-2">
                {selectedBooth.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-xs text-[#9ea2ac]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reserve This Booth CTA */}
            <button
              type="button"
              onClick={() =>
                onSelectBooth(selectedBooth.name, selectedBooth.minSpend, selectedBooth.capacity)
              }
              className="w-full min-h-[48px] py-3.5 px-6 rounded-md bg-[#d4af37] hover:bg-[#e6c34e] text-[#040507] font-sculpted font-bold text-xs uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-black/80"
            >
              <Sparkles className="w-4 h-4 text-[#040507]" />
              <span>CONFIGURE RESERVATION</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
