"use client";

import { Calendar, MapPin, Phone, Sparkles } from "lucide-react";

interface MobileDockProps {
  onOpenBooking: () => void;
  onOpenGuestlist: () => void;
  language: "en" | "am";
}

export default function MobileDock({ onOpenBooking, onOpenGuestlist, language }: MobileDockProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pb-3 pt-2 bg-gradient-to-t from-[#07080b] via-[#0a0c13]/95 to-transparent pointer-events-none">
      <div className="max-w-md mx-auto bg-[#0f1118]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-1.5 shadow-2xl shadow-black/80 flex items-center justify-around pointer-events-auto">
        {/* Book Table */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-br from-[#a855f7] to-[#f43f5e] text-white active:scale-95 transition-transform min-h-[46px]"
        >
          <Sparkles className="w-5 h-5 text-white mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">
            {language === "en" ? "Book Table" : "ቦታ ያዙ"}
          </span>
        </button>

        {/* Call Host */}
        <a
          href="tel:+14374730042"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-[#d1d5db] hover:text-white active:scale-95 transition-transform min-h-[46px]"
        >
          <Phone className="w-5 h-5 text-[#f43f5e] mb-0.5" />
          <span className="text-[11px] font-semibold">
            {language === "en" ? "Call RSVP" : "ደውሉ"}
          </span>
        </a>

        {/* Guestlist */}
        <button
          type="button"
          onClick={onOpenGuestlist}
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-[#d1d5db] hover:text-white active:scale-95 transition-transform min-h-[46px]"
        >
          <Calendar className="w-5 h-5 text-[#a855f7] mb-0.5" />
          <span className="text-[11px] font-semibold">
            {language === "en" ? "Guestlist" : "እንግዳ"}
          </span>
        </button>

        {/* Directions */}
        <a
          href="https://maps.google.com/?q=364+Queen+St+E,+Toronto,+ON+M5A+1T1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-[#d1d5db] hover:text-white active:scale-95 transition-transform min-h-[46px]"
        >
          <MapPin className="w-5 h-5 text-[#06b6d4] mb-0.5" />
          <span className="text-[11px] font-semibold">
            {language === "en" ? "Directions" : "አቅጣጫ"}
          </span>
        </a>
      </div>
    </div>
  );
}
