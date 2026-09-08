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
    <section id="location" className="py-24 bg-[#07080b] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#06b6d4]/30 bg-[#151824] text-xs font-mono text-[#67e8f9]">
            <MapPin className="w-3.5 h-3.5" />
            <span>FIND US & GUEST ETIQUETTE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {language === "en" ? "LOCATION & HOURS" : "አድራሻ እና የስራ ሰዓት"}
          </h2>

          <p className="text-sm sm:text-base text-[#9ca3af]">
            {language === "en"
              ? "Conveniently located at 364 Queen St East near Parliament Street in Toronto's vibrant Corktown district."
              : "በቶሮንቶ ኮርክታውን አካባቢ፣ 364 ንግሥት ጎዳና ምስራቅ ላይ ይገኛል።"}
          </p>
        </div>

        {/* 3 Column Grid: Location/Contact, Operating Hours, Dress Code */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Col 1: Contact & Location */}
          <div className="bg-[#0f1118] border border-white/10 rounded-3xl p-7 space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <span className="text-xs font-mono text-[#a855f7] font-bold uppercase tracking-wider block">
                VENUE ADDRESS
              </span>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#151824] text-[#f43f5e] border border-white/5 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-base">XO Lounge Toronto</h4>
                    <p className="text-sm text-[#d1d5db] mt-0.5">364 Queen St East</p>
                    <p className="text-xs text-[#9ca3af]">Toronto, ON, Canada, M5A 1T1</p>
                    <span className="text-[11px] font-mono text-[#06b6d4] block mt-1">
                      Cross street: Parliament St
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#151824] text-[#a855f7] border border-white/5 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#9ca3af] block">Mobile / RSVP:</span>
                    <a
                      href="tel:+14374730042"
                      className="text-sm font-mono font-bold text-white hover:text-[#f43f5e] transition-colors"
                    >
                      +1 (437) 473-0042
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#151824] text-[#06b6d4] border border-white/5 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#9ca3af] block">Email Inquiries:</span>
                    <a
                      href="mailto:info@xolounge.ca"
                      className="text-sm font-mono text-[#d1d5db] hover:text-white transition-colors"
                    >
                      info@xolounge.ca
                    </a>
                  </div>
                </div>
              </div>

              {/* Transit & Parking Details */}
              <div className="p-4 rounded-2xl bg-[#151824] border border-white/5 space-y-2.5 text-xs text-[#9ca3af]">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Bus className="w-4 h-4 text-[#a855f7]" />
                  <span>TTC 501 Queen Streetcar</span>
                </div>
                <p>Steps from the Queen & Parliament stop. Accessible all night.</p>
                <div className="flex items-center gap-2 text-white font-semibold pt-1">
                  <Car className="w-4 h-4 text-[#06b6d4]" />
                  <span>Street Parking</span>
                </div>
                <p>Street parking available on Queen St E and side streets after 6 PM.</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=364+Queen+St+E,+Toronto,+ON+M5A+1T1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white text-xs font-bold tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-[#06b6d4]/20 hover:brightness-110 transition-all cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions in Google Maps</span>
            </a>
          </div>

          {/* Col 2: Operating Hours Schedule */}
          <div className="bg-[#0f1118] border border-white/10 rounded-3xl p-7 space-y-6 shadow-xl">
            <span className="text-xs font-mono text-[#f59e0b] font-bold uppercase tracking-wider block">
              WEEKLY OPERATING HOURS
            </span>

            <div className="space-y-3">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className={`p-3 rounded-xl border flex items-center justify-between text-xs transition-colors ${
                    h.closed
                      ? "bg-red-950/20 border-red-500/20 text-[#f87171]"
                      : "bg-[#151824] border-white/5 text-[#d1d5db]"
                  }`}
                >
                  <div>
                    <span className="font-bold text-white block">{h.day}</span>
                    <span className="text-[10px] text-[#9ca3af]">{h.status}</span>
                  </div>
                  <div className="text-right">
                    <span
                      className={`font-mono font-semibold ${h.closed ? "text-red-400" : "text-[#fef08a]"}`}
                    >
                      {h.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-[#151824] border border-white/5 text-xs text-[#9ca3af]">
              <strong className="text-white block mb-1">RSVP Notice:</strong>
              Call to RSVP Monday through Sunday (except Tuesdays). DJs perform live Friday through
              Sunday.
            </div>
          </div>

          {/* Col 3: Dress Code & Policies */}
          <div className="bg-[#0f1118] border border-white/10 rounded-3xl p-7 space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-mono text-[#f43f5e] font-bold uppercase tracking-wider block">
                POLICIES & CODE OF CONDUCT
              </span>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white font-serif font-bold text-base">
                    <ShieldAlert className="w-5 h-5 text-[#f43f5e]" />
                    <span>Strict 19+ Age Requirement</span>
                  </div>
                  <p className="text-xs text-[#9ca3af] leading-relaxed">
                    Physical, valid government-issued photo identification (Driver's License or
                    Passport) is mandatory upon entry. Digital photos or copies are not accepted
                    under Ontario AGCO liquor licensing law.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  <div className="flex items-center gap-2 text-white font-serif font-bold text-base">
                    <Sparkles className="w-5 h-5 text-[#a855f7]" />
                    <span>Dress Code: Nightlife Chic</span>
                  </div>
                  <p className="text-xs text-[#9ca3af] leading-relaxed">
                    We maintain an upscale, fashionable ambiance. Management reserves all rights of
                    admission.
                  </p>
                  <ul className="text-xs text-[#d1d5db] space-y-1.5 pl-2">
                    <li className="flex items-center gap-2">
                      <span className="text-red-400 font-bold">✕</span> No sweatpants, joggers, or
                      gym wear
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-400 font-bold">✕</span> No flip-flops or slides
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">✓</span> Stylish clubwear,
                      collared shirts, chic dresses, fitted denim & clean sneakers encouraged
                    </li>
                  </ul>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  <span className="text-xs font-bold text-white block">
                    Multilingual Hospitality
                  </span>
                  <p className="text-xs text-[#9ca3af] leading-relaxed">
                    Our team proudly assists guests in both English and Amharic (አማርኛ).
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#151824] border border-white/5 text-[11px] text-[#6b7280]">
              XO Lounge Toronto operates strictly in compliance with all provincial health and
              safety regulations.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
