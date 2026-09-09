"use client";

import {
  ArrowRight,
  Check,
  ChevronRight,
  MessageCircle,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

interface BottleServiceProps {
  initialBooth?: string;
  initialMinSpend?: number;
  initialGuests?: number;
  language: "en" | "am";
}

interface PackageTier {
  id: string;
  name: string;
  tag: string;
  price: number;
  maxGuests: number;
  bottlesIncluded: string;
  features: string[];
  popular?: boolean;
}

const PACKAGES: PackageTier[] = [
  {
    id: "silver",
    name: "The Corktown Sovereign",
    tag: "Essential Hospitality",
    price: 450,
    maxGuests: 6,
    bottlesIncluded: "1 Premium Spirit (Casamigos Blanco, Grey Goose, or Hennessy VS)",
    features: [
      "Up to 6 complimentary VIP line-bypass admissions",
      "Dedicated table server and ice/mixer service",
      "Unlimited premium juices, tonics & sodas",
      "Prime lounge floor vantage",
    ],
  },
  {
    id: "gold",
    name: "The Empress Reserve",
    tag: "Signature Experience",
    price: 750,
    maxGuests: 10,
    bottlesIncluded: "2 Premium Spirits + 1 Chilled Champagne (Moët & Chandon or Luc Belaire)",
    features: [
      "Up to 10 complimentary VIP line-bypass admissions",
      "Signature bottle presentation parade with dedicated team",
      "Choice of Don Julio Reposado, Hennessy VSOP, or Casamigos Reposado",
      "Personalized LED Celebration Sign on request",
      "Dedicated VIP bottle concierge host",
    ],
    popular: true,
  },
  {
    id: "platinum",
    name: "The Royal XO Dynasty",
    tag: "Ultra-Prestige",
    price: 1400,
    maxGuests: 15,
    bottlesIncluded: "3 Prestige Spirits (Clase Azul / Don Julio 1942) + 1 Vintage Dom Pérignon",
    features: [
      "Up to 15 complimentary expedited VIP admissions",
      "Full bottle presentation ceremony with stage announcement",
      "Prime DJ Stage VIP booth seating guaranteed",
      "Dedicated private security host & bespoke mixer service",
      "Complimentary Ethiopian tapas platter for the booth",
    ],
  },
];

export default function BottleServiceCalculator({
  initialBooth = "Main Room Banquette",
  initialMinSpend = 500,
  initialGuests = 8,
  language,
}: BottleServiceProps) {
  const [selectedPackage, setSelectedPackage] = useState<PackageTier>(PACKAGES[1]);
  const [occasion, setOccasion] = useState<string>("birthday");
  const [partyDate, setPartyDate] = useState<string>("");
  const [guestCount, setGuestCount] = useState<number>(initialGuests);
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [specialRequests, setSpecialRequests] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Sync state when floorplan booth selection changes
  useEffect(() => {
    setGuestCount(initialGuests);
    if (initialMinSpend >= 1400) {
      setSelectedPackage(PACKAGES[2]);
    } else if (initialMinSpend <= 450) {
      setSelectedPackage(PACKAGES[0]);
    } else {
      setSelectedPackage(PACKAGES[1]);
    }
  }, [initialMinSpend, initialGuests]);

  const calculateTotal = () => {
    return Math.max(selectedPackage.price, initialMinSpend);
  };

  const handleWhatsAppBooking = () => {
    const text =
      `Hi XO Lounge Toronto Concierge! I would like to reserve a VIP Table for ${occasion.toUpperCase()}.\n\n` +
      `• Preferred Area: ${initialBooth}\n` +
      `• Selected Package: ${selectedPackage.name} ($${calculateTotal()} CAD)\n` +
      `• Guests: ${guestCount} people\n` +
      `• Date: ${partyDate || "Upcoming Weekend"}\n` +
      `• Guest Name: ${fullName || "Guest"}\n` +
      `• Special Requests: ${specialRequests || "None"}\n\nPlease let me know table availability!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/14374730042?text=${encoded}`, "_blank");
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="bottle-service"
      className="py-24 bg-[#08090b] border-t border-white/5 relative scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="font-sculpted text-xs tracking-[0.25em] text-[#d4af37] uppercase block font-semibold">
            CONCIERGE TABLE SERVICE & CURATION
          </span>

          <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white tracking-tight">
            {language === "en" ? "VIP Table Service & Packages" : "የጠረጴዛ እና የቦቲል ሰርቪስ"}
          </h2>

          <p className="text-sm sm:text-base text-[#9ea2ac]">
            {language === "en"
              ? "Elevate your weekend at XO Lounge. Every VIP table includes dedicated concierge host service, expedited line-bypass admissions, unlimited craft mixers, and bespoke bottle presentations."
              : "የእርስዎን ቅዳሜና እሁድ በኤክስኦ ላውንጅ ያሳልፉ። እያንዳንዱ የቪአይፒ ፓኬጅ ልዩ አስተናጋጅ፣ የመስመር መዝለል እና የክብር አቀባበል ያካትታል።"}
          </p>
        </div>

        {/* Hospitality Ledger Selector (Editorial, No SaaS Cards) */}
        <div className="border border-white/10 bg-[#0b0d13] p-6 sm:p-8 mb-16 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-sculpted text-xs tracking-[0.25em] text-[#d4af37] uppercase font-semibold">
              SELECT HOSPITALITY TIER
            </span>
            <span className="font-mono text-xs text-[#6b707d] uppercase">
              ALL PACKAGES INCLUDE LINE-BYPASS & DEDICATED HOST
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PACKAGES.map((pkg) => {
              const isSelected = selectedPackage.id === pkg.id;
              return (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setSelectedPackage(pkg)}
                  className={`p-5 sm:p-6 text-left border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                    isSelected
                      ? "bg-[#141722] border-[#d4af37] shadow-lg shadow-[#d4af37]/10"
                      : "bg-[#08090e] border-white/10 hover:border-white/20 hover:bg-[#10121a]"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-widest text-[#6b707d] uppercase">
                        {pkg.tag}
                      </span>
                      <span className="font-mono text-xs text-[#d4af37] flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        Up to {pkg.maxGuests}
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl font-normal text-white tracking-wide">
                      {pkg.name}
                    </h3>

                    <div className="font-mono text-2xl font-bold text-[#f3e5ab] pt-1">
                      ${pkg.price}{" "}
                      <span className="text-xs text-[#6b707d] font-normal">CAD + grat</span>
                    </div>

                    <p className="text-xs text-[#9ea2ac] leading-relaxed pt-1">
                      {pkg.bottlesIncluded}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                    <span className={isSelected ? "text-[#d4af37] font-bold" : "text-[#6b707d]"}>
                      {isSelected ? "● ACTIVE SELECTION" : "SELECT TIER"}
                    </span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 ${isSelected ? "text-[#d4af37]" : "text-[#6b707d]"}`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Tier Privileges Inclusions Strip */}
          <div className="p-4 rounded-sm bg-[#040507] border border-white/5 text-xs text-[#9ea2ac] flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="font-sculpted text-[11px] text-[#d4af37] uppercase tracking-wider font-semibold">
              {selectedPackage.name} Privileges:
            </span>
            {selectedPackage.features.map((feat) => (
              <span key={feat} className="flex items-center gap-1.5 text-[#d4d4d8]">
                <Check className="w-3 h-3 text-[#d4af37]" />
                {feat}
              </span>
            ))}
          </div>
        </div>

        {/* Live Interactive Booking Concierge Box */}
        <div className="bg-[#0f1117] border border-white/15 rounded-xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form Fields (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] font-sculpted text-[#d4af37] font-semibold tracking-widest uppercase block mb-1">
                  DIRECT CONCIERGE INQUIRY
                </span>
                <h3 className="font-editorial text-3xl font-normal text-white tracking-wide">
                  Table Reservation Request
                </h3>
                <p className="text-xs sm:text-sm text-[#9ea2ac] mt-1">
                  Direct inquiry to the XO Lounge hospitality concierge team. We confirm table
                  allocations promptly within 2 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-[#0b0d13] border border-[#d4af37]/40 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-editorial text-2xl font-normal text-white">
                    Reservation Request Received
                  </h4>
                  <p className="text-sm text-[#d4d4d8] max-w-md mx-auto">
                    Thank you, {fullName || "Guest"}. The XO Lounge VIP Concierge will contact you
                    at {phoneNumber || "+1 437-473-0042"} to finalize booth placement and bottle
                    selection.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-md bg-[#d4af37] text-[#040507] text-xs font-sculpted font-bold uppercase tracking-wider"
                    >
                      Make Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitInquiry} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="vip-fullname"
                        className="text-[11px] font-mono text-[#9ea2ac] block mb-1.5 uppercase tracking-wider"
                      >
                        Full Name *
                      </label>
                      <input
                        id="vip-fullname"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Marcus Vance"
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-[#08090e] border border-white/10 text-white text-sm focus:border-[#d4af37] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="vip-phone"
                        className="text-[11px] font-mono text-[#9ea2ac] block mb-1.5 uppercase tracking-wider"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="vip-phone"
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+1 (437) 473-0042"
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-[#08090e] border border-white/10 text-white text-sm focus:border-[#d4af37] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="vip-occasion"
                        className="text-[11px] font-mono text-[#9ea2ac] block mb-1.5 uppercase tracking-wider"
                      >
                        Occasion Type
                      </label>
                      <select
                        id="vip-occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-[#08090e] border border-white/10 text-white text-sm focus:border-[#d4af37] focus:outline-none"
                      >
                        <option value="birthday">Birthday Milestone Celebration</option>
                        <option value="weekend">Weekend Table Hospitality</option>
                        <option value="holiday">Holiday / Seasonal Gathering</option>
                        <option value="bachelorette">Bachelorette / Bachelor Toast</option>
                        <option value="corporate">Private Corporate / Buyout</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="vip-date"
                        className="text-[11px] font-mono text-[#9ea2ac] block mb-1.5 uppercase tracking-wider"
                      >
                        Target Date
                      </label>
                      <input
                        id="vip-date"
                        type="date"
                        required
                        value={partyDate}
                        onChange={(e) => setPartyDate(e.target.value)}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-[#08090e] border border-white/10 text-white text-sm focus:border-[#d4af37] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="vip-party-size"
                        className="text-[11px] font-mono text-[#9ea2ac] block mb-1.5 uppercase tracking-wider"
                      >
                        Party Size ({guestCount} Guests)
                      </label>
                      <input
                        id="vip-party-size"
                        type="range"
                        min="2"
                        max="20"
                        value={guestCount}
                        onChange={(e) => setGuestCount(parseInt(e.target.value, 10))}
                        className="w-full min-h-[44px] accent-[#d4af37] cursor-pointer"
                      />
                    </div>

                    <div>
                      <span className="text-[11px] font-mono text-[#9ea2ac] block mb-1.5 uppercase tracking-wider">
                        Package Tier
                      </span>
                      <div className="px-3.5 py-2 rounded-md bg-[#08090e] text-xs font-mono text-[#f3e5ab] border border-white/10 min-h-[44px] flex items-center">
                        {selectedPackage.name} (${selectedPackage.price} CAD)
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="vip-requests"
                      className="text-[11px] font-mono text-[#9ea2ac] block mb-1.5 uppercase tracking-wider"
                    >
                      Special Requests / Spirits Preferences
                    </label>
                    <textarea
                      id="vip-requests"
                      rows={2}
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="e.g. Clase Azul Reposado request, guest of honor name for announcement, champagne chilling preferences..."
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#08090e] border border-white/10 text-white text-sm focus:border-[#d4af37] focus:outline-none"
                    />
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 min-h-[48px] py-3.5 px-6 rounded-md bg-[#d4af37] hover:bg-[#e6c34e] text-[#040507] font-sculpted font-bold text-xs uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-black/80"
                    >
                      <Sparkles className="w-4 h-4 text-[#040507]" />
                      <span>SUBMIT TABLE REQUEST</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppBooking}
                      className="min-h-[48px] py-3.5 px-6 rounded-md border border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-950/40 text-emerald-300 font-sculpted font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Instant WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Live Pricing Summary & VIP Host Contact (5 cols) */}
            <div className="lg:col-span-5 bg-[#0b0d13] border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] font-sculpted text-[#d4af37] uppercase tracking-widest font-bold block">
                  ESTIMATED COMMITMENT SUMMARY
                </span>

                <div className="space-y-3 pb-4 border-b border-white/10 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#9ea2ac]">Preferred Table:</span>
                    <span className="font-semibold text-white">{initialBooth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9ea2ac]">Table Min. Spend:</span>
                    <span className="font-mono text-[#f3e5ab]">${initialMinSpend} CAD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9ea2ac]">Package Selection:</span>
                    <span className="font-semibold text-white">
                      {selectedPackage.name} (${selectedPackage.price} CAD)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9ea2ac]">Party Capacity:</span>
                    <span className="font-semibold text-white">{guestCount} Guests</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9ea2ac]">Occasion:</span>
                    <span className="font-semibold text-[#f3e5ab] capitalize">{occasion}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9ea2ac]">Bottle Presentation:</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-mono">
                      ✓ Included
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-[#9ea2ac]">Total Bottle Credit:</span>
                    <span className="text-3xl font-mono font-bold text-[#f3e5ab]">
                      ${calculateTotal()} CAD
                    </span>
                  </div>
                  <div className="text-[11px] text-[#6b707d] leading-tight">
                    *100% applied toward bottle and beverage orders. No venue cover charges for
                    table guests.
                  </div>
                </div>
              </div>

              {/* Direct Venue RSVP Contact Box */}
              <div className="p-4 rounded-lg bg-[#040507] border border-white/10 space-y-2.5">
                <div className="text-xs text-[#9ea2ac] flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Direct phone line to our VIP Concierge:</span>
                </div>
                <a
                  href="tel:+14374730042"
                  className="w-full min-h-[44px] py-2.5 px-4 rounded-md bg-[#0b0d13] hover:bg-[#141722] text-white text-xs font-mono font-bold flex items-center justify-center gap-2 border border-white/10 transition-colors"
                >
                  <span>CALL +1 (437) 473-0042</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#d4af37]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
