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
  badgeColor: string;
}

const BOOTHS: BoothData[] = [
  {
    id: "stage-vip-a",
    name: "DJ Stage VIP Booth A",
    category: "Prime Stage View",
    capacity: 10,
    minSpend: 750,
    description:
      "Front-row stage experience right beside the DJ deck and main LED visual wall. High-energy epicenter of the club.",
    features: [
      "10 Complimentary VIP admissions",
      "Sparkler Bottle Parade presentation",
      "Prime front-row view of guest DJs",
      "Dedicated VIP bottle host & security check",
    ],
    badgeColor: "border-[#f43f5e] text-[#f43f5e] bg-[#f43f5e]/10",
  },
  {
    id: "stage-vip-b",
    name: "DJ Stage VIP Booth B",
    category: "Prime Stage View",
    capacity: 10,
    minSpend: 750,
    description:
      "Flanking the right of the DJ booth with direct proximity to the dance floor and visual displays.",
    features: [
      "10 Complimentary VIP admissions",
      "Sparkler Bottle Parade presentation",
      "Direct sound & visual immersion",
      "Dedicated bottle service staff",
    ],
    badgeColor: "border-[#f43f5e] text-[#f43f5e] bg-[#f43f5e]/10",
  },
  {
    id: "main-booth-1",
    name: "Main Floor Banquette #1",
    category: "Main Room",
    capacity: 8,
    minSpend: 450,
    description:
      "Plush velvet upholstered booth along the main lounge corridor under the dynamic neon ceiling grid.",
    features: [
      "8 Complimentary VIP admissions",
      "Full sightline of the dance floor",
      "Standard and premium mixers included",
      "Speedy bar access",
    ],
    badgeColor: "border-[#a855f7] text-[#a855f7] bg-[#a855f7]/10",
  },
  {
    id: "main-booth-2",
    name: "Main Floor Banquette #2",
    category: "Main Room",
    capacity: 8,
    minSpend: 450,
    description:
      "Central booth position ideal for birthday groups wanting to be in the middle of the room's energy.",
    features: [
      "8 Complimentary VIP admissions",
      "Free Birthday LED letterboard on request",
      "Bottle presentation with sparkler",
      "Dedicated server",
    ],
    badgeColor: "border-[#a855f7] text-[#a855f7] bg-[#a855f7]/10",
  },
  {
    id: "main-booth-3",
    name: "Main Floor Banquette #3",
    category: "Main Room",
    capacity: 6,
    minSpend: 400,
    description:
      "Sleek seating for smaller groups desiring upscale bottle comfort without sacrificing the vibe.",
    features: [
      "6 Complimentary VIP admissions",
      "Mixers & ice refills included",
      "Great acoustics and bar proximity",
    ],
    badgeColor: "border-[#a855f7] text-[#a855f7] bg-[#a855f7]/10",
  },
  {
    id: "corner-vip",
    name: "Exclusive Corner VIP Banquette",
    category: "Intimate VIP",
    capacity: 8,
    minSpend: 500,
    description:
      "Slightly elevated private corner booth offering premium privacy while still overlooking the entire venue.",
    features: [
      "8 VIP line-bypass entries",
      "Private corner feel with wrap-around seating",
      "Sparkler presentation included",
      "Ideal for bachelorettes and private toasts",
    ],
    badgeColor: "border-[#f59e0b] text-[#f59e0b] bg-[#f59e0b]/10",
  },
];

