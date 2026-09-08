"use client";

import { useState } from "react";
import BottleServiceCalculator from "@/components/booking/BottleServiceCalculator";
import EventCalendar from "@/components/events/EventCalendar";
import GuestlistModal from "@/components/events/GuestlistModal";
import VenueFloorplan from "@/components/floorplan/VenueFloorplan";
import VenueGallery from "@/components/gallery/VenueGallery";
import HeroSection from "@/components/hero/HeroSection";
import VenueInfo from "@/components/info/VenueInfo";
import CocktailsAndTapas from "@/components/menu/CocktailsAndTapas";
import Footer from "@/components/navigation/Footer";
import MobileDock from "@/components/navigation/MobileDock";
import Navbar from "@/components/navigation/Navbar";
import CelebrationPackages from "@/components/parties/CelebrationPackages";

export default function Home() {
  const [language, setLanguage] = useState<"en" | "am">("en");
  const [guestlistOpen, setGuestlistOpen] = useState(false);
  const [guestlistEvent, setGuestlistEvent] = useState("Weekend Night");
  const [targetBooth, setTargetBooth] = useState<{
    name: string;
    minSpend: number;
    guests: number;
  }>({
    name: "DJ Stage VIP Booth A",
    minSpend: 750,
    guests: 10,
  });

  const handleOpenBooking = (boothName?: string) => {
    if (boothName) {
      setTargetBooth((prev) => ({ ...prev, name: boothName }));
    }
    const element = document.getElementById("bottle-service");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectBoothFromFloorplan = (
    boothName: string,
    minSpend: number,
    maxGuests: number,
  ) => {
    setTargetBooth({
      name: boothName,
      minSpend: minSpend,
      guests: maxGuests,
    });
    const element = document.getElementById("bottle-service");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenGuestlist = (eventTitle?: string) => {
    if (eventTitle) {
      setGuestlistEvent(eventTitle);
    } else {
      setGuestlistEvent("Weekend Night");
    }
    setGuestlistOpen(true);
  };

  return (
    <main className="min-h-[100dvh] bg-[#08090b] text-[#f4f4f5] relative selection:bg-[#c5a880] selection:text-[#08090b]">
      {/* Top Sticky Header */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenGuestlist={() => handleOpenGuestlist()}
        language={language}
        setLanguage={setLanguage}
      />

      {/* 1. Immersive Hero Section */}
      <HeroSection onOpenBooking={() => handleOpenBooking()} language={language} />

      {/* 2. Interactive Venue Floorplan & Booth Selector */}
      <VenueFloorplan onSelectBooth={handleSelectBoothFromFloorplan} language={language} />

      {/* 3. VIP Bottle Service & Interactive Calculator */}
      <BottleServiceCalculator
        initialBooth={targetBooth.name}
        initialMinSpend={targetBooth.minSpend}
        initialGuests={targetBooth.guests}
        language={language}
      />

      {/* 4. Weekend DJ Lineup & Weekly Programming */}
      <EventCalendar onOpenGuestlist={handleOpenGuestlist} language={language} />

      {/* 5. Craft Cocktails & Diaspora Bites Menu */}
      <CocktailsAndTapas language={language} />

      {/* 6. Special Occasions (Birthdays, Holiday Parties, Private Buyouts) */}
      <CelebrationPackages onOpenBooking={() => handleOpenBooking()} language={language} />

      {/* 7. Atmosphere, Physical Interior Photo & Social Reels */}
      <VenueGallery language={language} />

      {/* 8. Location, Transit Directions, Operating Hours & Dress Code */}
      <VenueInfo language={language} />

      {/* Footer */}
      <Footer language={language} />

      {/* Sticky Mobile Quick-Action Dock (375px UX) */}
      <MobileDock
        onOpenBooking={() => handleOpenBooking()}
        onOpenGuestlist={() => handleOpenGuestlist()}
        language={language}
      />

      {/* Guestlist RSVP Modal */}
      <GuestlistModal
        isOpen={guestlistOpen}
        onClose={() => setGuestlistOpen(false)}
        eventTitle={guestlistEvent}
        language={language}
      />
    </main>
  );
}
