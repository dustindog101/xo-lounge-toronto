"use client";

import { CheckCircle2, ChevronRight, Compass, Sparkles, Users } from "lucide-react";
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
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c5a880]/30 bg-[#12141c] text-xs font-mono text-[#e6d5b8]">
            <Compass className="w-3.5 h-3.5 text-[#c5a880]" />
            <span className="tracking-widest uppercase">ARCHITECTURAL SEATING SCHEMATIC</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {language === "en" ? "VIP BOOTHS & SEATING PLAN" : "የቦታ ካርታ እና የቪአይፒ መቀመጫዎች"}
          </h2>

          <p className="text-sm sm:text-base text-[#a1a1aa]">
            {language === "en"
              ? "Select your preferred seating area on our venue schematic to inspect guest capacity, minimum spend parameters, and reserve directly with our concierge."
              : "የሚፈልጉትን የቪአይፒ ጠረጴዛ ይምረጡ፤ የሰው ብዛት፣ ዝቅተኛ ወጪ እና ጥቅማጥቅሞችን ይመልከቱ።"}
          </p>
        </div>

        {/* 2-Column Layout: Interactive Floor Map + Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Architectural Floor Map (7 cols) */}
          <div className="lg:col-span-7 bg-[#0f1117] border border-white/10 rounded-xl p-6 sm:p-8 shadow-xl relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <span className="text-[11px] font-mono tracking-widest text-[#71717a] uppercase">
                364 QUEEN ST E • VENUE INTERIOR
              </span>
              <span className="text-[11px] font-mono text-[#c5a880] flex items-center gap-1.5 tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                SELECT ANY BOOTH TO INSPECT
              </span>
            </div>

            <div className="space-y-4">
              {/* DJ STAGE & LED WALL */}
              <div className="bg-[#151821] border border-white/15 text-white p-3.5 rounded-lg text-center">
                <span className="font-serif font-semibold text-xs tracking-[0.2em] text-[#e6d5b8] block uppercase">
                  DJ STAGE & ACOUSTIC WALL
                </span>
                <span className="text-[10px] text-[#71717a] font-mono tracking-wider block mt-0.5">
                  WEEKEND HEADLINERS • AFROBEATS • R&B • AMAPIANO
                </span>
              </div>

              {/* STAGE VIP BOOTHS A & B */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedBooth(BOOTHS[0])}
                  className={`p-4 rounded-lg text-left border transition-all cursor-pointer min-h-[44px] ${
                    selectedBooth.id === "stage-vip-a"
                      ? "bg-[#1d2130] border-[#c5a880] shadow-md"
                      : "bg-[#12141c] border-white/10 hover:border-white/20 hover:bg-[#161924]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif font-bold text-xs sm:text-sm text-white">
                      VIP BOOTH A
                    </span>
                    <span className="text-[10px] font-mono text-[#c5a880]">10 GUESTS</span>
                  </div>
                  <div className="text-[11px] text-[#71717a]">Stage Left Center</div>
                  <div className="text-xs font-mono font-bold text-[#e6d5b8] mt-2">
                    Min. $750 CAD
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedBooth(BOOTHS[1])}
                  className={`p-4 rounded-lg text-left border transition-all cursor-pointer min-h-[44px] ${
                    selectedBooth.id === "stage-vip-b"
                      ? "bg-[#1d2130] border-[#c5a880] shadow-md"
                      : "bg-[#12141c] border-white/10 hover:border-white/20 hover:bg-[#161924]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif font-bold text-xs sm:text-sm text-white">
                      VIP BOOTH B
                    </span>
                    <span className="text-[10px] font-mono text-[#c5a880]">10 GUESTS</span>
                  </div>
                  <div className="text-[11px] text-[#71717a]">Stage Right Center</div>
                  <div className="text-xs font-mono font-bold text-[#e6d5b8] mt-2">
                    Min. $750 CAD
                  </div>
                </button>
              </div>

              {/* DANCE FLOOR (CENTRAL ZONE) */}
              <div className="bg-[#12141c] border border-white/10 rounded-lg py-7 px-4 text-center space-y-1">
                <span className="font-serif font-medium text-xs tracking-[0.2em] text-[#d4d4d8] uppercase block">
                  CENTRAL LOUNGE DANCE FLOOR
                </span>
                <span className="text-[10px] text-[#71717a] font-mono tracking-wider block">
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
                      ? "bg-[#1d2130] border-[#c5a880] shadow-md"
                      : "bg-[#12141c] border-white/10 hover:border-white/20 hover:bg-[#161924]"
                  }`}
                >
                  <div className="font-serif font-bold text-xs text-white">BOOTH 1</div>
                  <div className="text-[10px] text-[#71717a]">Main Salon</div>
                  <div className="text-[11px] font-mono font-bold text-[#e6d5b8] mt-1.5">
                    Min. $500
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedBooth(BOOTHS[3])}
                  className={`p-3 rounded-lg text-left border transition-all cursor-pointer min-h-[44px] ${
                    selectedBooth.id === "main-booth-2"
                      ? "bg-[#1d2130] border-[#c5a880] shadow-md"
                      : "bg-[#12141c] border-white/10 hover:border-white/20 hover:bg-[#161924]"
                  }`}
                >
                  <div className="font-serif font-bold text-xs text-white">BOOTH 2</div>
                  <div className="text-[10px] text-[#71717a]">Main Salon</div>
                  <div className="text-[11px] font-mono font-bold text-[#e6d5b8] mt-1.5">
                    Min. $500
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedBooth(BOOTHS[4])}
                  className={`p-3 rounded-lg text-left border transition-all cursor-pointer min-h-[44px] ${
                    selectedBooth.id === "main-booth-3"
                      ? "bg-[#1d2130] border-[#c5a880] shadow-md"
                      : "bg-[#12141c] border-white/10 hover:border-white/20 hover:bg-[#161924]"
                  }`}
                >
                  <div className="font-serif font-bold text-xs text-white">BOOTH 3</div>
                  <div className="text-[10px] text-[#71717a]">Main Salon</div>
                  <div className="text-[11px] font-mono font-bold text-[#e6d5b8] mt-1.5">
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
                      ? "bg-[#1d2130] border-[#c5a880] shadow-md"
                      : "bg-[#12141c] border-white/10 hover:border-white/20 hover:bg-[#161924]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-xs text-white">CORNER VIP</span>
                    <span className="text-[10px] font-mono text-[#c5a880]">8 GUESTS</span>
                  </div>
                  <div className="text-[10px] text-[#71717a]">Elevated Nook</div>
                  <div className="text-xs font-mono font-bold text-[#e6d5b8] mt-1.5">
                    Min. $600 CAD
                  </div>
                </button>

                {/* MARBLE ISLAND BAR */}
                <div className="sm:col-span-7 bg-[#151821] border border-white/15 rounded-lg p-3.5 text-center flex flex-col justify-center">
                  <span className="font-serif font-semibold text-xs tracking-wider text-white block">
                    MARBLE ISLAND COCKTAIL BAR
                  </span>
                  <span className="text-[10px] text-[#71717a] font-mono mt-0.5">
                    25 UPHOLSTERED BAR STOOLS • WALK-INS ALWAYS WELCOME
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Selected Booth Detail & Fast Action Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#0f1117] border border-white/15 rounded-xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-sm border border-[#c5a880]/30 bg-[#12141c] text-[#e6d5b8] uppercase">
                  {selectedBooth.category}
                </span>
                <span className="text-xs font-mono text-[#a1a1aa] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#c5a880]" />
                  Capacity: {selectedBooth.capacity} Guests
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                {selectedBooth.name}
              </h3>

              <p className="text-xs text-[#a1a1aa] leading-relaxed">{selectedBooth.description}</p>
            </div>

            {/* Minimum Spend Card */}
            <div className="bg-[#12141c] border border-white/10 rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#a1a1aa]">Table Minimum Spend:</span>
                <span className="text-xl font-mono font-bold text-[#e6d5b8]">
                  ${selectedBooth.minSpend} CAD
                </span>
              </div>
              <div className="text-[11px] text-[#71717a] leading-tight">
                Applicable towards premium spirits, champagne, and tapas. Taxes and gratuity added
                at settlement.
              </div>
            </div>

            {/* Features list */}
            <div className="space-y-2.5">
              <span className="text-xs font-semibold text-white uppercase tracking-wider block">
                Hospitality Inclusions:
              </span>
              <ul className="space-y-2">
                {selectedBooth.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-xs text-[#d4d4d8]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880] flex-shrink-0 mt-0.5" />
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
              className="w-full min-h-[48px] py-3.5 px-6 rounded-md bg-[#c5a880] hover:bg-[#d4af37] text-[#08090b] font-semibold text-xs uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>CONFIGURE RESERVATION</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
