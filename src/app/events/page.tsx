"use client";

import { useState } from "react";
import EventCalendar from "@/components/events/EventCalendar";
import GuestlistModal from "@/components/events/GuestlistModal";
import { useLanguage } from "@/context/LanguageContext";

export default function EventsPage() {
  const { language } = useLanguage();
  const [guestlistOpen, setGuestlistOpen] = useState(false);
  const [guestlistEvent, setGuestlistEvent] = useState("Weekend Night");

  const handleOpenGuestlist = (eventTitle?: string) => {
    if (eventTitle) {
      setGuestlistEvent(eventTitle);
    } else {
      setGuestlistEvent("Weekend Night");
    }
    setGuestlistOpen(true);
  };

  return (
    <main className="pt-24 pb-20 bg-[#08090b] min-h-screen">
      <EventCalendar onOpenGuestlist={handleOpenGuestlist} language={language} />

      <GuestlistModal
        isOpen={guestlistOpen}
        onClose={() => setGuestlistOpen(false)}
        eventTitle={guestlistEvent}
        language={language}
      />
    </main>
  );
}
