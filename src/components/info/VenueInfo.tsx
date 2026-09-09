"use client";

import { Bus, Car, Mail, MapPin, Navigation, Phone, ShieldAlert, Sparkles } from "lucide-react";

interface InfoProps {
  language: "en" | "am";
}

export default function VenueInfo({ language }: InfoProps) {
  const hours = [
    { day: "Monday", time: "7:00 PM – 2:00 AM", status: "Lounge & RSVP" },
    { day: "Tuesday", time: "CLOSED", status: "Private Maintenance", closed: true },
    { day: "Wednesday", time: "7:00 PM – 2:00 AM", status: "Afro-Beats & Cocktails" },
    { day: "Thursday", time: "7:00 PM – 2:00 AM", status: "Industry Escape" },
    { day: "Friday", time: "8:00 PM – 3:00 AM", status: "XO Fridays (Live DJs)" },
    { day: "Saturday", time: "8:00 PM – 3:00 AM", status: "XO Saturdays (Premier Lineup)" },
    { day: "Sunday", time: "7:00 PM – 2:00 AM", status: "Sunday Social" },
  ];

  return (
    <section
      id="location"
      className="py-24 bg-[#040507] border-t border-white/5 relative scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="font-sculpted text-xs tracking-[0.25em] text-[#d4af37] uppercase block font-semibold">
            LOCATION & GUEST CONCIERGE
          </span>

          <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white tracking-tight">
            {language === "en" ? "Location & Operating Hours" : "አድራሻ እና የስራ ሰዓት"}
          </h2>

          <p className="text-sm sm:text-base text-[#9ea2ac]">
            {language === "en"
              ? "Conveniently situated at 364 Queen St East near Parliament Street in Toronto's historic Corktown neighborhood."
              : "በቶሮንቶ ኮርክታውን አካባቢ፣ 364 ንግሥት ጎዳና ምስራቅ ላይ ይገኛል።"}
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Col 1: Contact & Location */}
          <div className="bg-[#0b0d13] border border-white/10 p-8 space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <span className="font-sculpted text-xs text-[#d4af37] font-bold uppercase tracking-[0.2em] block">
                VENUE ADDRESS & ACCESS
              </span>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#12141c] text-[#d4af37] border border-white/5 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-editorial font-bold text-white text-base">
                      XO Lounge Toronto
                    </h4>
                    <p className="text-sm text-[#d4d4d8] mt-0.5">364 Queen St East</p>
                    <p className="text-xs text-[#9ea2ac]">Toronto, ON, Canada, M5A 1T1</p>
                    <span className="text-[11px] font-mono text-[#d4af37] block mt-1">
                      Cross street: Parliament St
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#12141c] text-[#d4af37] border border-white/5 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#6b707d] block font-mono uppercase tracking-wider">
                      Concierge & RSVP:
                    </span>
                    <a
                      href="tel:+14374730042"
                      className="text-sm font-mono font-bold text-[#f3e5ab] hover:text-white transition-colors"
                    >
                      +1 (437) 473-0042
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#12141c] text-[#d4af37] border border-white/5 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#6b707d] block font-mono uppercase tracking-wider">
                      Email Concierge:
                    </span>
                    <a
                      href="mailto:info@xolounge.ca"
                      className="text-sm font-mono text-[#d4d4d8] hover:text-white transition-colors"
                    >
                      info@xolounge.ca
                    </a>
                  </div>
                </div>
              </div>

              {/* Transit & Parking Details */}
              <div className="p-4 bg-[#040507] border border-white/5 space-y-2.5 text-xs text-[#9ea2ac]">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Bus className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>TTC 501 Queen Streetcar</span>
                </div>
                <p>Steps from the Queen & Parliament stop. 24-hour transit access.</p>
                <div className="flex items-center gap-2 text-white font-medium pt-1">
                  <Car className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Street & Municipal Parking</span>
                </div>
                <p>Street parking on Queen St E and adjacent Corktown side streets after 6 PM.</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=364+Queen+St+E,+Toronto,+ON+M5A+1T1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] py-3 px-4 rounded-sm bg-[#d4af37] hover:bg-[#e6c34e] text-[#040507] text-xs font-sculpted font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-2 shadow-md shadow-black/80 transition-all cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions in Google Maps</span>
            </a>
          </div>

          {/* Col 2: Operating Hours Schedule */}
          <div className="bg-[#0b0d13] border border-white/10 p-8 space-y-6 shadow-xl">
            <span className="text-[10px] font-sculpted text-[#d4af37] font-bold uppercase tracking-widest block">
              WEEKLY OPERATING HOURS
            </span>

            <div className="space-y-2.5">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className={`p-3 rounded-lg border flex items-center justify-between text-xs transition-colors ${
                    h.closed
                      ? "bg-red-950/20 border-red-500/20 text-[#f87171]"
                      : "bg-[#12141c] border-white/5 text-[#d4d4d8]"
                  }`}
                >
                  <div>
                    <span className="font-bold text-white block">{h.day}</span>
                    <span className="text-[10px] text-[#71717a] font-mono">{h.status}</span>
                  </div>
                  <div className="text-right">
                    <span
                      className={`font-mono font-semibold ${h.closed ? "text-red-400" : "text-[#e6d5b8]"}`}
                    >
                      {h.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-lg bg-[#12141c] border border-white/5 text-xs text-[#a1a1aa]">
              <strong className="text-white block mb-1">RSVP Notice:</strong>
              Table reservations available Monday through Sunday (closed Tuesdays). Live DJs perform
              Friday through Sunday.
            </div>
          </div>

          {/* Col 3: Dress Code & Policies */}
          <div className="bg-[#0e1017] border border-white/10 p-8 space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <span className="font-mono text-xs text-[#c5a880] font-bold uppercase tracking-[0.2em] block">
                ADMISSION & ETIQUETTE
              </span>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white font-serif font-bold text-base">
                    <ShieldAlert className="w-4 h-4 text-[#c5a880]" />
                    <span>Strict 19+ Age Requirement</span>
                  </div>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed">
                    Physical, valid government-issued photo identification (Driver's License or
                    Passport) is mandatory upon entry. Digital photos or photocopies are strictly
                    prohibited by AGCO Ontario liquor regulations.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  <div className="flex items-center gap-2 text-white font-serif font-bold text-base">
                    <Sparkles className="w-4 h-4 text-[#c5a880]" />
                    <span>Dress Code: Upscale Evening Attire</span>
                  </div>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed">
                    We maintain an elevated, fashionable evening atmosphere.
                  </p>
                  <ul className="text-xs text-[#d4d4d8] space-y-1.5 pl-1">
                    <li className="flex items-center gap-2">
                      <span className="text-red-400 font-bold">✕</span> No sweatpants, tracksuits,
                      or athletic gym wear
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-400 font-bold">✕</span> No flip-flops or open slides
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">✓</span> Fashion-forward
                      clubwear, button-downs, evening dresses, fitted denim & clean designer
                      footwear welcome
                    </li>
                  </ul>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  <span className="text-xs font-bold text-white block">
                    Multilingual Hospitality
                  </span>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed">
                    Our team provides hospitality in both English and Amharic (አማርኛ).
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#12141c] border border-white/5 text-[11px] text-[#71717a]">
              XO Lounge Toronto operates strictly in compliance with all provincial health, fire,
              and safety standards.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
