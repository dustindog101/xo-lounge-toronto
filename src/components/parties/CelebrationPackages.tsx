"use client";

import { ArrowRight, Phone } from "lucide-react";

interface PartiesProps {
  onOpenBooking: () => void;
  language: "en" | "am";
}

export default function CelebrationPackages({ onOpenBooking, language }: PartiesProps) {
  return (
    <section
      id="parties"
      className="scroll-mt-28 py-24 bg-[#08090b] border-t border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="font-sculpted text-xs tracking-[0.25em] text-[#d4af37] uppercase block font-semibold">
            SPECIAL OCCASIONS & PRIVATE HOSPITALITY
          </span>

          <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white tracking-tight">
            {language === "en" ? "Celebrate at XO Lounge" : "ልዩ በዓላትዎን በኤክስኦ ያክብሩ"}
          </h2>

          <p className="text-sm sm:text-base text-[#9ea2ac]">
            {language === "en"
              ? "From unforgettable milestone birthdays and seasonal celebrations to full corporate venue buyouts, we deliver tailored hospitality with seamless execution."
              : "የልደት በዓላት፣ የበዓል ዝግጅቶች እና የግል ፕሮግራሞች።"}
          </p>
        </div>

        {/* 2 Feature Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Panel 1: Birthday Packages */}
          <div className="border border-white/10 bg-[#0b0d13] p-8 sm:p-10 shadow-xl relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-sculpted text-xs text-[#d4af37] tracking-widest uppercase font-bold">
                  BIRTHDAY MILESTONES
                </span>
                <span className="font-mono text-[11px] text-[#6b707d] uppercase tracking-wider">
                  COMPLIMENTARY PRIVILEGES
                </span>
              </div>

              <h3 className="font-editorial text-3xl font-normal text-white tracking-wide">
                The Signature Birthday Milestone
              </h3>

              <p className="text-xs sm:text-sm text-[#9ea2ac] leading-relaxed">
                Celebrate your milestone in Corktown's premier destination. When securing a bottle
                service table for your celebration, our team prepares our dedicated milestone
                amenities at no supplemental charge.
              </p>

              <div className="space-y-4 pt-2 border-t border-white/5">
                <div className="space-y-1">
                  <strong className="text-white text-xs block font-editorial tracking-wide">
                    Curated Bottle Presentation Ceremony
                  </strong>
                  <p className="text-xs text-[#6b707d] leading-relaxed">
                    VIP servers present your bottle selection directly to your booth with custom
                    sparklers and fanfare.
                  </p>
                </div>

                <div className="space-y-1">
                  <strong className="text-white text-xs block font-editorial tracking-wide">
                    Personalized Celebration Display
                  </strong>
                  <p className="text-xs text-[#6b707d] leading-relaxed">
                    Custom illuminated marquee sign presenting the guest of honor's name or custom
                    phrase upon arrival.
                  </p>
                </div>

                <div className="space-y-1">
                  <strong className="text-white text-xs block font-editorial tracking-wide">
                    Expedited Bypass Admissions
                  </strong>
                  <p className="text-xs text-[#6b707d] leading-relaxed">
                    Direct expedited line bypass for your entire reserved party with immediate table
                    placement.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full min-h-[48px] py-3.5 px-6 rounded-sm bg-[#d4af37] hover:bg-[#e6c34e] text-[#040507] font-sculpted font-bold text-xs uppercase tracking-[0.18em] shadow-md shadow-black/80 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Reserve Birthday Table</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Panel 2: Venue Buyouts */}
          <div className="border border-white/10 bg-[#0b0d13] p-8 sm:p-10 shadow-xl relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-sculpted text-xs text-[#d4af37] tracking-widest uppercase font-bold">
                  EXCLUSIVE VENUE BUYOUTS
                </span>
                <span className="font-mono text-[11px] text-[#6b707d] uppercase tracking-wider">
                  CAPACITY: UP TO 150 GUESTS
                </span>
              </div>

              <h3 className="font-editorial text-3xl font-normal text-white tracking-wide">
                Private Gatherings & Corporate Buyouts
              </h3>

              <p className="text-xs sm:text-sm text-[#9ea2ac] leading-relaxed">
                Planning a corporate reception, brand launch, or private diaspora celebration? XO
                Lounge accommodates complete venue buyouts with bespoke mixology, passed tapas
                stations, and full audio/visual takeover.
              </p>

              <div className="space-y-4 pt-2 border-t border-white/5">
                <div className="space-y-1">
                  <strong className="text-white text-xs block font-editorial tracking-wide">
                    Full Audio/Visual Screen Takeover
                  </strong>
                  <p className="text-xs text-[#6b707d] leading-relaxed">
                    Showcase brand assets, custom motion graphics, or video loops across our main
                    stage acoustic wall and screens.
                  </p>
                </div>

                <div className="space-y-1">
                  <strong className="text-white text-xs block font-editorial tracking-wide">
                    Bespoke Mixology & Passed Tapas Catering
                  </strong>
                  <p className="text-xs text-[#6b707d] leading-relaxed">
                    Tailored cocktail menus featuring Ethiopian honey infusions and passed savory
                    tapas stations.
                  </p>
                </div>

                <div className="space-y-1">
                  <strong className="text-white text-xs block font-editorial tracking-wide">
                    Dedicated Security & Private Concierge
                  </strong>
                  <p className="text-xs text-[#6b707d] leading-relaxed">
                    Discreet guest check-in, coat check, and dedicated service team throughout your
                    private event.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="tel:+14374730042"
                className="w-full min-h-[48px] py-3.5 px-6 rounded-sm border border-white/20 hover:border-[#d4af37] bg-[#141722] hover:bg-[#1a1e2c] text-white text-xs font-sculpted font-semibold uppercase tracking-[0.18em] flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Inquire About Private Buyout: +1 (437) 473-0042</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
