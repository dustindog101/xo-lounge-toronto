"use client";

import { Calendar, Globe, Menu, Phone, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    try {
      const now = new Date();
      const torontoTimeStr = now.toLocaleTimeString("en-US", {
        timeZone: "America/Toronto",
        hour12: false,
      });
      const torontoDayStr = now.toLocaleDateString("en-US", {
        timeZone: "America/Toronto",
        weekday: "short",
      });

      const hour = parseInt(torontoTimeStr.split(":")[0], 10);
      const isTuesday = torontoDayStr === "Tue";

      // Mon, Wed, Thu, Sun: 7pm to 2am. Fri, Sat: 8pm to 3am. Tue: Closed
      if (isTuesday) {
        setIsOpenNow(false);
      } else if (torontoDayStr === "Fri" || torontoDayStr === "Sat") {
        setIsOpenNow(hour >= 20 || hour < 3);
      } else {
        setIsOpenNow(hour >= 19 || hour < 2);
      }
    } catch {
      setIsOpenNow(true);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: language === "en" ? "Atmosphere" : "ድባብ", href: "/" },
    { label: language === "en" ? "VIP Tables" : "የጠረጴዛ ሰርቪስ", href: "/tables" },
    { label: language === "en" ? "Music & DJs" : "ዲጄዎች", href: "/events" },
    { label: language === "en" ? "Menus" : "ሜኑ", href: "/menus" },
    { label: language === "en" ? "Private Events" : "የግል ፕሮግራሞች", href: "/private-events" },
    { label: language === "en" ? "Visit & Info" : "አድራሻ", href: "/info" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08090b]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl"
          : "bg-gradient-to-b from-[#08090b]/90 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 mr-6 xl:mr-10 shrink-0 min-h-[44px] py-1 group"
          >
            <div className="w-10 h-10 rounded-md border border-[#d4af37]/40 bg-[#0b0d13] flex items-center justify-center font-editorial font-bold text-lg text-[#f3e5ab] group-hover:border-[#d4af37] transition-colors">
              <span>XO</span>
            </div>
            <div>
              <span className="font-editorial font-bold text-base sm:text-lg tracking-[0.2em] text-white block leading-none">
                XO LOUNGE
              </span>
              <span className="font-mono text-[9px] tracking-[0.20em] text-[#9ea2ac] block mt-1 whitespace-nowrap">
                TORONTO • 364 QUEEN ST E
              </span>
            </div>
          </Link>

          {/* Desktop Multi-Page Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[11px] xl:text-[12px] font-sculpted font-medium tracking-[0.14em] uppercase text-[#9ea2ac]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-1 relative transition-colors ${
                    isActive
                      ? "text-white font-semibold after:w-full after:bg-[#d4af37]"
                      : "hover:text-white after:w-0 hover:after:w-full after:bg-[#d4af37]"
                  } after:h-[1.5px] after:absolute after:bottom-0 after:left-0 after:transition-all`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Status & Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-full border border-white/10 bg-[#0b0d13] text-xs text-[#9ea2ac] hover:text-white hover:border-[#d4af37]/50 transition-all cursor-pointer"
              title="Toggle English / Amharic"
            >
              <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="font-mono text-[11px]">{language === "en" ? "AM (አማ)" : "EN"}</span>
            </button>

            {/* Dynamic Open Indicator */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 min-h-[44px] rounded-full border border-white/10 bg-[#0b0d13] text-xs font-mono">
              <span
                className={`w-2 h-2 rounded-full ${isOpenNow ? "bg-emerald-400" : "bg-amber-400"}`}
              />
              <span className={isOpenNow ? "text-emerald-400" : "text-[#9ea2ac]"}>
                {isOpenNow ? "OPEN TONIGHT" : "OPENS 7 PM"}
              </span>
            </div>

            {/* Direct Call RSVP Button */}
            <a
              href="tel:+14374730042"
              className="hidden xl:flex items-center gap-2 px-3.5 py-2 min-h-[44px] rounded-md border border-white/10 bg-[#0b0d13] hover:bg-[#151821] hover:border-white/20 text-[#f4f4f5] text-xs font-medium tracking-wider transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="font-mono">(437) 473-0042</span>
            </a>

            {/* Reserve VIP Table CTA - Hidden on mobile, accessible via sticky bottom dock */}
            <Link
              href="/tables"
              className="hidden sm:flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-md bg-[#d4af37] hover:bg-[#e6c34e] text-[#040507] text-xs sm:text-sm font-sculpted font-bold tracking-wider transition-all cursor-pointer shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === "en" ? "RESERVE TABLE" : "ቦታ ይያዙ"}</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md border border-white/10 bg-[#0b0d13] text-[#9ea2ac] hover:text-white cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0d12] border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span
                className={`w-2 h-2 rounded-full ${isOpenNow ? "bg-emerald-400" : "bg-amber-400"}`}
              />
              <span className="text-[#a1a1aa]">
                {isOpenNow ? "OPEN TONIGHT (UNTIL 3 AM)" : "CLOSED TUESDAY / OPENS 7 PM"}
              </span>
            </div>
            <button
              type="button"
              onClick={toggleLanguage}
              className="text-xs text-[#d4af37] font-medium flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{language === "en" ? "አማርኛ" : "English"}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-3 rounded-md text-xs uppercase tracking-wider font-sculpted transition-colors ${
                    isActive
                      ? "bg-[#d4af37] text-[#040507] font-bold"
                      : "bg-[#141620] text-[#d4d4d8] hover:text-white hover:bg-[#1b1e2b]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:+14374730042"
              className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 rounded-md border border-white/15 bg-[#141620] text-white text-xs uppercase tracking-wider font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Call Concierge: +1 437-473-0042</span>
            </a>
            <Link
              href="/events"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 rounded-md border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#f3e5ab] text-xs uppercase tracking-wider font-semibold"
            >
              <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Weekend DJ Program & Guestlist</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