export default function VenueFloorplan({ onSelectBooth, language }: VenueFloorplanProps) {
  const [selectedBooth, setSelectedBooth] = useState<BoothData>(BOOTHS[0]);

  return (
    <section id="floorplan" className="py-24 bg-[#07080b] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#a855f7]/30 bg-[#151824] text-xs font-mono text-[#d8b4fe]">
            <Sparkles className="w-3.5 h-3.5 text-[#a855f7]" />
            <span>INTERACTIVE VENUE MAP</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {language === "en" ? "EXPLORE THE VENUE & VIP BOOTHS" : "የቦታ ካርታ እና የቪአይፒ መቀመጫዎች"}
          </h2>

          <p className="text-sm sm:text-base text-[#9ca3af]">
            {language === "en"
              ? "Select your desired VIP table area on our interactive venue map to check capacity, minimum spend requirements, and reserve your spot instantly."
              : "የሚፈልጉትን የቪአይፒ ጠረጴዛ ይምረጡ፤ የሰው ብዛት፣ ዝቅተኛ ወጪ እና ጥቅማጥቅሞችን ይመልከቱ።"}
          </p>
        </div>

        {/* 2-Column Layout: Interactive Floor Map + Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Floor Map Graphic (7 cols) */}
          <div className="lg:col-span-7 bg-[#0b0d14] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <span className="text-xs font-mono text-[#9ca3af]">VENUE INTERIOR SCHEMATIC</span>
              <span className="text-xs font-mono text-[#a855f7] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                TAP ANY BOOTH TO INSPECT
              </span>
            </div>

            <div className="space-y-4">
              {/* DJ STAGE & LED WALL */}
              <div className="bg-gradient-to-r from-[#7c3aed] via-[#db2777] to-[#7c3aed] text-white p-3 rounded-xl text-center shadow-lg shadow-[#7c3aed]/20 border border-white/20">
                <span className="font-serif font-bold text-sm tracking-widest block">
                  🎧 DJ STAGE & 4K LED VIDEO WALL
                </span>
                <span className="text-[10px] text-white/80 font-mono tracking-wider">
                  WEEKEND HEADLINERS • AFROBEATS • R&B
                </span>
              </div>

              {/* STAGE VIP BOOTHS A & B */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedBooth(BOOTHS[0])}
                  className={`p-3 sm:p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    selectedBooth.id === "stage-vip-a"
                      ? "bg-[#f43f5e]/20 border-[#f43f5e] shadow-lg shadow-[#f43f5e]/30 scale-[1.02]"
                      : "bg-[#151824] border-white/10 hover:border-[#f43f5e]/50 hover:bg-[#1c2030]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif font-bold text-xs sm:text-sm text-white">
                      VIP BOOTH A
                    </span>
                    <span className="text-[10px] font-mono text-[#f43f5e] font-bold">
                      10 GUESTS
                    </span>
                  </div>
                  <div className="text-[11px] text-[#9ca3af]">Stage Left Prime</div>
                  <div className="text-xs font-mono font-bold text-[#f59e0b] mt-2">
                    Min. $750 CAD
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedBooth(BOOTHS[1])}
                  className={`p-3 sm:p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    selectedBooth.id === "stage-vip-b"
                      ? "bg-[#f43f5e]/20 border-[#f43f5e] shadow-lg shadow-[#f43f5e]/30 scale-[1.02]"
                      : "bg-[#151824] border-white/10 hover:border-[#f43f5e]/50 hover:bg-[#1c2030]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif font-bold text-xs sm:text-sm text-white">
                      VIP BOOTH B
                    </span>
                    <span className="text-[10px] font-mono text-[#f43f5e] font-bold">
                      10 GUESTS
                    </span>
                  </div>
                  <div className="text-[11px] text-[#9ca3af]">Stage Right Prime</div>
                  <div className="text-xs font-mono font-bold text-[#f59e0b] mt-2">
                    Min. $750 CAD
                  </div>
                </button>
              </div>

              {/* DANCE FLOOR (CENTRAL ZONE) */}
              <div className="bg-[#121522] border border-dashed border-[#a855f7]/40 rounded-xl py-8 px-4 text-center space-y-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#a855f7]/5 to-transparent animate-pulse" />
                <span className="font-serif font-bold text-xs sm:text-sm text-[#e5e7eb] tracking-wider block">
                  🕺 CENTRAL DANCE FLOOR
                </span>
                <span className="text-[11px] text-[#a855f7] font-mono block">
                  UNDER THE GEOMETRIC NEON LIGHT GRID
                </span>
              </div>

              {/* MAIN FLOOR BOOTHS 1, 2, 3 */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedBooth(BOOTHS[2])}
                  className={`p-2.5 sm:p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    selectedBooth.id === "main-booth-1"
                      ? "bg-[#a855f7]/20 border-[#a855f7] shadow-lg shadow-[#a855f7]/30 scale-[1.02]"
                      : "bg-[#151824] border-white/10 hover:border-[#a855f7]/50 hover:bg-[#1c2030]"
                  }`}
                >
                  <div className="font-serif font-bold text-xs text-white">BOOTH 1</div>
                  <div className="text-[10px] text-[#9ca3af]">Main Floor</div>
                  <div className="text-[11px] font-mono font-bold text-[#f59e0b] mt-1">
                    Min. $450
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedBooth(BOOTHS[3])}
                  className={`p-2.5 sm:p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    selectedBooth.id === "main-booth-2"
                      ? "bg-[#a855f7]/20 border-[#a855f7] shadow-lg shadow-[#a855f7]/30 scale-[1.02]"
                      : "bg-[#151824] border-white/10 hover:border-[#a855f7]/50 hover:bg-[#1c2030]"
                  }`}
                >
                  <div className="font-serif font-bold text-xs text-white">BOOTH 2</div>
                  <div className="text-[10px] text-[#9ca3af]">Main Floor</div>
                  <div className="text-[11px] font-mono font-bold text-[#f59e0b] mt-1">
                    Min. $450
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedBooth(BOOTHS[4])}
                  className={`p-2.5 sm:p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    selectedBooth.id === "main-booth-3"
                      ? "bg-[#a855f7]/20 border-[#a855f7] shadow-lg shadow-[#a855f7]/30 scale-[1.02]"
                      : "bg-[#151824] border-white/10 hover:border-[#a855f7]/50 hover:bg-[#1c2030]"
                  }`}
                >
                  <div className="font-serif font-bold text-xs text-white">BOOTH 3</div>
                  <div className="text-[10px] text-[#9ca3af]">Main Floor</div>
                  <div className="text-[11px] font-mono font-bold text-[#f59e0b] mt-1">
                    Min. $400
                  </div>
                </button>
              </div>

              {/* CORNER VIP & BAR SECTION */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedBooth(BOOTHS[5])}
                  className={`sm:col-span-5 p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    selectedBooth.id === "corner-vip"
                      ? "bg-[#f59e0b]/20 border-[#f59e0b] shadow-lg shadow-[#f59e0b]/30 scale-[1.02]"
                      : "bg-[#151824] border-white/10 hover:border-[#f59e0b]/50 hover:bg-[#1c2030]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-xs text-white">CORNER VIP</span>
                    <span className="text-[10px] font-mono text-[#f59e0b]">8 GUESTS</span>
                  </div>
                  <div className="text-[10px] text-[#9ca3af]">Elevated Nook</div>
                  <div className="text-xs font-mono font-bold text-[#f59e0b] mt-1">
                    Min. $500 CAD
                  </div>
                </button>

                {/* MARBLE ISLAND BAR */}
                <div className="sm:col-span-7 bg-gradient-to-r from-[#06b6d4]/10 via-[#3b82f6]/10 to-[#06b6d4]/10 border border-[#06b6d4]/30 rounded-xl p-3 text-center flex flex-col justify-center">
                  <span className="font-serif font-bold text-xs sm:text-sm text-[#67e8f9] block">
                    🍸 MARBLE ISLAND COCKTAIL BAR
                  </span>
                  <span className="text-[10px] text-[#9ca3af] font-mono">
                    25 LUXURY VELVET BAR STOOLS • WALK-INS WELCOME
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Selected Booth Detail & Fast Action Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#0f1118] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span
                  className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${selectedBooth.badgeColor}`}
                >
                  {selectedBooth.category.toUpperCase()}
                </span>
                <span className="text-xs font-mono text-[#9ca3af] flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#a855f7]" />
                  Up to {selectedBooth.capacity} Guests
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white">{selectedBooth.name}</h3>

              <p className="text-xs text-[#9ca3af] leading-relaxed">{selectedBooth.description}</p>
            </div>

            {/* Minimum Spend & Perk Highlights */}
            <div className="bg-[#151824] border border-white/10 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#9ca3af]">Minimum Bottle Spend:</span>
                <span className="text-xl font-mono font-bold text-gradient-gold">
                  ${selectedBooth.minSpend} CAD
                </span>
              </div>
              <div className="text-[11px] text-[#6b7280]">
                *Taxes and gratuity not included. Credit applied towards bottle packages of your
                choice.
              </div>
            </div>

            {/* Features list */}
            <div className="space-y-2.5">
              <span className="text-xs font-semibold text-white uppercase tracking-wider block">
                What's Included:
              </span>
              <ul className="space-y-2">
                {selectedBooth.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-xs text-[#d1d5db]">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" />
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
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#a855f7] via-[#c026d3] to-[#f43f5e] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#a855f7]/30 hover:shadow-[#a855f7]/50 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Reserve {selectedBooth.name}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
