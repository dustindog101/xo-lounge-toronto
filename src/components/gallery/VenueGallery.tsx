"use client";

import { ExternalLink, Play } from "lucide-react";
import Image from "next/image";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface GalleryProps {
  language: "en" | "am";
}

export default function VenueGallery({ language }: GalleryProps) {
  return (
    <section className="py-24 bg-[#040507] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#0b0d13] text-xs font-mono text-[#f3e5ab]">
            <InstagramIcon className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="tracking-widest uppercase">@XO_LOUNGE_TORONTO</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white tracking-tight">
            {language === "en" ? "Atmosphere & Social Archive" : "የክበቡ ገጽታ እና ቪዲዮዎች"}
          </h2>

          <p className="text-sm sm:text-base text-[#9ea2ac]">
            {language === "en"
              ? "Follow our after-dark moments, resident DJ sets, and celebration stories on Instagram."
              : "የቅርብ ጊዜ የምሽት ክስተቶችን እና የዲጄ ዝግጅቶችን በኢንስታግራም ይከታተሉ።"}
          </p>

          <div className="pt-2">
            <a
              href="https://www.instagram.com/xo_lounge_toronto/reels/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#0b0d13] hover:bg-[#141722] border border-white/10 hover:border-[#d4af37]/40 text-white text-xs font-mono font-medium tracking-wider transition-all min-h-[44px]"
            >
              <InstagramIcon className="w-4 h-4 text-[#d4af37]" />
              <span>Explore Official Instagram Reels</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#6b707d]" />
            </a>
          </div>
        </div>

        {/* Gallery Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Large Image Card (8 cols) */}
          <div className="md:col-span-8 rounded-xl overflow-hidden border border-white/15 relative group aspect-[16/10] bg-[#0b0d13] shadow-xl">
            <Image
              src="/images/venue-interior.jpg"
              alt="XO Lounge Toronto Main Room Interior"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040507] via-transparent to-black/20" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-sculpted text-[#d4af37] bg-[#040507]/80 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/10 uppercase mb-2 inline-block tracking-widest font-bold">
                  MAIN ROOM REALITY
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white tracking-wide">
                  Architectural Lighting & Marble Island
                </h3>
                <p className="text-xs text-[#d4d4d8] mt-1 max-w-md">
                  Overhead geometric light canopy casts rich multi-spectrum tones above the central
                  dance floor and marble cocktail island.
                </p>
              </div>

              <a
                href="https://www.instagram.com/xo_lounge_toronto/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 min-h-[40px] rounded-md bg-white/10 backdrop-blur-md hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-2 self-start sm:self-auto border border-white/20 transition-all uppercase tracking-wider"
              >
                <span>View on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Social Reel Preview Cards (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <a
              href="https://www.instagram.com/xo_lounge_toronto/reels/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl border border-white/10 bg-[#0b0d13] p-6 flex flex-col justify-between hover:border-[#d4af37]/40 transition-all group shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-sculpted tracking-widest text-[#d4af37] uppercase font-bold">
                    REELS & ARCHIVE
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>

                <h4 className="font-editorial text-2xl font-normal text-white group-hover:text-[#f3e5ab] transition-colors">
                  Weekend Bottle Presentations & Resident DJs
                </h4>

                <p className="text-xs text-[#9ea2ac] leading-relaxed">
                  Watch guest artists ignite the room and experience the full table service ceremony
                  in motion.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-2 text-xs font-mono text-[#d4af37]">
                <span>Watch Reel Library</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </div>
            </a>

            <div className="rounded-xl border border-white/10 bg-[#0b0d13] p-6 space-y-4">
              <span className="text-[10px] font-sculpted tracking-widest text-[#d4af37] uppercase font-bold">
                COMMUNITY ENGAGEMENT
              </span>

              <h4 className="font-editorial text-2xl font-normal text-white">
                Tag @xo_lounge_toronto
              </h4>

              <p className="text-xs text-[#9ea2ac] leading-relaxed">
                Tag your stories and reels with{" "}
                <span className="text-[#e6d5b8] font-mono">#xolounge #xotoronto</span> for inclusion
                in our weekly social highlights.
              </p>

              <div className="pt-2 flex gap-2">
                <a
                  href="https://www.threads.com/@xo_lounge_toronto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 min-h-[40px] rounded-md bg-[#12141c] border border-white/10 text-xs text-[#d4d4d8] hover:text-white font-mono flex items-center gap-1.5"
                >
                  <span>Threads</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.facebook.com/xoloungetoronto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 min-h-[40px] rounded-md bg-[#12141c] border border-white/10 text-xs text-[#d4d4d8] hover:text-white font-mono flex items-center gap-1.5"
                >
                  <span>Facebook</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
