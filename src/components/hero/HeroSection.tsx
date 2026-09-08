"use client";

import { ArrowRight, Flame, GlassWater, Music, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
  onOpenBooking: () => void;
  language: "en" | "am";
}

export default function HeroSection({ onOpenBooking, language }: HeroSectionProps) {
  return (
    <section
      id="experience"
      className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-16 overflow-hidden ambient-bg"
    >
      {/* Dynamic Simulated Ceiling Grid Overlay */}
      <div className="absolute inset-0 ceiling-grid-overlay opacity-30 pointer-events-none" />

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#a855f7]/20 via-[#f43f5e]/15 to-[#06b6d4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Call to Actions (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Cultural & Location Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#a855f7]/30 bg-[#0f1118]/80 backdrop-blur-md shadow-lg shadow-[#a855f7]/10">
              <span className="w-2 h-2 rounded-full bg-[#f43f5e] animate-pulse" />
              <span className="font-mono text-xs tracking-wider text-[#d8b4fe] uppercase font-semibold">
                {language === "en"
                  ? "364 Queen St East • Downtown Toronto"
                  : "እንኳን ደህና መጡ • 364 ንግሥት ጎዳና ምስራቅ ቶሮንቶ"}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              WHERE NIGHTLIFE <br className="hidden sm:inline" />
              <span className="text-gradient-neon">MEETS ELEVATION</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#9ca3af] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {language === "en"
                ? "Immerse in Toronto's ultimate ultra-lounge experience. Overhead neon grid illumination, high-energy Afrobeats, Amapiano & R&B DJs, luxury VIP bottle service, and signature craft cocktails in the heart of Queen East."
                : "በቶሮንቶ ምርጥ የምሽት ክበብ እና ላውንጅ ይደሰቱ። ዘመናዊ የኒዮን መብራቶች፣ አስደሳች የአፍሮቢትስ እና R&B ሙዚቃዎች፣ የቪአይፒ ቦቲል ሰርቪስ እና ልዩ ኮክቴሎች።"}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#a855f7] via-[#c026d3] to-[#f43f5e] text-white font-bold text-base tracking-wide shadow-xl shadow-[#a855f7]/30 hover:shadow-[#a855f7]/60 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer min-h-[48px]"
              >
                <Sparkles className="w-5 h-5 text-white" />
                <span>{language === "en" ? "Reserve VIP Booth" : "ቪአይፒ ቦታ ይያዙ"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#djs"
                className="w-full sm:w-auto px-7 py-4 rounded-xl border border-white/15 bg-[#151824]/80 hover:bg-[#1c2030] text-white font-semibold text-base transition-colors flex items-center justify-center gap-2.5 min-h-[48px]"
              >
                <Music className="w-5 h-5 text-[#06b6d4]" />
                <span>{language === "en" ? "Weekend DJ Lineup" : "የሳምንቱ ዲጄዎች"}</span>
              </a>
            </div>

            {/* High-Value Highlights Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
              <div className="p-3 rounded-xl bg-[#0f1118]/60 border border-white/5 text-left">
                <div className="flex items-center gap-1.5 text-[#f43f5e] mb-1">
                  <Music className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold">DJs FRI–SUN</span>
                </div>
                <div className="text-[11px] text-[#9ca3af]">Afrobeats & R&B</div>
              </div>

              <div className="p-3 rounded-xl bg-[#0f1118]/60 border border-white/5 text-left">
                <div className="flex items-center gap-1.5 text-[#a855f7] mb-1">
                  <Flame className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold">SPARKLER SHOW</span>
                </div>
                <div className="text-[11px] text-[#9ca3af]">With VIP Packages</div>
              </div>

              <div className="p-3 rounded-xl bg-[#0f1118]/60 border border-white/5 text-left">
                <div className="flex items-center gap-1.5 text-[#06b6d4] mb-1">
                  <GlassWater className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold">MARBLE BAR</span>
                </div>
                <div className="text-[11px] text-[#9ca3af]">Craft Mixology</div>
              </div>

              <div className="p-3 rounded-xl bg-[#0f1118]/60 border border-white/5 text-left">
                <div className="flex items-center gap-1.5 text-[#f59e0b] mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold">19+ STRICT</span>
                </div>
                <div className="text-[11px] text-[#9ca3af]">Upscale Etiquette</div>
              </div>
            </div>
          </div>

          {/* Right Venue Showcase Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#a855f7]/40 shadow-2xl shadow-black/90 group">
              {/* Glowing Corner Accents */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#a855f7] to-[#f43f5e] rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />

              <div className="relative bg-[#0f1118] rounded-2xl overflow-hidden">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/venue-interior.jpg"
                    alt="XO Lounge Toronto Neon Grid Ceiling and Bar"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-transparent to-black/30" />
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#d8b4fe] bg-[#a855f7]/20 border border-[#a855f7]/40 px-2.5 py-0.5 rounded-full">
                      PHYSICAL VENUE PREVIEW
                    </span>
                    <span className="text-xs font-mono text-[#f59e0b]">364 QUEEN ST E</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white">
                    Cyberpunk Neon Ceiling & Marble Island
                  </h3>

                  <p className="text-xs text-[#9ca3af] leading-relaxed">
                    Designed for memorable birthday celebrations, bachelorettes, and high-energy
                    weekend nights with full LED video stage and luxury seating.
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs">
                    <span className="text-[#9ca3af]">Call to RSVP Mon–Sun:</span>
                    <a
                      href="tel:+14374730042"
                      className="text-white font-mono font-bold hover:text-[#f43f5e] transition-colors"
                    >
                      +1 437-473-0042
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
