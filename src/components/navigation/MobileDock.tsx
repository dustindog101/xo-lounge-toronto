"use client";

import { Calendar, GlassWater, Phone, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function MobileDock() {
  const { language } = useLanguage();
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pb-3 pt-2 bg-gradient-to-t from-[#08090b] via-[#08090b]/95 to-transparent pointer-events-none">
      <div className="max-w-md mx-auto bg-[#0f1117]/95 backdrop-blur-xl border border-white/15 rounded-xl p-1.5 shadow-2xl shadow-black/90 flex items-center justify-around pointer-events-auto">
        {/* VIP Tables */}
        <Link
          href="/tables"
          className={`flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-lg min-h-[46px] transition-all ${
            pathname === "/tables"
              ? "bg-[#c5a880] text-[#08090b]"
              : "text-[#d4d4d8] hover:text-white"
          }`}
        >
          <Sparkles className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">
            {language === "en" ? "Tables" : "ቦታ ያዙ"}
          </span>
        </Link>

        {/* Music & DJs */}
        <Link
          href="/events"
          className={`flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-lg min-h-[46px] transition-all ${
            pathname === "/events"
              ? "bg-[#c5a880] text-[#08090b]"
              : "text-[#d4d4d8] hover:text-white"
          }`}
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-medium uppercase tracking-wider">
            {language === "en" ? "Events" : "ዲጄዎች"}
          </span>
        </Link>

        {/* Menus */}
        <Link
          href="/menus"
          className={`flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-lg min-h-[46px] transition-all ${
            pathname === "/menus"
              ? "bg-[#c5a880] text-[#08090b]"
              : "text-[#d4d4d8] hover:text-white"
          }`}
        >
          <GlassWater className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-medium uppercase tracking-wider">
            {language === "en" ? "Menus" : "ሜኑ"}
          </span>
        </Link>

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
      </div>
    </div>
  );
}
