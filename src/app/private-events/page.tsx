"use client";

import { useRouter } from "next/navigation";
import CelebrationPackages from "@/components/parties/CelebrationPackages";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivateEventsPage() {
  const { language } = useLanguage();
  const router = useRouter();

  const handleOpenBooking = () => {
    router.push("/tables");
  };

  return (
    <main className="pt-24 pb-20 bg-[#08090b] min-h-screen">
      <CelebrationPackages onOpenBooking={handleOpenBooking} language={language} />
    </main>
  );
}
