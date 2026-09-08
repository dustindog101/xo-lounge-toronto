"use client";

import {
  ArrowRight,
  Check,
  Flame,
  MessageCircle,
  Phone,
  Sparkles,
  Users,
  Wine,
} from "lucide-react";
import { useState } from "react";

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
    name: "Silver Package",
    tag: "Essential VIP",
    price: 350,
    maxGuests: 6,
    bottlesIncluded: "1 Premium Spirit (Grey Goose, Casamigos Blanco, or Hennessy VS)",
    features: [
      "Up to 6 complimentary VIP line-bypass admissions",
      "Dedicated table server throughout the night",
      "Unlimited premium juices, sodas & ice refills",
      "Access to central dance floor",
    ],
  },
  {
    id: "gold",
    name: "XO Gold Package",
    tag: "Most Popular",
    price: 750,
    maxGuests: 10,
    bottlesIncluded: "2 Premium Spirits + 1 Chilled Champagne (Moët or Belaire)",
    features: [
      "Up to 10 complimentary VIP line-bypass admissions",
      "High-energy Sparkler Bottle Parade presentation",
      "Choice of Don Julio Reposado, Hennessy VSOP, or Casamigos",
      "Free custom Birthday LED Marquee sign upon request",
      "Dedicated VIP bottle host",
    ],
    popular: true,
  },
  {
    id: "platinum",
    name: "XO Platinum Parade",
    tag: "Ultimate Luxury",
    price: 1400,
    maxGuests: 15,
    bottlesIncluded: "3 Ultra-Spirits (Clase Azul / 1942) + 1 Dom Pérignon",
    features: [
      "Up to 15 complimentary VIP admissions with priority entry",
      "Grand Sparkler Train show with stage announcement",
      "Custom lighted marquee board with your name / celebration",
      "Prime DJ Stage VIP booth seating guaranteed",
      "Personal VIP security host & unlimited mixer upgrades",
    ],
  },
];

