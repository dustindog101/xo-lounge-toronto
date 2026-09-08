"use client";

import { ArrowRight, Check, Clock, Music, UserPlus } from "lucide-react";
import { useState } from "react";

interface EventCalendarProps {
  onOpenGuestlist: (eventTitle?: string) => void;
  language: "en" | "am";
}

interface EventItem {
  id: string;
  day: string;
  title: string;
  time: string;
  genres: string[];
  description: string;
  djLineup: string;
  perks: string[];
  gradient: string;
}

const EVENTS: EventItem[] = [
  {
    id: "friday",
    day: "EVERY FRIDAY",
    title: "XO FRIDAYS: URBAN & R&B ANTHEMS",
    time: "8:00 PM – 3:00 AM",
    genres: ["R&B", "Hip-Hop", "Top 40", "Dancehall"],
    description:
      "Kick off the weekend with Toronto's best urban selectors. Heavy basslines, bottle trains, and wall-to-wall energy.",
    djLineup: "Resident & Guest DJs on Rotation",
    perks: [
      "Free Guestlist before 11:00 PM",
      "Bottle Service Sparkler Shows",
      "Late-Night Kitchen Open",
    ],
    gradient: "from-[#a855f7]/30 via-[#c026d3]/20 to-transparent",
  },
  {
    id: "saturday",
    day: "EVERY SATURDAY",
    title: "XO SATURDAYS: AFROBEATS & AMAPIANO EUPHORIA",
    time: "8:00 PM – 3:00 AM",
    genres: ["Afrobeats", "Amapiano", "Global Club", "Hip-Hop"],
    description:
      "The flagship night of XO Lounge. Infectious Amapiano log drums and Afrobeats anthems under the pulsating neon grid.",
    djLineup: "Special Guest Headliners + Live Host",
    perks: [
      "VIP Booth Reservations Recommended",
      "Champagne Parade Shows",
      "Full LED Visual Immersion",
    ],
    gradient: "from-[#f43f5e]/30 via-[#a855f7]/20 to-transparent",
  },
  {
    id: "sunday",
    day: "EVERY SUNDAY",
    title: "SUNDAY SOCIAL: CHILL RHYTHMS & COCKTAILS",
    time: "7:00 PM – 2:00 AM",
    genres: ["Smooth R&B", "Afrobeats", "Soul", "Throwbacks"],
    description:
      "The premier Sunday night lounge gathering. Sip handcrafted cocktails, share tapas, and unwind to soulful grooves.",
    djLineup: "DJs spinning Old School & Smooth Melodies",
    perks: [
      "Casual Upscale Atmosphere",
      "Cocktail Pitcher Specials",
      "Intimate Booth Reservations",
    ],
    gradient: "from-[#06b6d4]/30 via-[#3b82f6]/20 to-transparent",
  },
  {
    id: "thursday",
    day: "EVERY THURSDAY",
    title: "THURSDAY INDUSTRY ESCAPE",
    time: "7:00 PM – 2:00 AM",
    genres: ["Afro-Fusion", "Neo-Soul", "Deep House"],
    description:
      "Queen East's midweek rendezvous. Industry creatives, late-night diaspora bites, and curated craft spirits.",
    djLineup: "Underground Selectors",
    perks: ["No Cover Charge", "Specialty Cocktail Flights", "Walk-ins Welcome at Bar"],
    gradient: "from-[#f59e0b]/30 via-[#ef4444]/20 to-transparent",
  },
];

export default function EventCalendar({ onOpenGuestlist, language }: EventCalendarProps) {
  const [filter, setFilter] = useState<string>("all");

  const filteredEvents =
    filter === "all"
      ? EVENTS
      : filter === "weekends"
        ? EVENTS.filter((e) => e.id === "friday" || e.id === "saturday")
        : EVENTS.filter((e) =>
            e.genres.some((g) => g.toLowerCase().includes(filter.toLowerCase())),
          );

  return (
    <section id="djs" className="py-24 bg-[#07080b] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#06b6d4]/30 bg-[#151824] text-xs font-mono text-[#67e8f9]">
            <Music className="w-3.5 h-3.5 text-[#06b6d4]" />
            <span>WEEKLY PROGRAMMING & SOUND IDENTITY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {language === "en" ? "WEEKEND DJS & NIGHTS" : "የሳምንቱ ዲጄዎች እና ፕሮግራሞች"}
          </h2>

          <p className="text-sm sm:text-base text-[#9ca3af]">
            {language === "en"
              ? "Toronto’s finest DJs spinning Friday through Sunday. Join the guestlist for reduced entry before 11:00 PM or secure your VIP booth for the complete experience."
              : "ከአርብ እስከ እሁድ የቶሮንቶ ምርጥ ዲጄዎች። ከምሽቱ 5፡00 ሰዓት በፊት ነፃ ለመግባት የእንግዳ ዝርዝር ውስጥ ይመዝገቡ።"}
          </p>

          {/* Filter Pill Buttons */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: "all", label: "All Nights" },
              { id: "weekends", label: "Friday & Saturday Only" },
              { id: "afrobeats", label: "Afrobeats & Amapiano" },
              { id: "r&b", label: "R&B & Soul" },
            ].map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  filter === btn.id
                    ? "bg-[#a855f7] text-white font-bold shadow-lg shadow-[#a855f7]/30"
                    : "bg-[#151824] text-[#9ca3af] hover:text-white border border-white/10"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="rounded-2xl border border-white/10 bg-[#0f1118] overflow-hidden hover:border-[#a855f7]/50 transition-all duration-300 shadow-2xl flex flex-col justify-between group"
            >
              <div className={`p-6 sm:p-8 bg-gradient-to-b ${evt.gradient} space-y-4`}>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/50 border border-white/10 text-xs font-mono font-bold text-[#fef08a]">
                    {evt.day}
                  </span>
                  <span className="text-xs font-mono text-[#9ca3af] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#a855f7]" />
                    {evt.time}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#d8b4fe] transition-colors">
                  {evt.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                  {evt.description}
                </p>

                {/* Genres */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {evt.genres.map((g) => (
                    <span
                      key={g}
                      className="px-2.5 py-0.5 rounded-md bg-[#1c2030] text-[11px] font-mono text-[#d1d5db] border border-white/5"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              {/* Perks & Action Bar */}
              <div className="p-6 sm:p-8 bg-[#0a0c12] border-t border-white/10 space-y-5">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-[#9ca3af] uppercase tracking-wider block">
                    EVENT HIGHLIGHTS:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#d1d5db]">
                    {evt.perks.map((p) => (
                      <div key={p} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#10b981] flex-shrink-0" />
                        <span className="truncate">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenGuestlist(evt.title)}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#f43f5e] text-white text-xs font-bold tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-[#a855f7]/20 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Join Free Guestlist</span>
                  </button>

                  <a
                    href="#bottle-service"
                    className="py-3 px-4 rounded-xl bg-[#151824] hover:bg-[#1c2030] border border-white/10 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Reserve VIP Table</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
