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
    <section className="py-24 bg-[#0a0c12] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#f43f5e]/30 bg-[#151824] text-xs font-mono text-[#f43f5e]">
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>@XO_LOUNGE_TORONTO</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {language === "en" ? "ATMOSPHERE & SOCIAL REELS" : "የክበቡ ገጽታ እና ቪዲዮዎች"}
          </h2>

          <p className="text-sm sm:text-base text-[#9ca3af]">
            {language === "en"
              ? "Follow our latest night highlights, DJ sets, and celebration stories on Instagram."
              : "የቅርብ ጊዜ የምሽት ክስተቶችን እና የዲጄ ዝግጅቶችን በኢንስታግራም ይከታተሉ።"}
          </p>

          <div className="pt-2">
            <a
              href="https://www.instagram.com/xo_lounge_toronto/reels/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1c2030] hover:bg-[#252b42] border border-white/10 text-white text-xs font-mono font-semibold transition-all hover:border-[#a855f7]"
            >
              <InstagramIcon className="w-4 h-4 text-[#f43f5e]" />
              <span>Watch Official Instagram Reels</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#9ca3af]" />
            </a>
          </div>
        </div>

        {/* Gallery Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Large Image Card (8 cols) */}
          <div className="md:col-span-8 rounded-3xl overflow-hidden border border-[#a855f7]/30 relative group aspect-[16/10] bg-[#121522] shadow-2xl">
            <Image
              src="/images/venue-interior.jpg"
              alt="XO Lounge Toronto Neon Lighting and VIP Bar"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-transparent to-black/20" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono text-[#fef08a] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 uppercase mb-2 inline-block">
                  MAIN ROOM REALITY
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  The Neon Grid Ceiling & Marble Island
                </h3>
                <p className="text-xs text-[#d1d5db] mt-1 max-w-md">
                  Overhead multi-spectrum LED tubes create pulsating geometric light waves above the
                  dance floor and bar.
                </p>
              </div>

              <a
                href="https://www.instagram.com/xo_lounge_toronto/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-2 self-start sm:self-auto border border-white/20 transition-all"
              >
                <span>View on IG</span>
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
              className="flex-1 rounded-3xl border border-white/10 bg-[#0f1118] p-6 flex flex-col justify-between hover:border-[#f43f5e]/50 hover:bg-[#151824] transition-all group shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#f43f5e] font-bold">
                    REELS & HIGHLIGHTS
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#f43f5e]/20 flex items-center justify-center text-[#f43f5e] group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-current" />
                  </div>
                </div>

                <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#fef08a] transition-colors">
                  Weekend Bottle Parades & Live DJ Energy
                </h4>

                <p className="text-xs text-[#9ca3af] leading-relaxed">
                  Watch guest DJs ignite the dance floor and witness the full sparkler bottle train
                  in action.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-2 text-xs font-mono text-[#d8b4fe]">
                <span>Watch Reel Library</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </div>
            </a>

            <div className="rounded-3xl border border-white/10 bg-[#0f1118] p-6 space-y-4">
              <span className="text-xs font-mono text-[#a855f7] font-bold">SOCIAL COMMUNITY</span>

              <h4 className="font-serif text-lg font-bold text-white">Tag @xo_lounge_toronto</h4>

              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Use tags <span className="text-[#fef08a] font-mono">#xolounge #xo #toronto</span> on
                your stories and reels for a chance to be featured on our weekly recap.
              </p>

              <div className="pt-2 flex gap-2">
                <a
                  href="https://www.threads.com/@xo_lounge_toronto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#151824] border border-white/10 text-xs text-[#d1d5db] hover:text-white font-mono flex items-center gap-1.5"
                >
                  <span>Threads</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.facebook.com/xoloungetoronto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#151824] border border-white/10 text-xs text-[#d1d5db] hover:text-white font-mono flex items-center gap-1.5"
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