export default function BottleServiceCalculator({
  initialBooth = "Main Floor Banquette",
  initialMinSpend = 450,
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

  const calculateTotal = () => {
    return Math.max(selectedPackage.price, initialMinSpend);
  };

  const handleWhatsAppBooking = () => {
    const text =
      `Hi XO Lounge Toronto! I would like to book a VIP Booth for ${occasion.toUpperCase()}.\n\n` +
      `• Package: ${selectedPackage.name} ($${calculateTotal()} CAD)\n` +
      `• Guests: ${guestCount} people\n` +
      `• Date: ${partyDate || "Upcoming Weekend"}\n` +
      `• Name: ${fullName || "Guest"}\n` +
      `• Notes: ${specialRequests || "None"}\n\nPlease confirm availability!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/14374730042?text=${encoded}`, "_blank");
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="bottle-service" className="py-24 bg-[#0a0c12] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#f59e0b]/30 bg-[#151824] text-xs font-mono text-[#fbbf24]">
            <Wine className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>VIP BOTTLE SERVICE & CELEBRATIONS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {language === "en" ? "VIP BOTTLE PACKAGES" : "የቦቲል ሰርቪስ ፓኬጆች"}
          </h2>

          <p className="text-sm sm:text-base text-[#9ca3af]">
            {language === "en"
              ? "Elevate your weekend at XO Lounge. Every VIP package includes dedicated host service, skip-the-line admissions, unlimited mixers, and high-energy sparkler presentations."
              : "የእርስዎን ቅዳሜና እሁድ በኤክስኦ ላውንጅ ያሳልፉ። እያንዳንዱ የቪአይፒ ፓኬጅ ልዩ አስተናጋጅ፣ የመስመር መዝለል እና የስፓርክለር ማሳያን ያካትታል።"}
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-7 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.popular
                  ? "bg-gradient-to-b from-[#1c2030] to-[#0f1118] border-2 border-[#a855f7] shadow-2xl shadow-[#a855f7]/20 md:-translate-y-2"
                  : "bg-[#0f1118] border border-white/10 hover:border-white/20"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#a855f7] to-[#f43f5e] text-white text-[11px] font-mono font-bold tracking-wider uppercase shadow-md">
                  MOST POPULAR • SPARKLER SHOW
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#9ca3af] uppercase tracking-wider">
                    {pkg.tag}
                  </span>
                  <span className="text-xs font-mono text-[#a855f7] flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    Up to {pkg.maxGuests} Guests
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white">{pkg.name}</h3>

                <div className="pt-2">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-gradient-gold">
                    ${pkg.price}
                  </span>
                  <span className="text-xs text-[#9ca3af] ml-2">CAD + tax/grat</span>
                </div>

                <div className="p-3 rounded-xl bg-[#151824] border border-white/5 text-xs text-[#e5e7eb] leading-relaxed">
                  <strong className="text-[#a855f7] block mb-1">Included Bottles:</strong>
                  {pkg.bottlesIncluded}
                </div>

                <div className="space-y-2.5 pt-2">
                  <span className="text-[11px] font-mono text-[#9ca3af] uppercase tracking-wider block">
                    PACKAGE PRIVILEGES:
                  </span>
                  <ul className="space-y-2">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs text-[#d1d5db]">
                        <Check className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" />
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
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                    selectedPackage.id === pkg.id
                      ? "bg-gradient-to-r from-[#a855f7] to-[#f43f5e] text-white shadow-lg shadow-[#a855f7]/30"
                      : "bg-[#151824] border border-white/10 text-white hover:bg-[#1c2030]"
                  }`}
                >
                  {selectedPackage.id === pkg.id ? "✓ Package Selected" : `Select ${pkg.name}`}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Live Interactive Booking Drawer / Form */}
        <div className="bg-[#0f1118] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form Fields (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono text-[#a855f7] font-semibold tracking-wider uppercase block mb-1">
                  CUSTOMIZE YOUR NIGHT
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  VIP Reservation Request
                </h3>
                <p className="text-xs sm:text-sm text-[#9ca3af] mt-1">
                  Direct inquiry to the XO Lounge hospitality concierge. We confirm all reservations
                  within 2 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-white">
                    Reservation Request Received!
                  </h4>
                  <p className="text-sm text-emerald-200/90 max-w-md mx-auto">
                    Thank you, {fullName || "Guest"}. The XO Lounge VIP Host team will contact you
                    at {phoneNumber || "+1 437-473-0042"} to finalize your booth placement and
                    bottle selection.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
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
                        className="text-xs font-semibold text-[#9ca3af] block mb-1.5 uppercase tracking-wider"
                      >
                        Full Name *
                      </label>
                      <input
                        id="vip-fullname"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Marcus Vance"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#07080b] border border-white/10 text-white text-sm focus:border-[#a855f7] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="vip-phone"
                        className="text-xs font-semibold text-[#9ca3af] block mb-1.5 uppercase tracking-wider"
                      >
                        Mobile Phone Number *
                      </label>
                      <input
                        id="vip-phone"
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="e.g. +1 (437) 473-0042"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#07080b] border border-white/10 text-white text-sm focus:border-[#a855f7] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="vip-occasion"
                        className="text-xs font-semibold text-[#9ca3af] block mb-1.5 uppercase tracking-wider"
                      >
                        Occasion / Event Type
                      </label>
                      <select
                        id="vip-occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#07080b] border border-white/10 text-white text-sm focus:border-[#a855f7] focus:outline-none"
                      >
                        <option value="birthday">
                          🎂 Birthday Celebration (Free Marquee & Sparkler)
                        </option>
                        <option value="weekend">🍾 Weekend VIP Night Out</option>
                        <option value="xmas">🎄 Holiday / Christmas Party</option>
                        <option value="bachelorette">💍 Bachelorette / Bachelor Party</option>
                        <option value="corporate">🏢 Corporate / Private Buyout</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="vip-date"
                        className="text-xs font-semibold text-[#9ca3af] block mb-1.5 uppercase tracking-wider"
                      >
                        Reservation Date
                      </label>
                      <input
                        id="vip-date"
                        type="date"
                        required
                        value={partyDate}
                        onChange={(e) => setPartyDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#07080b] border border-white/10 text-white text-sm focus:border-[#a855f7] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="vip-party-size"
                        className="text-xs font-semibold text-[#9ca3af] block mb-1.5 uppercase tracking-wider"
                      >
                        Expected Party Size ({guestCount} Guests)
                      </label>
                      <input
                        id="vip-party-size"
                        type="range"
                        min="2"
                        max="25"
                        value={guestCount}
                        onChange={(e) => setGuestCount(parseInt(e.target.value, 10))}
                        className="w-full accent-[#a855f7] cursor-pointer"
                      />
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-[#9ca3af] block mb-1.5 uppercase tracking-wider">
                        Selected Package
                      </span>
                      <div className="px-3.5 py-2 rounded-xl bg-[#151824] text-xs font-mono text-[#d8b4fe] border border-white/10">
                        {selectedPackage.name} (${selectedPackage.price} CAD)
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="vip-requests"
                      className="text-xs font-semibold text-[#9ca3af] block mb-1.5 uppercase tracking-wider"
                    >
                      Special Requests / Bottle Preferences (Optional)
                    </label>
                    <textarea
                      id="vip-requests"
                      rows={2}
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="e.g. Casamigos Reposado preferred, guest of honour name for LED marquee, bottle sparklers..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#07080b] border border-white/10 text-white text-sm focus:border-[#a855f7] focus:outline-none"
                    />
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#a855f7] via-[#c026d3] to-[#f43f5e] text-white font-bold text-sm shadow-lg shadow-[#a855f7]/30 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Submit VIP Booking Request</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppBooking}
                      className="py-3.5 px-6 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Instant WhatsApp RSVP</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Live Pricing Summary & VIP Host Contact (5 cols) */}
            <div className="lg:col-span-5 bg-[#151824] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-mono text-[#f59e0b] uppercase tracking-wider font-bold block">
                  BOOKING SUMMARY & QUOTE
                </span>

                <div className="space-y-3 pb-4 border-b border-white/10 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#9ca3af]">Preferred Booth:</span>
                    <span className="font-semibold text-[#67e8f9]">{initialBooth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9ca3af]">Selected Tier:</span>
                    <span className="font-semibold text-white">{selectedPackage.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9ca3af]">Party Size:</span>
                    <span className="font-semibold text-white">{guestCount} Guests</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9ca3af]">Occasion:</span>
                    <span className="font-semibold text-[#d8b4fe] capitalize">{occasion}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9ca3af]">Sparkler Show:</span>
                    <span className="font-semibold text-emerald-400 flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5" /> Included
                    </span>
                  </div>
                  {occasion === "birthday" && (
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">LED Marquee Sign:</span>
                      <span className="font-semibold text-emerald-400">FREE Special Perk ✨</span>
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-[#9ca3af]">Estimated Minimum Spend:</span>
                    <span className="text-3xl font-mono font-bold text-gradient-gold">
                      ${calculateTotal()} CAD
                    </span>
                  </div>
                  <div className="text-[11px] text-[#6b7280]">
                    100% credited toward your bottle orders on the night. No hidden room rental fee.
                  </div>
                </div>
              </div>

              {/* Direct Venue RSVP Contact Box */}
              <div className="p-4 rounded-xl bg-[#0b0c13] border border-white/10 space-y-3">
                <div className="text-xs text-[#9ca3af] flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#f43f5e]" />
                  <span>Prefer to speak directly with our VIP Host?</span>
                </div>
                <a
                  href="tel:+14374730042"
                  className="w-full py-2.5 px-4 rounded-lg bg-[#1c2030] hover:bg-[#252b42] text-white text-xs font-mono font-bold flex items-center justify-center gap-2 border border-white/10 transition-colors"
                >
                  <span>CALL +1 (437) 473-0042</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
