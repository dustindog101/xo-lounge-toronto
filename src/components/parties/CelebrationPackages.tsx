"use client";

import { ArrowRight, Building2, Crown, Gift, Phone, ShieldCheck, Sparkles } from "lucide-react";

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
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c5a880]/30 bg-[#12141c] text-xs font-mono text-[#e6d5b8]">
            <Gift className="w-3.5 h-3.5 text-[#c5a880]" />
            <span className="tracking-widest uppercase">
              SPECIAL OCCASIONS & PRIVATE HOSPITALITY
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {language === "en" ? "CELEBRATE AT XO LOUNGE" : "ልዩ በዓላትዎን በኤክስኦ ያክብሩ"}
          </h2>

          <p className="text-sm sm:text-base text-[#a1a1aa]">
            {language === "en"
              ? "From unforgettable milestone birthdays and seasonal celebrations to full corporate venue buyouts, we deliver tailored hospitality with seamless execution."
              : "የልደት በዓላት፣ የበዓል ዝግጅቶች እና የግል ፕሮግራሞች።"}
          </p>
        </div>

        {/* 2 Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Birthday Packages */}
          <div className="bg-[#0f1117] border border-white/10 rounded-xl p-8 sm:p-10 shadow-xl relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-[10px] font-mono tracking-widest text-[#c5a880] uppercase font-bold">
                  BIRTHDAY MILESTONES
                </span>
                <span className="text-[10px] font-mono text-[#a1a1aa] uppercase tracking-wider">
                  COMPLIMENTARY CONCIERGE PERKS
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                The Signature Birthday Milestone
              </h3>

              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                Celebrate your milestone in Corktown's premier destination. When securing a bottle
                service table for your celebration, our team prepares our dedicated milestone
                amenities at no supplemental charge.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#12141c] border border-white/5">
                  <Sparkles className="w-4 h-4 text-[#c5a880] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-xs block font-medium">
                      Curated Bottle Presentation
                    </strong>
                    <span className="text-[11px] text-[#71717a]">
                      VIP servers present your selection directly to your booth with personalized
                      service.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#12141c] border border-white/5">
                  <Crown className="w-4 h-4 text-[#c5a880] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-xs block font-medium">
                      Personalized Celebration Display
                    </strong>
                    <span className="text-[11px] text-[#71717a]">
                      Custom illuminated marquee sign presenting the guest of honor's name or custom
                      phrase.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#12141c] border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-[#c5a880] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-xs block font-medium">
                      Expedited Bypass Admissions
                    </strong>
                    <span className="text-[11px] text-[#71717a]">
                      Direct entry for your entire reserved party with immediate table placement.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full min-h-[48px] py-3.5 px-6 rounded-md bg-[#c5a880] hover:bg-[#d4af37] text-[#08090b] text-xs font-semibold uppercase tracking-[0.15em] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Reserve Birthday Table</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Christmas Parties & Private Buyouts */}
          <div className="bg-[#0f1117] border border-white/10 rounded-xl p-8 sm:p-10 shadow-xl relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-[10px] font-mono tracking-widest text-[#c5a880] uppercase font-bold">
                  EXCLUSIVE VENUE BUYOUTS
                </span>
                <span className="text-[10px] font-mono text-[#a1a1aa] uppercase tracking-wider">
                  CAPACITY: UP TO 150 GUESTS
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                Private Gatherings & Corporate Buyouts
              </h3>

              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                Planning a seasonal corporate reception, creative launch, or private diaspora gala?
                XO Lounge accommodates complete venue buyouts with bespoke mixology, tapas catering,
                and full audio/visual takeover.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#12141c] border border-white/5">
                  <Building2 className="w-4 h-4 text-[#c5a880] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-xs block font-medium">
                      Full Audio/Visual Screen Takeover
                    </strong>
                    <span className="text-[11px] text-[#71717a]">
                      Showcase brand assets, custom motion graphics, or video loops across the main
                      stage screen.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#12141c] border border-white/5">
                  <Sparkles className="w-4 h-4 text-[#c5a880] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-xs block font-medium">
                      Bespoke Mixology & Diaspora Catering
                    </strong>
                    <span className="text-[11px] text-[#71717a]">
                      Custom cocktail menus and passed tapas stations tailored to dietary
                      specifications.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#12141c] border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-[#c5a880] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-xs block font-medium">
                      Dedicated Security & Private Host Team
                    </strong>
                    <span className="text-[11px] text-[#71717a]">
                      Discreet guest check-in, coat check, and attentive service throughout the
                      evening.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="tel:+14374730042"
                className="w-full min-h-[48px] py-3.5 px-6 rounded-md border border-white/15 bg-[#12141c] hover:bg-[#181a24] text-white text-xs font-semibold uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#c5a880]" />
                <span>Inquire About Private Buyout: +1 437-473-0042</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
