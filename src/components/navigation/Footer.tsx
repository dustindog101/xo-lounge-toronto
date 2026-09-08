"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-[#050608] border-t border-white/10 pt-16 pb-24 md:pb-12 text-[#a1a1aa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md border border-[#c5a880]/40 bg-[#12141c] flex items-center justify-center font-serif font-bold text-lg text-[#e6d5b8]">
                <span>XO</span>
              </div>
              <span className="font-serif font-bold text-lg text-white tracking-[0.2em]">
                XO LOUNGE
              </span>
            </Link>

            <p className="text-xs text-[#a1a1aa] leading-relaxed">
              Toronto’s premier Queen East nightlife sanctuary. Custom architectural illumination,
              curated weekend resident DJs, craft diaspora mixology, and bespoke table service.
            </p>

            <div className="text-xs font-mono text-[#c5a880]">
              {language === "en" ? "Est. October 2025 • Toronto, ON" : "የተመሰረተበት: ጥቅምት 2025 • ቶሮንቶ"}
            </div>
          </div>

          {/* Experience Multi-Page Links */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono text-[#c5a880] font-bold uppercase tracking-widest block">
              EXPERIENCE
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Atmosphere & Sanctuary
                </Link>
              </li>
              <li>
                <Link href="/tables" className="hover:text-white transition-colors">
                  VIP Tables & Seating Schematic
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Weekend DJ Residencies & Guestlist
                </Link>
              </li>
              <li>
                <Link href="/menus" className="hover:text-white transition-colors">
                  Cocktails & Diaspora Tapas Repertoire
                </Link>
              </li>
            </ul>
          </div>

          {/* Celebrations & Buyouts Links */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono text-[#c5a880] font-bold uppercase tracking-widest block">
              SPECIAL OCCASIONS
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/private-events" className="hover:text-white transition-colors">
                  Birthday Milestone Packages
                </Link>
              </li>
              <li>
                <Link href="/private-events" className="hover:text-white transition-colors">
                  Exclusive Venue Buyouts (Up to 150)
                </Link>
              </li>
              <li>
                <Link href="/info" className="hover:text-white transition-colors">
                  Guest Etiquette & 19+ ID Policy
                </Link>
              </li>
              <li>
                <Link href="/info" className="hover:text-white transition-colors">
                  Location & Operating Hours
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Socials */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono text-[#c5a880] font-bold uppercase tracking-widest block">
              CONCIERGE & RSVP
            </span>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>364 Queen St E, Toronto, M5A 1T1</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                <a href="tel:+14374730042" className="hover:text-white font-mono font-semibold">
                  +1 (437) 473-0042
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
                <a href="mailto:info@xolounge.ca" className="hover:text-white font-mono">
                  info@xolounge.ca
                </a>
              </div>
            </div>

            <div className="flex gap-2.5 pt-2">
              <a
                href="https://www.instagram.com/xo_lounge_toronto/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-[#12141c] hover:bg-[#181a24] text-white flex items-center justify-center border border-white/10 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-[#c5a880]" />
              </a>
              <a
                href="https://www.facebook.com/xoloungetoronto/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-[#12141c] hover:bg-[#181a24] text-white flex items-center justify-center border border-white/10 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4 text-[#c5a880]" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#71717a] gap-4">
          <div>
            © {new Date().getFullYear()} XO Lounge Toronto. All rights reserved. 19+ Legal Drinking
            Age strictly enforced.
          </div>
          <div className="font-mono text-[11px] text-[#c5a880]">
            {language === "en" ? "ስለጎበኙን እናመሰግናለን • Welcome Always" : "ስለጎበኙን እናመሰግናለን"}
          </div>
        </div>
      </div>
    </footer>
  );
}
