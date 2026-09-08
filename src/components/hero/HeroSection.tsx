"use client";

import { ArrowRight, Compass, GlassWater, Music, Sparkles } from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
  onOpenBooking: () => void;
  language: "en" | "am";
}

export default function HeroSection({ onOpenBooking, language }: HeroSectionProps) {
  return (
    <section
      id="experience"
      className="relative min-h-[100dvh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#08090b] scroll-mt-28"
    >
      {/* Subtle Warm Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#08090b]/50 to-[#08090b] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            {/* Location & Status Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#c5a880]/30 bg-[#12141c]">
              <span className="w-2 h-2 rounded-full bg-[#c5a880]" />
              <span className="font-mono text-[11px] tracking-[0.2em] text-[#e6d5b8] uppercase">
                {language === "en"
                  ? "364 Queen St East • Corktown Toronto"
                  : "364 ንግሥት ጎዳና ምስራቅ • ቶሮንቶ"}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                {language === "en" ? (
                  <>
                    WHERE SOUND <br />
                    <span className="text-[#c5a880]">MEETS SANCTUARY.</span>
                  </>
                ) : (
                  <>
                    የምሽት ህይወት <br />
                    <span className="text-[#c5a880]">ከከፍተኛ ድባብ ጋር</span>
                  </>
                )}
              </h1>
              {language === "en" && (
                <p className="font-serif italic text-base sm:text-lg text-[#a1a1aa] tracking-wide">
                  An elevated East African & global nightlife experience in Corktown.
                </p>
              )}
            </div>

            {/* Editorial Description */}
            <p className="text-sm sm:text-base text-[#a1a1aa] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {language === "en"
                ? "XO Lounge redefines Toronto nightlife. Experience custom architectural illumination, curated Afrobeats, Amapiano and R&B weekend DJ lineups, private VIP bottle service booths, and signature diaspora-infused craft cocktails."
                : "በቶሮንቶ ምርጥ የምሽት ክበብ እና ላውንጅ ይደሰቱ። ዘመናዊ መብራቶች፣ አስደሳች የአፍሮቢትስ እና R&B ሙዚቃዎች፣ የቪአይፒ ቦቲል ሰርቪስ እና ልዩ ኮክቴሎች።"}
            </p>

            {/* Refined Luxury Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-md bg-[#c5a880] hover:bg-[#d4af37] text-[#08090b] font-semibold text-xs sm:text-sm tracking-[0.15em] uppercase transition-all flex items-center justify-center gap-3 cursor-pointer min-h-[48px] shadow-lg shadow-black/40"
              >
                <Sparkles className="w-4 h-4 text-[#08090b]" />
                <span>{language === "en" ? "RESERVE VIP TABLE" : "ቪአይፒ ቦታ ይያዙ"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#djs"
                className="w-full sm:w-auto px-7 py-4 rounded-md border border-white/20 hover:border-[#c5a880] hover:text-[#e6d5b8] text-white font-medium text-xs sm:text-sm tracking-[0.15em] uppercase transition-colors flex items-center justify-center gap-2.5 min-h-[48px]"
              >
                <Music className="w-4 h-4 text-[#c5a880]" />
                <span>{language === "en" ? "DJ PROGRAMMING" : "የሳምንቱ ዲጄዎች"}</span>
              </a>
            </div>

            {/* Restrained Architectural Highlights Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
              <div className="p-3.5 rounded-md bg-[#11131a] border border-white/5 text-left">
                <div className="flex items-center gap-1.5 text-[#c5a880] mb-1">
                  <Music className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-mono tracking-wider font-semibold uppercase">
                    DJs FRI–SUN
                  </span>
                </div>
                <div className="text-[11px] text-[#71717a]">Afrobeats, Amapiano & R&B</div>
              </div>

              <div className="p-3.5 rounded-md bg-[#11131a] border border-white/5 text-left">
                <div className="flex items-center gap-1.5 text-[#c5a880] mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-mono tracking-wider font-semibold uppercase">
                    VIP BOOTHS
                  </span>
                </div>
                <div className="text-[11px] text-[#71717a]">Dedicated Concierge Host</div>
              </div>

              <div className="p-3.5 rounded-md bg-[#11131a] border border-white/5 text-left">
                <div className="flex items-center gap-1.5 text-[#c5a880] mb-1">
                  <GlassWater className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-mono tracking-wider font-semibold uppercase">
                    CRAFT BAR
                  </span>
                </div>
                <div className="text-[11px] text-[#71717a]">Diaspora Botanicals & Bites</div>
              </div>

              <div className="p-3.5 rounded-md bg-[#11131a] border border-white/5 text-left">
                <div className="flex items-center gap-1.5 text-[#c5a880] mb-1">
                  <Compass className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-mono tracking-wider font-semibold uppercase">
                    CORKTOWN
                  </span>
                </div>
                <div className="text-[11px] text-[#71717a]">Queen East & Parliament</div>
              </div>
            </div>
          </div>

          {/* Right Venue Showcase Monograph (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-white/15 bg-[#10121a] shadow-2xl shadow-black/80">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/venue-interior.jpg"
                  alt="XO Lounge Toronto Interior with custom geometric lighting and marble bar"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-transparent to-black/20" />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#c5a880] uppercase">
                    MAIN ROOM ARCHITECTURE
                  </span>
                  <span className="text-[10px] font-mono text-[#71717a]">364 QUEEN ST E</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                  Geometric Illumination & Marble Bar
                </h3>

                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  Tailored for celebration milestones, weekend table service, and private buyouts.
                  Featuring state-of-the-art acoustic tuning and elevated booth perspectives.
                </p>

                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-[#71717a]">Table RSVP Direct:</span>
                  <a
                    href="tel:+14374730042"
                    className="text-[#e6d5b8] font-mono font-medium hover:text-white transition-colors"
                  >
                    +1 437-473-0042
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
