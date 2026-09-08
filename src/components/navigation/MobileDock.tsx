"use client";

import { Calendar, MapPin, Phone, Sparkles } from "lucide-react";

interface MobileDockProps {
  onOpenBooking: () => void;
  onOpenGuestlist: () => void;
  language: "en" | "am";
}

export default function MobileDock({ onOpenBooking, onOpenGuestlist, language }: MobileDockProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pb-3 pt-2 bg-gradient-to-t from-[#08090b] via-[#08090b]/95 to-transparent pointer-events-none">
      <div className="max-w-md mx-auto bg-[#0f1117]/95 backdrop-blur-xl border border-white/15 rounded-xl p-1.5 shadow-2xl shadow-black/90 flex items-center justify-around pointer-events-auto">
        {/* Book Table - Champagne Brass Solid */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#c5a880] text-[#08090b] active:scale-95 transition-transform min-h-[46px]"
        >
          <Sparkles className="w-4 h-4 text-[#08090b] mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">
            {language === "en" ? "Reserve" : "ቦታ ያዙ"}
          </span>
        </button>

        {/* Call Host */}
        <a
          href="tel:+14374730042"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-[#d4d4d8] hover:text-white active:scale-95 transition-transform min-h-[46px]"
        >
          <Phone className="w-4 h-4 text-[#c5a880] mb-0.5" />
          <span className="text-[10px] font-medium uppercase tracking-wider">
            {language === "en" ? "Call" : "ደውሉ"}
          </span>
        </a>

        {/* Guestlist */}
        <button
          type="button"
          onClick={onOpenGuestlist}
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-[#d4d4d8] hover:text-white active:scale-95 transition-transform min-h-[46px]"
        >
          <Calendar className="w-4 h-4 text-[#c5a880] mb-0.5" />
          <span className="text-[10px] font-medium uppercase tracking-wider">
            {language === "en" ? "Guestlist" : "እንግዳ"}
          </span>
        </button>

        {/* Directions */}
        <a
          href="https://maps.google.com/?q=364+Queen+St+E,+Toronto,+ON+M5A+1T1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-[#d4d4d8] hover:text-white active:scale-95 transition-transform min-h-[46px]"
        >
          <MapPin className="w-4 h-4 text-[#c5a880] mb-0.5" />
          <span className="text-[10px] font-medium uppercase tracking-wider">
            {language === "en" ? "Maps" : "አቅጣጫ"}
          </span>
        </a>
      </div>
    </div>
  );
}
