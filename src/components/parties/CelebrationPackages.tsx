"use client";

import { ArrowRight, Flame, Gift, Phone, ShieldCheck, Sparkles, Trophy } from "lucide-react";

interface PartiesProps {
  onOpenBooking: () => void;
  language: "en" | "am";
}

export default function CelebrationPackages({ onOpenBooking, language }: PartiesProps) {
  return (
    <section id="parties" className="py-24 bg-[#07080b] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#f43f5e]/30 bg-[#151824] text-xs font-mono text-[#f43f5e]">
            <Gift className="w-3.5 h-3.5" />
            <span>SPECIAL OCCASIONS & BUYOUTS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {language === "en" ? "CELEBRATE AT XO LOUNGE" : "ልዩ በዓላትዎን በኤክስኦ ያክብሩ"}
          </h2>

          <p className="text-sm sm:text-base text-[#9ca3af]">
            {language === "en"
              ? "From unforgettable birthday milestone blowouts and holiday / Christmas parties to full venue corporate buyouts, we provide complete bespoke hospitality."
              : "የልደት በዓላት፣ የገናና የበዓል ዝግጅቶች እና የግል ፕሮግራሞች።"}
          </p>
        </div>

        {/* 2 Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Birthday Packages */}
          <div className="bg-[#0f1118] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#a855f7]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#a855f7] bg-[#a855f7]/15 border border-[#a855f7]/30 px-3 py-1 rounded-full font-bold">
                  BIRTHDAY MILESTONES
                </span>
                <span className="text-xs font-mono text-[#fef08a]">COMPLIMENTARY PERKS</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                The Ultimate Birthday Package
              </h3>

              <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                Make your birthday the talk of Toronto. When booking bottle service for your
                birthday at XO Lounge, you receive our signature celebration package at no extra
                charge.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#151824] border border-white/5">
                  <Flame className="w-5 h-5 text-[#f43f5e] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-xs block">Full Sparkler Train Parade</strong>
                    <span className="text-[11px] text-[#9ca3af]">
                      VIP servers deliver your bottles with radiant sparklers to your booth.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#151824] border border-white/5">
                  <Sparkles className="w-5 h-5 text-[#a855f7] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-xs block">Custom LED Marquee Sign</strong>
                    <span className="text-[11px] text-[#9ca3af]">
                      Lighted marquee letterboard displaying your name or customized celebration
                      motto.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#151824] border border-white/5">
                  <Trophy className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-xs block">
                      Line-Bypass for Your Entire Crew
                    </strong>
                    <span className="text-[11px] text-[#9ca3af]">
                      No waiting in line; priority wristbands upon arrival at the door.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#f43f5e] text-white text-sm font-bold shadow-lg shadow-[#a855f7]/30 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Birthday VIP Booth</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Christmas Parties & Private Buyouts */}
          <div className="bg-[#0f1118] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#06b6d4]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#06b6d4] bg-[#06b6d4]/15 border border-[#06b6d4]/30 px-3 py-1 rounded-full font-bold">
                  HOLIDAY & CORPORATE BUYOUTS
                </span>
                <span className="text-xs font-mono text-[#9ca3af]">CAPACITY: UP TO 150</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Holiday Parties & Private Events
              </h3>

              <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                Hosting a Christmas company party, brand launch, or private diaspora gathering? XO
                Lounge offers full venue buyouts with dedicated bartenders, custom catering, and
                complete sound & LED screen branding.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#151824] border border-white/5">
                  <ShieldCheck className="w-5 h-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-xs block">
                      Full Audio/Visual & Screen Takeover
                    </strong>
                    <span className="text-[11px] text-[#9ca3af]">
                      Display your corporate logo or private video loops across our high-definition
                      DJ stage LED wall.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#151824] border border-white/5">
                  <Sparkles className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-xs block">
                      Custom Cocktails & Catering
                    </strong>
                    <span className="text-[11px] text-[#9ca3af]">
                      Tailored drink menus and finger-food tapas stations customized to your dietary
                      needs.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#151824] border border-white/5">
                  <Gift className="w-5 h-5 text-[#f43f5e] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-xs block">
                      Private Security & Dedicated Coat Check
                    </strong>
                    <span className="text-[11px] text-[#9ca3af]">
                      Seamless VIP experience for all attendees from arrival to departure.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="tel:+14374730042"
                className="w-full py-3.5 px-6 rounded-xl border border-white/15 bg-[#151824] hover:bg-[#1c2030] text-white text-sm font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#f43f5e]" />
                <span>Inquire About Private Buyout: +1 437-473-0042</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
