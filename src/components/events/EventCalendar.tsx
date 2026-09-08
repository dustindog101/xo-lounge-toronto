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
}

const EVENTS: EventItem[] = [
  {
    id: "friday",
    day: "EVERY FRIDAY",
    title: "XO FRIDAYS: URBAN & R&B SESSIONS",
    time: "8:00 PM – 3:00 AM",
    genres: ["R&B", "Global Hip-Hop", "Dancehall", "Afrobeats"],
    description:
      "Ignite the weekend with Toronto's elite selectors. Deep basslines, curated table hospitality, and seamless after-dark momentum.",
    djLineup: "Curated Resident & International Guests",
    perks: [
      "Guestlist entry privilege before 11:00 PM",
      "Signature bottle presentation ceremony",
      "Late-night diaspora kitchen open late",
    ],
  },
  {
    id: "saturday",
    day: "EVERY SATURDAY",
    title: "XO SATURDAYS: AFROBEATS & AMAPIANO EUPHORIA",
    time: "8:00 PM – 3:00 AM",
    genres: ["Afrobeats", "Amapiano", "Global Club", "Hip-Hop"],
    description:
      "The flagship night of XO Lounge. Infectious Amapiano log drums and global diaspora anthems under our custom architectural illumination canopy.",
    djLineup: "Guest Headliners + Live Vocalist MC",
    perks: [
      "VIP Booth table reservations strongly advised",
      "Full bottle parade presentation with host team",
      "Acoustically tuned immersive main room",
    ],
  },
  {
    id: "sunday",
    day: "EVERY SUNDAY",
    title: "SUNDAY SOCIAL: SOUL & COCKTAILS",
    time: "7:00 PM – 2:00 AM",
    genres: ["Smooth R&B", "Neo-Soul", "Afro-Fusion", "Throwbacks"],
    description:
      "Toronto's distinguished Sunday evening retreat. Handcrafted cocktails, shared small plates, and an intimate soulful tempo.",
    djLineup: "Vinyl Selectors & Melodic Sounds",
    perks: [
      "Upscale relaxed dress code",
      "Specialty botanical cocktail selections",
      "Intimate booth seating available",
    ],
  },
  {
    id: "thursday",
    day: "EVERY THURSDAY",
    title: "THURSDAY INDUSTRY SANCTUARY",
    time: "7:00 PM – 2:00 AM",
    genres: ["Afro-Fusion", "Deep House", "Neo-Soul"],
    description:
      "Midweek rendezvous for Queen East creatives, industry tastemakers, craft mixology enthusiasts, and diaspora food lovers.",
    djLineup: "Underground Selectors",
    perks: ["No Cover Charge", "Featured Mixology Flights", "Walk-in Seating at Marble Bar"],
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
    <section id="djs" className="py-24 bg-[#08090b] border-t border-white/5 relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c5a880]/30 bg-[#12141c] text-xs font-mono text-[#e6d5b8]">
            <Music className="w-3.5 h-3.5 text-[#c5a880]" />
            <span className="tracking-widest uppercase">CURATED MUSIC & RESIDENCIES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {language === "en" ? "WEEKEND PROGRAMMING & DJS" : "የሳምንቱ ዲጄዎች እና ፕሮግራሞች"}
          </h2>

          <p className="text-sm sm:text-base text-[#a1a1aa]">
            {language === "en"
              ? "Toronto’s premier Afro-Diaspora sound architecture. Reserve your guestlist placement before 11:00 PM or secure your private VIP table."
              : "ከአርብ እስከ እሁድ የቶሮንቶ ምርጥ ዲጄዎች። ከምሽቱ 5፡00 ሰዓት በፊት ነፃ ለመግባት የእንግዳ ዝርዝር ውስጥ ይመዝገቡ።"}
          </p>

          {/* Filter Pill Buttons (>= 44px touch targets) */}
          <div className="flex flex-wrap justify-center gap-2.5 pt-4">
            {[
              { id: "all", label: "All Evenings" },
              { id: "weekends", label: "Weekend Headliners" },
              { id: "afrobeats", label: "Afrobeats & Amapiano" },
              { id: "r&b", label: "R&B & Soul" },
            ].map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => setFilter(btn.id)}
                className={`min-h-[44px] px-5 py-2.5 rounded-md text-xs font-mono tracking-wider uppercase transition-all cursor-pointer flex items-center justify-center ${
                  filter === btn.id
                    ? "bg-[#c5a880] text-[#08090b] font-bold shadow-md"
                    : "bg-[#12141c] text-[#a1a1aa] hover:text-white border border-white/10"
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
              className="rounded-xl border border-white/10 bg-[#0f1117] overflow-hidden hover:border-white/20 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="px-2.5 py-0.5 rounded-sm bg-[#181a24] border border-[#c5a880]/30 text-[10px] font-mono font-bold text-[#e6d5b8] tracking-widest uppercase">
                    {evt.day}
                  </span>
                  <span className="text-xs font-mono text-[#a1a1aa] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#c5a880]" />
                    {evt.time}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                  {evt.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                  {evt.description}
                </p>

                {/* Genres */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {evt.genres.map((g) => (
                    <span
                      key={g}
                      className="px-2.5 py-1 rounded-sm bg-[#151821] text-[10px] font-mono tracking-wider uppercase text-[#d4d4d8] border border-white/5"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              {/* Perks & Action Bar */}
              <div className="p-6 sm:p-8 bg-[#12141c] border-t border-white/10 space-y-5">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-[#71717a] uppercase tracking-widest block">
                    EVENING HIGHLIGHTS:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#d4d4d8]">
                    {evt.perks.map((p) => (
                      <div key={p} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#c5a880] flex-shrink-0" />
                        <span className="truncate">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenGuestlist(evt.title)}
                    className="flex-1 min-h-[44px] py-3 px-4 rounded-md bg-[#c5a880] hover:bg-[#d4af37] text-[#08090b] text-xs font-semibold uppercase tracking-[0.15em] flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    <span>Join Guestlist</span>
                  </button>

                  <a
                    href="#bottle-service"
                    className="min-h-[44px] py-3 px-4 rounded-md bg-[#181a24] hover:bg-[#202330] border border-white/15 text-white text-xs font-medium uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Reserve Table</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#c5a880]" />
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
