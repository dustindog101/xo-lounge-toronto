"use client";

import { GlassWater, Utensils, Wine } from "lucide-react";
import { useState } from "react";

interface MenuProps {
  language: "en" | "am";
}

interface MenuItem {
  name: string;
  price: string;
  description: string;
  tags?: string[];
  notes?: string;
}

export default function CocktailsAndTapas({ language }: MenuProps) {
  const [activeTab, setActiveTab] = useState<"cocktails" | "bottles" | "tapas">("cocktails");

  const cocktails: MenuItem[] = [
    {
      name: "Queen East Smoked Old Fashioned",
      price: "$22 CAD",
      description:
        "Woodford Reserve Bourbon, Angostura & orange bitters, demerara, served in a cloche with real applewood smoke.",
      tags: ["Smoky", "Bold", "Signature"],
    },
    {
      name: "XO Passionfruit Mojito",
      price: "$20 CAD",
      description:
        "White rum, fresh passionfruit pulp, crushed mint leaves, Persian lime, topped with effervescent soda.",
      tags: ["Refreshing", "Tropical"],
    },
    {
      name: "Hibiscus Mezcalita",
      price: "$21 CAD",
      description:
        "Artisanal Oaxacan Mezcal, steeped wild hibiscus reduction, fresh lime juice, smoked black salt rim.",
      tags: ["Tart", "Earthy", "Spiced"],
    },
    {
      name: "Black Diamond Espresso Martini",
      price: "$22 CAD",
      description:
        "Grey Goose Vodka, Kahlúa, freshly pulled espresso, Madagascan vanilla bean syrup, chocolate dust.",
      tags: ["Velvety", "Caffeinated"],
    },
    {
      name: "Amharic Gold",
      price: "$24 CAD",
      description:
        "Hennessy VSOP, organic Ethiopian spiced honey reduction, fresh lemon, edible 24k gold leaf garnish.",
      tags: ["Diaspora Exclusive", "Luxury"],
    },
    {
      name: "Blue Neon Velvet",
      price: "$19 CAD",
      description:
        "Empress 1908 Indigo Gin, Japanese yuzu juice, elderflower liqueur, club soda with luminous violet hue.",
      tags: ["Citrus", "Floral"],
    },
  ];

  const bottles: MenuItem[] = [
    {
      name: "Don Julio 1942 Añejo Tequila",
      price: "$1,100 CAD",
      description:
        "Iconic luxury tequila handcrafted in tribute to the year Don Julio González began his tequila-making journey.",
      tags: ["Ultra Premium", "Sparkler Parade"],
    },
    {
      name: "Clase Azul Reposado",
      price: "$950 CAD",
      description:
        "Recognized worldwide for its handcrafted cobalt ceramic decanter. Smooth vanilla and hazelnut finish.",
      tags: ["Top Shelf", "Sparkler Parade"],
    },
    {
      name: "Dom Pérignon Vintage Champagne",
      price: "$950 CAD",
      description:
        "Prestigious champagne vintage characterized by intense sensory richness and vibrant effervescence.",
      tags: ["Chilled", "Celebration"],
    },
    {
      name: "Moët & Chandon Nectar Impérial Rosé",
      price: "$425 CAD",
      description:
        "A bright coral color and intense fruitiness. The most requested celebration champagne in Toronto nightlife.",
      tags: ["Bestseller", "Sparkler Presentation"],
    },
    {
      name: "Hennessy XO Cognac",
      price: "$850 CAD",
      description:
        "Deep, powerful, and robust with aromas of candied fruits, wild spices, and cocoa.",
      tags: ["Cognac", "VIP Classic"],
    },
    {
      name: "Casamigos Reposado / Blanco",
      price: "$400 CAD",
      description:
        "Ultra-smooth small batch blue agave tequila. Served with fresh lime wheels and house-made salted garnishes.",
      tags: ["Essential", "Mixers Included"],
    },
  ];

  const tapas: MenuItem[] = [
    {
      name: "Crispy Spiced Sambusas (3 Pcs)",
      price: "$16 CAD",
      description:
        "Golden flaky pastry envelopes stuffed with spiced minced beef, jalapeño, and herbs, served with homemade fiery Awaze honey dip.",
      tags: ["Diaspora Signature", "Must Try"],
    },
    {
      name: "Honey-Garlic Beef Suqaar Sliders (3 Pcs)",
      price: "$22 CAD",
      description:
        "Tender seasoned beef suqaar, caramelized sweet onions, smoked gouda cheese on toasted buttery brioche buns.",
      tags: ["Savory", "Late Night"],
    },
    {
      name: "Suya-Spiced Jumbo Wings (8 Pcs)",
      price: "$20 CAD",
      description:
        "Crispy jumbo chicken wings tossed in an authentic peanut and pepper West African suya rub with cool yogurt dip.",
      tags: ["Spicy", "Sharing"],
    },
    {
      name: "Black Truffle & Parmesan Fries",
      price: "$15 CAD",
      description:
        "Crispy shoestring potatoes tossed in white truffle oil, shaved aged parmesan, and cracked pepper with roasted garlic aioli.",
      tags: ["Vegetarian", "Crispy"],
    },
    {
      name: "XO Luxury Charcuterie & Fruit Board",
      price: "$38 CAD",
      description:
        "Artisan cured meats, aged cheeses, spiced nuts, grapes, dried figs, and warm flatbread for the table.",
      tags: ["Table Sharing", "VIP Accompaniment"],
    },
  ];

  return (
    <section id="menus" className="py-24 bg-[#0a0c12] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#f43f5e]/30 bg-[#151824] text-xs font-mono text-[#f43f5e]">
            <GlassWater className="w-3.5 h-3.5" />
            <span>BEVERAGE & CULINARY EXCELLENCE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {language === "en" ? "CURATED MENUS" : "የመጠጥ እና የምግብ ሜኑ"}
          </h2>

          <p className="text-sm sm:text-base text-[#9ca3af]">
            {language === "en"
              ? "From smoky craft mixology and top-shelf bottle reserves to late-night diaspora tapas, every offering is tailored for refined indulgence."
              : "ልዩ ኮክቴሎች፣ ጥራት ያላቸው መጠጦች እና የሌሊት ጣፋጭ ምግቦች።"}
          </p>

          {/* Navigation Category Tabs */}
          <div className="flex justify-center gap-2 pt-6">
            <button
              type="button"
              onClick={() => setActiveTab("cocktails")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "cocktails"
                  ? "bg-gradient-to-r from-[#a855f7] to-[#f43f5e] text-white shadow-lg shadow-[#a855f7]/30"
                  : "bg-[#151824] text-[#9ca3af] hover:text-white border border-white/10"
              }`}
            >
              <GlassWater className="w-4 h-4" />
              <span>Craft Cocktails</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("bottles")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "bottles"
                  ? "bg-gradient-to-r from-[#a855f7] to-[#f43f5e] text-white shadow-lg shadow-[#a855f7]/30"
                  : "bg-[#151824] text-[#9ca3af] hover:text-white border border-white/10"
              }`}
            >
              <Wine className="w-4 h-4" />
              <span>Bottle Reserves</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("tapas")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "tapas"
                  ? "bg-gradient-to-r from-[#a855f7] to-[#f43f5e] text-white shadow-lg shadow-[#a855f7]/30"
                  : "bg-[#151824] text-[#9ca3af] hover:text-white border border-white/10"
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>Diaspora Tapas & Bites</span>
            </button>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === "cocktails" ? cocktails : activeTab === "bottles" ? bottles : tapas).map(
            (item) => (
              <div
                key={item.name}
                className="bg-[#0f1118] border border-white/10 hover:border-[#a855f7]/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-black/50"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-lg font-bold text-white leading-snug">
                      {item.name}
                    </h3>
                    <span className="font-mono text-base font-bold text-gradient-gold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#9ca3af] leading-relaxed">{item.description}</p>
                </div>

                {item.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#151824] text-[#d8b4fe] border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
