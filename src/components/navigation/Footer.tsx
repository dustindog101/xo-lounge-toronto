"use client";

import { Mail, MapPin, Phone } from "lucide-react";

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

interface FooterProps {
  language: "en" | "am";
}

export default function Footer({ language }: FooterProps) {
  return (
    <footer className="bg-[#050608] border-t border-white/10 pt-16 pb-24 md:pb-12 text-[#9ca3af]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg border border-[#a855f7]/50 bg-[#151824] flex items-center justify-center font-serif font-extrabold text-xl text-white">
                <span className="text-gradient-gold">XO</span>
              </div>
              <span className="font-serif font-bold text-lg text-white tracking-wider">
                XO LOUNGE
              </span>
            </div>

            <p className="text-xs text-[#9ca3af] leading-relaxed">
              Toronto’s premier Queen East nightlife destination. Atmospheric neon lighting, live
              weekend DJs, elevated cocktails, and luxury VIP bottle service.
            </p>

            <div className="text-xs font-mono text-[#a855f7]">
              {language === "en" ? "Est. October 2025 • Toronto, ON" : "የተመሰረተበት: ጥቅምት 2025 • ቶሮንቶ"}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-white font-bold uppercase tracking-wider block">
              EXPERIENCE
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  The Atmosphere
                </a>
              </li>
              <li>
                <a href="#floorplan" className="hover:text-white transition-colors">
                  Interactive Floorplan
                </a>
              </li>
              <li>
                <a href="#bottle-service" className="hover:text-white transition-colors">
                  VIP Bottle Packages
                </a>
              </li>
              <li>
                <a href="#djs" className="hover:text-white transition-colors">
                  Weekend DJ Lineup
                </a>
              </li>
              <li>
                <a href="#menus" className="hover:text-white transition-colors">
                  Craft Cocktails & Tapas
                </a>
              </li>
            </ul>
          </div>

          {/* Private Events */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-white font-bold uppercase tracking-wider block">
              CELEBRATIONS
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#parties" className="hover:text-white transition-colors">
                  Birthday VIP Packages
                </a>
              </li>
              <li>
                <a href="#parties" className="hover:text-white transition-colors">
                  Christmas & Holiday Parties
                </a>
              </li>
              <li>
                <a href="#parties" className="hover:text-white transition-colors">
                  Bachelorette & Milestones
                </a>
              </li>
              <li>
                <a href="#parties" className="hover:text-white transition-colors">
                  Full Venue Buyouts (150 Cap)
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Dress Code & 19+ ID Rules
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Socials */}
          <div className="space-y-4">
            <span className="text-xs font-mono text-white font-bold uppercase tracking-wider block">
              CONNECT & RSVP
            </span>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#f43f5e]" />
                <span>364 Queen St E, Toronto, M5A 1T1</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#a855f7]" />
                <a href="tel:+14374730042" className="hover:text-white font-mono font-semibold">
                  +1 (437) 473-0042
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#06b6d4]" />
                <a href="mailto:info@xolounge.ca" className="hover:text-white font-mono">
                  info@xolounge.ca
                </a>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/xo_lounge_toronto/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#151824] hover:bg-[#1c2030] text-white flex items-center justify-center border border-white/10 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-[#f43f5e]" />
              </a>
              <a
                href="https://www.facebook.com/xoloungetoronto/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#151824] hover:bg-[#1c2030] text-white flex items-center justify-center border border-white/10 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4 text-[#3b82f6]" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6b7280] gap-4">
          <div>
            © {new Date().getFullYear()} XO Lounge Toronto. All rights reserved. 19+ Legal Drinking
            Age.
          </div>
          <div className="font-mono text-[11px] text-[#a855f7]">
            {language === "en" ? "ስለጎበኙን እናመሰግናለን • Welcome Always" : "ስለጎበኙን እናመሰግናለን"}
          </div>
        </div>
      </div>
    </footer>
  );
}
