"use client";

import { ArrowRight, Compass, GlassWater, Music, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

  return (
    <main className="relative selection:bg-[#c5a880] selection:text-[#08090b]">
      {/* 1. Cinematic Hero Section */}
      <section className="relative min-h-[92dvh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#08090b]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#08090b]/60 to-[#08090b] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-7">
              {/* Location Tag */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#c5a880]/30 bg-[#12141c]">
                <span className="w-2 h-2 rounded-full bg-[#c5a880]" />
                <span className="font-mono text-[11px] tracking-[0.2em] text-[#e6d5b8] uppercase">
                  {language === "en"
                    ? "364 Queen St East • Corktown Toronto"
                    : "364 ንግሥት ጎዳና ምስራቅ • ቶሮንቶ"}
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                  {language === "en" ? (
                    <>
                      WHERE SOUND <br />
                      <span className="text-[#c5a880]">MEETS SANCTUARY.</span>
                    </>
                  ) : (
                    <>
                      የምሽት ህይወት <br />
                      <span className="text-[#c5a880]">ከከፍተኛ ድባብ ጋር</span>
                    </>
                  )}
                </h1>
                {language === "en" && (
                  <p className="font-serif italic text-base sm:text-lg text-[#a1a1aa] tracking-wide">
                    An elevated East African & global nightlife experience in Corktown.
                  </p>
                )}
              </div>

              {/* Editorial Subtitle */}
              <p className="text-sm sm:text-base text-[#a1a1aa] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {language === "en"
                  ? "XO Lounge redefines Toronto nightlife. Custom architectural illumination, curated Afrobeats, Amapiano and R&B weekend DJ lineups, private VIP bottle service booths, and signature diaspora-infused craft cocktails."
                  : "በቶሮንቶ ምርጥ የምሽት ክበብ እና ላውንጅ ይደሰቱ። ዘመናዊ መብራቶች፣ አስደሳች የአፍሮቢትስ እና R&B ሙዚቃዎች፣ የቪአይፒ ቦቲል ሰርቪስ እና ልዩ ኮክቴሎች።"}
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/tables"
                  className="w-full sm:w-auto px-8 py-4 rounded-md bg-[#c5a880] hover:bg-[#d4af37] text-[#08090b] font-semibold text-xs sm:text-sm tracking-[0.15em] uppercase transition-all flex items-center justify-center gap-3 cursor-pointer min-h-[48px] shadow-lg shadow-black/40"
                >
                  <Sparkles className="w-4 h-4 text-[#08090b]" />
                  <span>{language === "en" ? "RESERVE VIP TABLE" : "ቪአይፒ ቦታ ይያዙ"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/events"
                  className="w-full sm:w-auto px-7 py-4 rounded-md border border-white/20 hover:border-[#c5a880] hover:text-[#e6d5b8] text-white font-medium text-xs sm:text-sm tracking-[0.15em] uppercase transition-colors flex items-center justify-center gap-2.5 min-h-[48px]"
                >
                  <Music className="w-4 h-4 text-[#c5a880]" />
                  <span>{language === "en" ? "DJ RESIDENCIES" : "የሳምንቱ ዲጄዎች"}</span>
                </Link>
              </div>

              {/* Highlights Micro-Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
                <div className="p-3.5 rounded-md bg-[#11131a] border border-white/5 text-left">
                  <div className="flex items-center gap-1.5 text-[#c5a880] mb-1">
                    <Music className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-mono tracking-wider font-semibold uppercase">
                      DJs FRI–SUN
                    </span>
                  </div>
                  <div className="text-[11px] text-[#71717a]">Afrobeats, Amapiano & R&B</div>
                </div>

                <div className="p-3.5 rounded-md bg-[#11131a] border border-white/5 text-left">
                  <div className="flex items-center gap-1.5 text-[#c5a880] mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-mono tracking-wider font-semibold uppercase">
                      VIP BOOTHS
                    </span>
                  </div>
                  <div className="text-[11px] text-[#71717a]">Dedicated Concierge Host</div>
                </div>

                <div className="p-3.5 rounded-md bg-[#11131a] border border-white/5 text-left">
                  <div className="flex items-center gap-1.5 text-[#c5a880] mb-1">
                    <GlassWater className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-mono tracking-wider font-semibold uppercase">
                      CRAFT BAR
                    </span>
                  </div>
                  <div className="text-[11px] text-[#71717a]">Diaspora Botanicals & Bites</div>
                </div>

                <div className="p-3.5 rounded-md bg-[#11131a] border border-white/5 text-left">
                  <div className="flex items-center gap-1.5 text-[#c5a880] mb-1">
                    <Compass className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-mono tracking-wider font-semibold uppercase">
                      CORKTOWN
                    </span>
                  </div>
                  <div className="text-[11px] text-[#71717a]">Queen East & Parliament</div>
                </div>
              </div>
            </div>

            {/* Right Monograph Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-white/15 bg-[#10121a] shadow-2xl shadow-black/80">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/venue-interior.jpg"
                    alt="XO Lounge Toronto Interior with custom geometric lighting and marble bar"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-transparent to-black/20" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#c5a880] uppercase">
                      MAIN ROOM ARCHITECTURE
                    </span>
                    <span className="text-[10px] font-mono text-[#71717a]">364 QUEEN ST E</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                    Geometric Illumination & Marble Bar
                  </h3>

                  <p className="text-xs text-[#a1a1aa] leading-relaxed">
                    Designed for milestone celebrations, weekend table service, and private buyouts.
                    Featuring state-of-the-art acoustic tuning and elevated booth sightlines.
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs">
                    <span className="text-[#71717a]">Table RSVP Direct:</span>
                    <a
                      href="tel:+14374730042"
                      className="text-[#e6d5b8] font-mono font-medium hover:text-white transition-colors"
                    >
                      +1 437-473-0042
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Atmosphere & Cultural Narrative (Spacious Editorial Section) */}
      <section className="py-24 sm:py-32 bg-[#0c0d12] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Visual Atmosphere */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/11] rounded-xl overflow-hidden border border-white/15 bg-[#12141c] shadow-2xl">
                <Image
                  src="/images/venue-interior.jpg"
                  alt="XO Lounge Atmosphere"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090b]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] font-mono tracking-widest text-[#c5a880] uppercase block mb-1">
                    CORKTOWN TORONTO
                  </span>
                  <span className="font-serif text-lg font-bold text-white block">
                    The Main Salon & Geometric Canopy
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c5a880]/30 bg-[#12141c] text-xs font-mono text-[#e6d5b8]">
                <span className="tracking-widest uppercase">THE XO PHILOSOPHY</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                Where Toronto Meets East Africa After Dark.
              </h2>

              <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
                Nestled on Queen Street East near Parliament, XO Lounge brings together Toronto's
                diverse nightlife culture with the soul, rhythm, and hospitality of the East African
                diaspora.
              </p>

              <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
                Whether you arrive for our Friday & Saturday DJ residencies, celebrate a birthday
                with bespoke sparkler service, or sip artisanal cocktails crafted with Ethiopian
                honey and wild korerima, every evening is crafted with effortless sophistication.
              </p>

              <div className="pt-2 flex items-center gap-6">
                <Link
                  href="/info"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#c5a880] hover:text-[#e6d5b8] uppercase tracking-[0.15em] transition-colors"
                >
                  <span>Location, Hours & Dress Code</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Pillars: Seating, Sound, Menus (Spacious 3-Column Editorial Grid) */}
      <section className="py-24 sm:py-32 bg-[#08090b] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-[#c5a880] uppercase block">
              EXPERIENCE THE ROOM
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Hospitality, Music & Mixology
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: VIP Tables */}
            <div className="rounded-xl border border-white/10 bg-[#0f1117] p-8 flex flex-col justify-between space-y-6 hover:border-[#c5a880]/40 transition-all duration-300 shadow-xl group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#141620] border border-white/10 flex items-center justify-center text-[#c5a880]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                  VIP Tables & Seating
                </h3>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  Interactive architectural floorplan, transparent bottle minimum spend parameters
                  ($400–$750 CAD), sparkler presentations, and dedicated VIP host service.
                </p>
              </div>
              <Link
                href="/tables"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#c5a880] group-hover:text-white transition-colors"
              >
                <span>Explore Tables & Floorplan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Pillar 2: Weekend Residencies */}
            <div className="rounded-xl border border-white/10 bg-[#0f1117] p-8 flex flex-col justify-between space-y-6 hover:border-[#c5a880]/40 transition-all duration-300 shadow-xl group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#141620] border border-white/10 flex items-center justify-center text-[#c5a880]">
                  <Music className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                  Sound & DJ Residencies
                </h3>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  Friday and Saturday headliners spinning Afrobeats, Amapiano, R&B, and global club
                  anthems. Complimentary guestlist entry passes available before 11:00 PM.
                </p>
              </div>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#c5a880] group-hover:text-white transition-colors"
              >
                <span>View Program & Guestlist</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Pillar 3: Diaspora Dining & Mixology */}
            <div className="rounded-xl border border-white/10 bg-[#0f1117] p-8 flex flex-col justify-between space-y-6 hover:border-[#c5a880]/40 transition-all duration-300 shadow-xl group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#141620] border border-white/10 flex items-center justify-center text-[#c5a880]">
                  <GlassWater className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                  Cocktails & Diaspora Tapas
                </h3>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  Craft cocktail repertoire highlighting botanical infusions (Amharic Gold, Queen
                  East Old Fashioned) alongside crisp beef sambusas, lamb riblets, and prestige
                  bottles.
                </p>
              </div>
              <Link
                href="/menus"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#c5a880] group-hover:text-white transition-colors"
              >
                <span>Explore Curated Menus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Private Buyouts & Celebrations Invitation Strip */}
      <section className="py-20 bg-[#0c0d12] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-[#12141c] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#c5a880] uppercase block">
                SPECIAL OCCASIONS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Celebrating a Birthday or Planning a Private Buyout?
              </h3>
              <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-xl">
                We host private corporate receptions, holiday celebrations, and milestone birthdays
                with bespoke catering, mixology, and full A/V screen takeover for up to 150 guests.
              </p>
            </div>

            <Link
              href="/private-events"
              className="px-8 py-4 min-h-[48px] rounded-md bg-[#c5a880] hover:bg-[#d4af37] text-[#08090b] text-xs uppercase tracking-[0.15em] font-semibold whitespace-nowrap transition-all shadow-md flex items-center gap-2"
            >
              <span>Plan Private Event</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
