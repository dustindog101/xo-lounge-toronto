"use client";

import CocktailsAndTapas from "@/components/menu/CocktailsAndTapas";
import { useLanguage } from "@/context/LanguageContext";

export default function MenusPage() {
  const { language } = useLanguage();

  return (
    <main className="pt-24 pb-20 bg-[#08090b] min-h-screen">
      <CocktailsAndTapas language={language} />
    </main>
  );
}
