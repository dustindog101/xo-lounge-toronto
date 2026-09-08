"use client";

import VenueGallery from "@/components/gallery/VenueGallery";
import VenueInfo from "@/components/info/VenueInfo";
import { useLanguage } from "@/context/LanguageContext";

export default function InfoPage() {
  const { language } = useLanguage();

  return (
    <main className="pt-24 pb-20 bg-[#08090b] min-h-screen space-y-12">
      {/* 1. Location, Directions, Hours & 19+ Dress Code Policy */}
      <VenueInfo language={language} />

      {/* 2. Visual Atmosphere Gallery & Social Archive */}
      <VenueGallery language={language} />
    </main>
  );
}
