"use client";

import { Calendar, Globe, Menu, Phone, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

interface NavbarProps {
  onOpenBooking: (boothName?: string) => void;
  onOpenGuestlist: () => void;
  language: "en" | "am";
  setLanguage: (lang: "en" | "am") => void;
}

export default function Navbar({
  onOpenBooking,
  onOpenGuestlist,
  language,
  setLanguage,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Calculate if XO Lounge is open right now in Toronto (ET timezone)
    try {
      const now = new Date();
      // Format to Toronto time
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

      // Open Mon, Wed, Thu, Sun: 7pm (19) to 2am (2)
      // Open Fri, Sat: 8pm (20) to 3am (3)
      // Closed Tue
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
    { label: language === "en" ? "Experience" : "ልምድ", href: "#experience" },
    { label: language === "en" ? "Floorplan" : "የቦታ ካርታ", href: "#floorplan" },
    { label: language === "en" ? "Bottle Service" : "የቦቲል ሰርቪስ", href: "#bottle-service" },
    { label: language === "en" ? "Weekend DJs" : "ዲጄዎች", href: "#djs" },
    { label: language === "en" ? "Menus" : "ሜኑ", href: "#menus" },
    { label: language === "en" ? "Private Events" : "የግል ፕሮግራሞች", href: "#parties" },
    { label: language === "en" ? "Contact" : "አድራሻ", href: "#location" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07080b]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/50"
          : "bg-gradient-to-b from-[#07080b]/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg border border-[#a855f7]/50 bg-gradient-to-br from-[#1c2030] to-[#0f1118] flex items-center justify-center font-serif font-extrabold text-xl text-white shadow-lg shadow-[#a855f7]/20 group-hover:border-[#f43f5e] transition-colors">
              <span className="text-gradient-gold">XO</span>
            </div>
            <div>
              <span className="font-serif font-bold text-lg sm:text-xl tracking-wider text-white block leading-none">
                XO LOUNGE
              </span>
              <span className="font-mono text-[10px] tracking-widest text-[#9ca3af] block mt-1">
                TORONTO • 364 QUEEN ST E
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#9ca3af]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-[#a855f7] after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Status & Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              type="button"
              onClick={() => setLanguage(language === "en" ? "am" : "en")}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-[#0f1118] text-xs text-[#9ca3af] hover:text-white hover:border-[#a855f7]/50 transition-all cursor-pointer"
              title="Toggle English / Amharic"
            >
              <Globe className="w-3.5 h-3.5 text-[#a855f7]" />
              <span className="font-mono">{language === "en" ? "AM (አማ)" : "EN"}</span>
            </button>

            {/* Dynamic Open Indicator */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#0f1118] text-xs font-mono">
              <span
                className={`w-2 h-2 rounded-full ${
                  isOpenNow ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                }`}
              />
              <span className={isOpenNow ? "text-emerald-400" : "text-[#9ca3af]"}>
                {isOpenNow ? "OPEN TONIGHT" : "OPENS 7 PM"}
              </span>
            </div>

            {/* Direct Call RSVP Button */}
            <a
              href="tel:+14374730042"
              className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/10 bg-[#151824] hover:bg-[#1c2030] text-white text-xs font-semibold tracking-wide transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#f43f5e]" />
              <span>(437) 473-0042</span>
            </a>

            {/* Book VIP Table CTA */}
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#a855f7] via-[#c026d3] to-[#f43f5e] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-[#a855f7]/30 hover:shadow-[#a855f7]/50 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{language === "en" ? "Book Table" : "ቦታ ይያዙ"}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-white/10 bg-[#151824] text-[#9ca3af] hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0c13] border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span
                className={`w-2 h-2 rounded-full ${isOpenNow ? "bg-emerald-400" : "bg-amber-400"}`}
              />
              <span className="text-[#9ca3af]">
                {isOpenNow ? "OPEN TONIGHT (UNTIL 2 AM/3 AM)" : "CLOSED TUESDAY / OPENS 7 PM"}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setLanguage(language === "en" ? "am" : "en")}
              className="text-xs text-[#a855f7] font-semibold flex items-center gap-1"
            >
              <Globe className="w-3.5 h-3.5" />
              {language === "en" ? "Switch to አማርኛ" : "Switch to English"}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg bg-[#151824] text-sm text-[#d1d5db] hover:text-white hover:bg-[#1c2030] font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:+14374730042"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-white/15 bg-[#151824] text-white text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-[#f43f5e]" />
              <span>Call VIP Host: +1 437-473-0042</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGuestlist();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-[#a855f7]/40 bg-[#a855f7]/10 text-[#d8b4fe] text-sm font-semibold"
            >
              <Calendar className="w-4 h-4" />
              <span>Join Weekend Guestlist</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
