"use client";

import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LuxuryAtmosphereCanvas from "@/components/canvas/LuxuryAtmosphereCanvas";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

  return (
    <main className="relative selection:bg-[#d4af37] selection:text-[#040507]">
      {/* 1. Cinematic Three.js Editorial Hero Section */}
      <section className="relative min-h-[96dvh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#040507]">
        {/* Living Three.js Ambient Canopy Canvas */}
        <LuxuryAtmosphereCanvas />

        {/* Ambient Film Grain & Vignette Overlay */}
        <div className="absolute inset-0 film-grain pointer-events-none opacity-40" />
        <div className="absolute inset-0 ambient-luxury-bg pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#040507]/40 to-[#040507] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: High-Fashion Typography & Tone */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-8">
              {/* Orchestrated Reveal 1: Coordinates Datum */}
              <div className="animate-reveal-1 flex items-center justify-center lg:justify-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
                <span className="font-mono text-[11px] tracking-[0.28em] text-[#9ea2ac] uppercase">
                  {language === "en"
                    ? "TORONTO • 43.6558° N, 79.3621° W • 364 QUEEN ST E"
                    : "ኮርክታውን ቶሮንቶ • 364 ንግሥት ጎዳና ምስራቅ"}
                </span>
              </div>

              {/* Orchestrated Reveal 2: Monumental Editorial Display */}
              <div className="animate-reveal-2 space-y-3">
                <h1 className="font-editorial text-5xl sm:text-7xl xl:text-8xl font-normal tracking-tight text-white leading-[0.96]">
                  {language === "en" ? (
                    <>
                      WHERE SOUND <br />
                      BECOMES SANCTUARY.
                    </>
                  ) : (
                    <>
                      የምሽት ህይወት <br />
                      ከከፍተኛ ድባብ ጋር
                    </>
                  )}
                </h1>
                <p className="font-sculpted text-sm sm:text-base text-[#d4af37] tracking-[0.18em] uppercase">
                  {language === "en"
                    ? "Afro-Diaspora Rhythm • VIP Seating • Botanical Mixology"
                    : "ዘመናዊ የምሽት ክበብ እና የቪአይፒ ላውንጅ በቶሮንቶ።"}
                </p>
              </div>

              {/* Orchestrated Reveal 3: Spatial Narrative */}
              <p className="animate-reveal-3 text-sm sm:text-base text-[#9ea2ac] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                {language === "en"
                  ? "Nestled in historic Corktown, XO Lounge pairs Toronto's late-night energy with the soul and hospitality of the East African diaspora. Interactive geometric canopy lighting, low-end Amapiano resonance, artisanal honey-infused mixology, and dedicated VIP bottle service."
                  : "በቶሮንቶ ምርጥ የምሽት ክበብ እና ላውንጅ ይደሰቱ። ዘመናዊ መብራቶች፣ አስደሳች የአፍሮቢትስ እና R&B ሙዚቃዎች፣ የቪአይፒ ቦቲል ሰርቪስ እና ልዩ ኮክቴሎች።"}
              </p>

              {/* Orchestrated Reveal 4: High-Touch CTAs */}
              <div className="animate-reveal-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/tables"
                  className="w-full sm:w-auto px-8 py-4 rounded-sm bg-[#d4af37] hover:bg-[#e6c34e] text-[#040507] font-sculpted font-bold text-xs tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-3 cursor-pointer min-h-[48px] shadow-xl shadow-black/80 hover:shadow-[#d4af37]/20"
                >
                  <Sparkles className="w-4 h-4 text-[#040507]" />
                  <span>{language === "en" ? "RESERVE VIP TABLE" : "ቪአይፒ ቦታ ይያዙ"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/events"
                  className="w-full sm:w-auto px-8 py-4 rounded-sm border border-white/20 hover:border-[#d4af37] hover:text-[#f3e5ab] text-white font-sculpted font-semibold text-xs tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2.5 min-h-[48px] bg-[#0b0d13]/60 backdrop-blur-sm"
                >
                  <span>{language === "en" ? "SOUND RESIDENCIES" : "የሳምንቱ ዲጄዎች"}</span>
                  <ChevronRight className="w-4 h-4 text-[#d4af37]" />
                </Link>
              </div>

              {/* Architectural Datum Line */}
              <div className="animate-reveal-4 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-2 text-[11px] font-mono tracking-widest text-[#6b707d] uppercase">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  DJs FRI–SUN
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  AFROBEATS & AMAPIANO
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  MARBLE ISLAND BAR
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  VIP CONCIERGE
                </span>
              </div>
            </div>

            {/* Right Column: Architectural Monograph Plate */}
            <div className="lg:col-span-5">
              <div className="relative border border-white/15 bg-[#0b0d13] p-3 sm:p-4 shadow-2xl shadow-black">
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10">
                  <Image
                    src="/images/venue-interior.jpg"
                    alt="XO Lounge Toronto Interior with custom geometric canopy lighting and marble bar"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d13] via-transparent to-black/30" />
                </div>

                <div className="pt-5 pb-2 px-2 space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.2em] text-[#9ea2ac] uppercase border-b border-white/10 pb-2">
                    <span className="text-[#d4af37]">PLATE 01 • MAIN ROOM</span>
                    <span>43.6558° N, 79.3621° W</span>
                  </div>

                  <h3 className="font-editorial text-xl sm:text-2xl font-normal text-white tracking-wide">
                    Geometric Illumination & Acoustic Tuning
                  </h3>

                  <p className="text-xs text-[#9ea2ac] leading-relaxed">
                    Designed for milestone celebrations, weekend bottle service, and private
                    gatherings. Featuring bespoke sound calibration tuned for deep basslines and
                    intimate booth sightlines.
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#6b707d]">VIP Inquiries:</span>
                    <a
                      href="tel:+14374730042"
                      className="min-h-[44px] inline-flex items-center py-2 text-[#f3e5ab] hover:text-white transition-colors underline decoration-[#d4af37]/40 underline-offset-4"
                    >
                      +1 (437) 473-0042
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Cultural Narrative & Ethos (Magazine Spread) */}
      <section className="py-24 sm:py-32 bg-[#08090e] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Spatial Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-sculpted text-xs tracking-[0.25em] text-[#d4af37] uppercase block font-semibold">
                THE XO ETHOS
              </span>

              <h2 className="font-editorial text-4xl sm:text-6xl font-normal text-white tracking-tight leading-[1.05]">
                Where Toronto Meets East Africa After Dark.
              </h2>

              <p className="text-sm sm:text-base text-[#9ea2ac] leading-relaxed">
                XO Lounge redefines Queen Street East with a sanctuary of sound, diaspora
                hospitality, and modern luxury. Here, Toronto’s vibrant creative community gathers
                around an expansive marble cocktail island, plush velvet banquettes, and deep
                Amapiano and Afrobeats rhythms.
              </p>

              <div className="pt-2">
                <Link
                  href="/info"
                  className="inline-flex items-center gap-2 text-xs font-sculpted text-[#d4af37] hover:text-white uppercase tracking-[0.2em] transition-colors"
                >
                  <span>Location, Hours & Etiquette</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Architectural Materiality Dossier */}
            <div className="lg:col-span-7">
              <div className="border border-white/10 bg-[#0b0d13] p-8 sm:p-12 space-y-8 relative">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono text-[#6b707d] uppercase tracking-widest">
                  <span>CORKTOWN DESIGN DOSSIER</span>
                  <span>EST. 2025</span>
                </div>

                <div className="space-y-4">
                  <p className="font-editorial text-2xl sm:text-3xl text-[#f3e5ab] leading-snug">
                    "An intimate crossroads of low-end log drums, smoked spirits, and Habesha
                    hospitality."
                  </p>
                  <p className="text-xs sm:text-sm text-[#9ea2ac] leading-relaxed">
                    Every element was designed for sensory immersion: from acoustic sound dampening
                    that keeps conversations crisp at the booth, to Ethiopian wild honey (*mar*) and
                    *korerima* cardamom reductions infused into our top-shelf cocktail repertoire.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase block font-semibold">
                      SOUND ARCHITECTURE
                    </span>
                    <span className="font-sculpted text-sm font-bold text-white block uppercase tracking-wider">
                      Amapiano, Afrobeats & R&B
                    </span>
                    <span className="text-xs text-[#6b707d] leading-relaxed block">
                      Custom low-end acoustic staging for resident weekend selectors.
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase block font-semibold">
                      BOTANICAL REPERTOIRE
                    </span>
                    <span className="font-sculpted text-sm font-bold text-white block uppercase tracking-wider">
                      Diaspora Craft Cocktails
                    </span>
                    <span className="text-xs text-[#6b707d] leading-relaxed block">
                      Tej infusions, smoked bourbon, and late-night savory tapas.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Three Hospitality Chapters (Editorial Layout, No Generic Cards) */}
      <section className="py-24 sm:py-32 bg-[#040507] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="font-sculpted text-xs tracking-[0.25em] text-[#d4af37] uppercase block font-semibold">
              THE EXPERIENCE
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl font-normal text-white tracking-tight">
              Hospitality, Sound & Libations
            </h2>
            <p className="text-sm sm:text-base text-[#9ea2ac]">
              Curated dimensions of the XO experience. Explore our room architecture, weekend
              lineups, or craft repertoire.
            </p>
          </div>

          {/* 3 Editorial Chapters */}
          <div className="divide-y divide-white/10 border-y border-white/10">
            {/* Chapter I: VIP Tables */}
            <div className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
              <div className="lg:col-span-3">
                <span className="font-sculpted text-xs tracking-[0.25em] text-[#d4af37] uppercase block mb-1 font-semibold">
                  CHAPTER I
                </span>
                <h3 className="font-editorial text-3xl sm:text-4xl font-normal text-white group-hover:text-[#f3e5ab] transition-colors">
                  VIP Tables & Seating
                </h3>
              </div>

              <div className="lg:col-span-6 text-sm text-[#9ea2ac] leading-relaxed space-y-2">
                <p>
                  Interactive architectural floorplan, dedicated concierge hosts, sparkler bottle
                  parades, and transparent spend parameters ($400–$1,400 CAD). Stage VIP booths,
                  intimate salon banquettes, and elevated corner seating.
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-[#6b707d]">
                  <span>4 TO 15 GUESTS</span>
                  <span>•</span>
                  <span>LINE-BYPASS ADMISSION</span>
                  <span>•</span>
                  <span>UNLIMITED MIXERS</span>
                </div>
              </div>

              <div className="lg:col-span-3 flex justify-start lg:justify-end">
                <Link
                  href="/tables"
                  className="inline-flex items-center gap-2 text-xs font-sculpted font-semibold uppercase tracking-[0.18em] text-[#d4af37] hover:text-white transition-colors border-b border-[#d4af37]/30 hover:border-white pb-1 min-h-[44px]"
                >
                  <span>Explore Tables & Floorplan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Chapter II: Sound Residencies */}
            <div className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
              <div className="lg:col-span-3">
                <span className="font-sculpted text-xs tracking-[0.25em] text-[#d4af37] uppercase block mb-1 font-semibold">
                  CHAPTER II
                </span>
                <h3 className="font-editorial text-3xl sm:text-4xl font-normal text-white group-hover:text-[#f3e5ab] transition-colors">
                  Weekend Residencies
                </h3>
              </div>

              <div className="lg:col-span-6 text-sm text-[#9ea2ac] leading-relaxed space-y-2">
                <p>
                  Toronto’s premier selectors spinning Afrobeats, Amapiano, R&B, and global club
                  anthems every Friday and Saturday until 3:00 AM. Complimentary guestlist passes
                  available before 11:00 PM.
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-[#6b707d]">
                  <span>FRIDAY & SATURDAY</span>
                  <span>•</span>
                  <span>GUESTLIST PASSES</span>
                  <span>•</span>
                  <span>LIVE MC & SELECTORS</span>
                </div>
              </div>

              <div className="lg:col-span-3 flex justify-start lg:justify-end">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 text-xs font-sculpted font-semibold uppercase tracking-[0.18em] text-[#d4af37] hover:text-white transition-colors border-b border-[#d4af37]/30 hover:border-white pb-1 min-h-[44px]"
                >
                  <span>View DJ Program & Guestlist</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Chapter III: Repertoire & Dining */}
            <div className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
              <div className="lg:col-span-3">
                <span className="font-sculpted text-xs tracking-[0.25em] text-[#d4af37] uppercase block mb-1 font-semibold">
                  CHAPTER III
                </span>
                <h3 className="font-editorial text-3xl sm:text-4xl font-normal text-white group-hover:text-[#f3e5ab] transition-colors">
                  Cocktails & Diaspora Tapas
                </h3>
              </div>

              <div className="lg:col-span-6 text-sm text-[#9ea2ac] leading-relaxed space-y-2">
                <p>
                  From smoked bourbon reductions and Ethiopian honey infusions to crispy prime beef
                  sambusas and slow-roasted korerima lamb riblets. Top-shelf agave, cognac, and
                  vintage champagne.
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-[#6b707d]">
                  <span>CRAFT MIXOLOGY</span>
                  <span>•</span>
                  <span>TOP-SHELF SPIRITS</span>
                  <span>•</span>
                  <span>LATE-NIGHT KITCHEN</span>
                </div>
              </div>

              <div className="lg:col-span-3 flex justify-start lg:justify-end">
                <Link
                  href="/menus"
                  className="inline-flex items-center gap-2 text-xs font-sculpted font-semibold uppercase tracking-[0.18em] text-[#d4af37] hover:text-white transition-colors border-b border-[#d4af37]/30 hover:border-white pb-1 min-h-[44px]"
                >
                  <span>Explore Printed Repertoire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Private Buyouts & Celebrations Invitation Strip */}
      <section className="py-20 bg-[#08090e] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-white/10 bg-[#0b0d13] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <span className="font-sculpted text-xs tracking-[0.25em] text-[#d4af37] uppercase block font-semibold">
                SPECIAL CELEBRATIONS
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl font-normal text-white">
                Milestone Birthdays & Exclusive Venue Buyouts
              </h3>
              <p className="text-xs sm:text-sm text-[#9ea2ac] max-w-2xl leading-relaxed">
                We host private corporate receptions, milestone celebrations, and private parties
                with custom mixology, passed diaspora tapas, and full screen takeover for up to 150
                guests.
              </p>
            </div>

            <Link
              href="/private-events"
              className="px-8 py-4 min-h-[48px] rounded-sm bg-[#d4af37] hover:bg-[#e6c34e] text-[#040507] font-sculpted text-xs uppercase tracking-[0.18em] font-bold whitespace-nowrap transition-all shadow-md flex items-center gap-2"
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
