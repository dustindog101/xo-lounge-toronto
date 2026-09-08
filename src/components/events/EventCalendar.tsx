"use client";

import { ArrowRight, Check, Clock, UserPlus } from "lucide-react";
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
    <section id="djs" className="py-24 bg-[#07080a] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="font-mono text-xs tracking-[0.25em] text-[#c5a880] uppercase block">
            WEEKLY PROGRAMMING & SOUND SESSIONS
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {language === "en" ? "Resident Selectors & Lineups" : "የሳምንቱ ዲጄዎች እና ፕሮግራሞች"}
          </h2>

          <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
            {language === "en"
              ? "Toronto’s premier Afro-Diaspora sound architecture. Reserve your guestlist entry pass before 11:00 PM or secure your private VIP table."
              : "ከአርብ እስከ እሁድ የቶሮንቶ ምርጥ ዲጄዎች። ከምሽቱ 5፡00 ሰዓት በፊት ነፃ ለመግባት የእንግዳ ዝርዝር ውስጥ ይመዝገቡ።"}
          </p>

          {/* Clean Category Filters */}
          <div className="flex flex-wrap gap-2 pt-2 border-b border-white/10 pb-4">
            {[
              { id: "all", label: "Full Schedule" },
              { id: "weekends", label: "Weekend Headliners" },
              { id: "afrobeats", label: "Afrobeats & Amapiano" },
              { id: "r&b", label: "R&B & Soul" },
            ].map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => setFilter(btn.id)}
                className={`min-h-[44px] px-5 py-2 text-xs font-mono tracking-[0.15em] uppercase transition-colors cursor-pointer ${
                  filter === btn.id
                    ? "bg-[#c5a880] text-[#07080a] font-bold"
                    : "bg-[#0e1017] text-[#a1a1aa] hover:text-white border border-white/10"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Residency Schedule (Clean Grid without AI Card Bloat) */}
        <div className="space-y-6">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="border border-white/10 bg-[#0e1017] p-6 sm:p-8 hover:border-white/20 transition-all duration-300 shadow-xl group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Date Marker (3 cols) */}
                <div className="lg:col-span-3 space-y-1.5 border-b lg:border-b-0 lg:border-r border-white/10 pb-4 lg:pb-0 lg:pr-6">
                  <span className="font-mono text-xs text-[#c5a880] font-bold tracking-[0.2em] block uppercase">
                    {evt.day}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#a1a1aa]">
                    <Clock className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>{evt.time}</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#71717a] block mt-1">
                    {evt.djLineup}
                  </span>
                </div>

                {/* Event Narrative (6 cols) */}
                <div className="lg:col-span-6 space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide group-hover:text-[#e6d5b8] transition-colors">
                    {evt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                    {evt.description}
                  </p>

                  <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1 text-xs text-[#d4d4d8]">
                    {evt.perks.map((p) => (
                      <span key={p} className="flex items-center gap-1.5 font-mono text-[11px]">
                        <Check className="w-3 h-3 text-[#c5a880]" />
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action CTAs (3 cols) */}
                <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-2.5 pt-2 lg:pt-0">
                  <button
                    type="button"
                    onClick={() => onOpenGuestlist(evt.title)}
                    className="w-full min-h-[44px] py-2.5 px-4 rounded-sm bg-[#c5a880] hover:bg-[#d4af37] text-[#07080a] text-xs font-semibold uppercase tracking-[0.15em] flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    <span>Join Guestlist</span>
                  </button>

                  <a
                    href="/tables"
                    className="w-full min-h-[44px] py-2.5 px-4 rounded-sm bg-[#141722] hover:bg-[#1a1e2c] border border-white/10 text-white text-xs font-medium uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Reserve VIP Table</span>
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
