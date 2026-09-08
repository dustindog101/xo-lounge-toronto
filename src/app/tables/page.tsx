"use client";

import { useState } from "react";
import BottleServiceCalculator from "@/components/booking/BottleServiceCalculator";
import VenueFloorplan from "@/components/floorplan/VenueFloorplan";
import { useLanguage } from "@/context/LanguageContext";

export default function TablesPage() {
  const { language } = useLanguage();
  const [targetBooth, setTargetBooth] = useState<{
    name: string;
    minSpend: number;
    guests: number;
  }>({
    name: "DJ Stage VIP Booth A",
    minSpend: 750,
    guests: 10,
  });

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

  return (
    <main className="pt-24 pb-20 bg-[#08090b] min-h-screen">
      {/* 1. Interactive Architectural Floorplan & Booth Selector */}
      <VenueFloorplan onSelectBooth={handleSelectBoothFromFloorplan} language={language} />

      {/* 2. VIP Table Packages & Concierge Booking */}
      <BottleServiceCalculator
        initialBooth={targetBooth.name}
        initialMinSpend={targetBooth.minSpend}
        initialGuests={targetBooth.guests}
        language={language}
      />
    </main>
  );
}
