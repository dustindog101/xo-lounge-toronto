"use client";

import {
  ArrowRight,
  Check,
  Crown,
  MessageCircle,
  Phone,
  Sparkles,
  Users,
  Wine,
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
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c5a880]/30 bg-[#12141c] text-xs font-mono text-[#e6d5b8]">
            <Wine className="w-3.5 h-3.5 text-[#c5a880]" />
            <span className="tracking-widest uppercase">CONCIERGE TABLE SERVICE & CURATION</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {language === "en" ? "VIP TABLE SERVICE & PACKAGES" : "የጠረጴዛ እና የቦቲል ሰርቪስ"}
          </h2>

          <p className="text-sm sm:text-base text-[#a1a1aa]">
            {language === "en"
              ? "Elevate your weekend at XO Lounge. Every VIP table includes dedicated concierge host service, expedited line-bypass admissions, unlimited craft mixers, and bespoke bottle presentations."
              : "የእርስዎን ቅዳሜና እሁድ በኤክስኦ ላውንጅ ያሳልፉ። እያንዳንዱ የቪአይፒ ፓኬጅ ልዩ አስተናጋጅ፣ የመስመር መዝለል እና የክብር አቀባበል ያካትታል።"}
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-xl p-7 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.popular
                  ? "bg-[#11131a] border-2 border-[#c5a880] shadow-xl md:-translate-y-1.5"
                  : "bg-[#0f1117] border border-white/10 hover:border-white/20"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#c5a880] text-[#08090b] text-[10px] font-mono font-bold tracking-[0.2em] uppercase shadow-md flex items-center gap-1.5">
                  <Crown className="w-3 h-3 text-[#08090b]" />
                  <span>SIGNATURE SELECTION</span>
                </div>
              )}

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase">
                    {pkg.tag}
                  </span>
                  <span className="text-xs font-mono text-[#c5a880] flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    Up to {pkg.maxGuests} Guests
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                  {pkg.name}
                </h3>

                <div className="pt-1">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-[#e6d5b8]">
                    ${pkg.price}
                  </span>
                  <span className="text-xs text-[#71717a] ml-2 font-mono">CAD + tax/grat</span>
                </div>

                <div className="p-3.5 rounded-lg bg-[#141620] border border-white/5 text-xs text-[#d4d4d8] leading-relaxed">
                  <strong className="text-[#c5a880] block mb-1 uppercase tracking-wider text-[10px] font-mono">
                    Bottle Provision:
                  </strong>
                  {pkg.bottlesIncluded}
                </div>

                <div className="space-y-2 pt-1">
                  <span className="text-[10px] font-mono text-[#71717a] uppercase tracking-widest block">
                    HOSPITALITY PRIVILEGES:
                  </span>
                  <ul className="space-y-2">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-[#a1a1aa]">
                        <Check className="w-3.5 h-3.5 text-[#c5a880] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => setSelectedPackage(pkg)}
                  className={`w-full min-h-[44px] py-3 px-4 rounded-md text-xs uppercase tracking-[0.15em] font-semibold transition-all cursor-pointer ${
                    selectedPackage.id === pkg.id
                      ? "bg-[#c5a880] text-[#08090b] shadow-md"
                      : "bg-[#181a24] border border-white/10 text-white hover:bg-[#202330]"
                  }`}
                >
                  {selectedPackage.id === pkg.id ? "✓ PACKAGE SELECTED" : `SELECT ${pkg.name}`}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Live Interactive Booking Concierge Box */}
        <div className="bg-[#0f1117] border border-white/15 rounded-xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form Fields (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] font-mono text-[#c5a880] font-semibold tracking-widest uppercase block mb-1">
                  DIRECT CONCIERGE INQUIRY
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  Table Reservation Request
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1">
                  Direct inquiry to the XO Lounge hospitality concierge team. We confirm table
                  allocations promptly within 2 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-[#12181d] border border-[#c5a880]/40 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#c5a880]/20 flex items-center justify-center text-[#c5a880]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-white">
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
                      className="px-6 py-2.5 rounded-md bg-[#c5a880] text-[#08090b] text-xs font-semibold uppercase tracking-wider"
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
                        className="text-[11px] font-mono text-[#a1a1aa] block mb-1.5 uppercase tracking-wider"
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
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-[#12141c] border border-white/10 text-white text-sm focus:border-[#c5a880] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="vip-phone"
                        className="text-[11px] font-mono text-[#a1a1aa] block mb-1.5 uppercase tracking-wider"
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
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-[#12141c] border border-white/10 text-white text-sm focus:border-[#c5a880] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="vip-occasion"
                        className="text-[11px] font-mono text-[#a1a1aa] block mb-1.5 uppercase tracking-wider"
                      >
                        Occasion Type
                      </label>
                      <select
                        id="vip-occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-[#12141c] border border-white/10 text-white text-sm focus:border-[#c5a880] focus:outline-none"
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
                        className="text-[11px] font-mono text-[#a1a1aa] block mb-1.5 uppercase tracking-wider"
                      >
                        Target Date
                      </label>
                      <input
                        id="vip-date"
                        type="date"
                        required
                        value={partyDate}
                        onChange={(e) => setPartyDate(e.target.value)}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-[#12141c] border border-white/10 text-white text-sm focus:border-[#c5a880] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="vip-party-size"
                        className="text-[11px] font-mono text-[#a1a1aa] block mb-1.5 uppercase tracking-wider"
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
                        className="w-full min-h-[44px] accent-[#c5a880] cursor-pointer"
                      />
                    </div>

                    <div>
                      <span className="text-[11px] font-mono text-[#a1a1aa] block mb-1.5 uppercase tracking-wider">
                        Package Tier
                      </span>
                      <div className="px-3.5 py-2 rounded-md bg-[#141620] text-xs font-mono text-[#e6d5b8] border border-white/10 min-h-[44px] flex items-center">
                        {selectedPackage.name} (${selectedPackage.price} CAD)
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="vip-requests"
                      className="text-[11px] font-mono text-[#a1a1aa] block mb-1.5 uppercase tracking-wider"
                    >
                      Special Requests / Spirits Preferences
                    </label>
                    <textarea
                      id="vip-requests"
                      rows={2}
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="e.g. Clase Azul Reposado request, guest of honor name for announcement, champagne chilling preferences..."
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#12141c] border border-white/10 text-white text-sm focus:border-[#c5a880] focus:outline-none"
                    />
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 min-h-[46px] py-3 px-6 rounded-md bg-[#c5a880] hover:bg-[#d4af37] text-[#08090b] font-semibold text-xs uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>SUBMIT TABLE REQUEST</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppBooking}
                      className="min-h-[46px] py-3 px-6 rounded-md border border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-950/40 text-emerald-300 font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Instant WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Live Pricing Summary & VIP Host Contact (5 cols) */}
            <div className="lg:col-span-5 bg-[#12141c] border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-[#c5a880] uppercase tracking-widest font-bold block">
                  ESTIMATED COMMITMENT SUMMARY
                </span>

                <div className="space-y-3 pb-4 border-b border-white/10 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#a1a1aa]">Preferred Table:</span>
                    <span className="font-semibold text-white">{initialBooth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#a1a1aa]">Table Min. Spend:</span>
                    <span className="font-mono text-[#e6d5b8]">${initialMinSpend} CAD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#a1a1aa]">Package Selection:</span>
                    <span className="font-semibold text-white">
                      {selectedPackage.name} (${selectedPackage.price} CAD)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#a1a1aa]">Party Capacity:</span>
                    <span className="font-semibold text-white">{guestCount} Guests</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#a1a1aa]">Occasion:</span>
                    <span className="font-semibold text-[#e6d5b8] capitalize">{occasion}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#a1a1aa]">Bottle Presentation:</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-mono">
                      ✓ Included
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-[#a1a1aa]">Total Bottle Credit:</span>
                    <span className="text-3xl font-mono font-bold text-[#e6d5b8]">
                      ${calculateTotal()} CAD
                    </span>
                  </div>
                  <div className="text-[11px] text-[#71717a] leading-tight">
                    *100% applied toward bottle and beverage orders. No venue cover charges for
                    table guests.
                  </div>
                </div>
              </div>

              {/* Direct Venue RSVP Contact Box */}
              <div className="p-4 rounded-lg bg-[#0b0d12] border border-white/10 space-y-2.5">
                <div className="text-xs text-[#a1a1aa] flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Direct phone line to our VIP Concierge:</span>
                </div>
                <a
                  href="tel:+14374730042"
                  className="w-full min-h-[44px] py-2.5 px-4 rounded-md bg-[#161922] hover:bg-[#1d212e] text-white text-xs font-mono font-bold flex items-center justify-center gap-2 border border-white/10 transition-colors"
                >
                  <span>CALL +1 (437) 473-0042</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c5a880]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
