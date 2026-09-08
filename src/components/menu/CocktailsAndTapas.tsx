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
}

export default function CocktailsAndTapas({ language }: MenuProps) {
  const [activeTab, setActiveTab] = useState<"cocktails" | "bottles" | "tapas">("cocktails");

  const cocktails: MenuItem[] = [
    {
      name: "Queen East Smoked Old Fashioned",
      price: "$22 CAD",
      description:
        "Woodford Reserve Bourbon, Angostura & orange bitters, demerara reduction, presented under applewood smoke.",
      tags: ["Smoky", "Bourbon", "House Signature"],
    },
    {
      name: "Amharic Gold",
      price: "$24 CAD",
      description:
        "Hennessy VSOP, Ethiopian wild honey & korerima reduction, fresh lemon juice, edible 24k gold leaf finish.",
      tags: ["Diaspora Exclusive", "Cognac", "Refined"],
    },
    {
      name: "Hibiscus Mezcalita",
      price: "$21 CAD",
      description:
        "Artisanal Oaxacan Mezcal, wild hibiscus calyx infusion, cold-pressed Persian lime, smoked sea salt rim.",
      tags: ["Tart", "Earthy", "Spiced"],
    },
    {
      name: "Black Diamond Espresso Martini",
      price: "$22 CAD",
      description:
        "Grey Goose Vodka, freshly pulled double espresso, coffee liqueur, Madagascar vanilla bean essence.",
      tags: ["Velvety", "Caffeinated", "Classic"],
    },
    {
      name: "XO Passionfruit Spritz",
      price: "$20 CAD",
      description:
        "Flor de Caña rum, passionfruit coulis, fresh muddled mint, citrus cordial, effervescent prosecco float.",
      tags: ["Effervescent", "Tropical", "Aromatic"],
    },
    {
      name: "Violet Botanical Collins",
      price: "$20 CAD",
      description:
        "Empress 1908 Indigo Gin, Japanese yuzu, St. Germain elderflower, clarified lemon, sparkling soda.",
      tags: ["Botanical", "Citrus", "Floral"],
    },
  ];

  const bottles: MenuItem[] = [
    {
      name: "Don Julio 1942 Añejo Tequila",
      price: "$1,100 CAD",
      description:
        "Celebrated small-batch artisanal tequila aged in American white oak barrels for exceptional rich caramel notes.",
      tags: ["Ultra Prestige", "Bottle Presentation"],
    },
    {
      name: "Clase Azul Reposado Tequila",
      price: "$950 CAD",
      description:
        "Distinguished by its handcrafted blue-and-white ceramic decanter. Silky, smooth agave profile.",
      tags: ["Top Shelf", "Bottle Presentation"],
    },
    {
      name: "Dom Pérignon Brut Vintage Champagne",
      price: "$950 CAD",
      description:
        "The quintessential expression of French prestige champagne. Intense sensory depth and fine bead effervescence.",
      tags: ["Vintage Champagne", "Chilled Flutes"],
    },
    {
      name: "Moët & Chandon Nectar Impérial Rosé",
      price: "$450 CAD",
      description:
        "A vibrant sensory palate of wild strawberry, raspberry and peach. The gold-standard celebration bottle.",
      tags: ["Celebration Rosé", "Sparkler Service"],
    },
    {
      name: "Hennessy XO Cognac",
      price: "$850 CAD",
      description:
        "Deep, complex blend of over one hundred eaux-de-vie offering nuances of candied fruit, cinnamon and cocoa.",
      tags: ["Prestige Cognac", "Table Service"],
    },
    {
      name: "Casamigos Reposado / Blanco",
      price: "$400 CAD",
      description:
        "Small-batch blue agave tequila crafted in Jalisco. Accompanied by house-made garnishes and premium mixers.",
      tags: ["House Essential", "Mixers Included"],
    },
  ];

  const tapas: MenuItem[] = [
    {
      name: "Crispy Beef Sambusas (3 Pcs)",
      price: "$16 CAD",
      description:
        "Hand-rolled golden pastry stuffed with prime minced beef, green pepper, garlic, and coriander. Served with spiced awaze dip.",
      tags: ["Diaspora Signature", "Warm Appetizer"],
    },
    {
      name: "Korerima Spiced Lamb Riblets",
      price: "$24 CAD",
      description:
        "Slow-roasted crisp lamb ribs glazed in Ethiopian black cardamom honey, fresh mint chimichurri, and pomegranate seeds.",
      tags: ["Chef Special", "Slow Roasted"],
    },
    {
      name: "Honey-Garlic Beef Suqaar Sliders (3 Pcs)",
      price: "$22 CAD",
      description:
        "Tender cubed sirloin suqaar, caramelized sweet shallots, melted smoked gouda on toasted buttery brioche.",
      tags: ["Late Night Savory", "Brioche"],
    },
    {
      name: "Suya Spiced Jumbo Wings (8 Pcs)",
      price: "$20 CAD",
      description:
        "Crispy free-range wings coated in authentic West African roasted peanut and chili suya spice with cooling yogurt dip.",
      tags: ["Spiced Suya", "Sharing"],
    },
    {
      name: "Truffle & Aged Parmesan Fries",
      price: "$15 CAD",
      description:
        "Hand-cut crisp russet potatoes tossed in black truffle oil, freshly grated 24-month Parmigiano-Reggiano, and garlic aioli.",
      tags: ["Vegetarian", "Crispy"],
    },
    {
      name: "XO Artisanal Charcuterie Board",
      price: "$38 CAD",
      description:
        "Curated selection of cured meats, aged cheeses, spiced marcona almonds, dried figs, cornichons, and grilled flatbread.",
      tags: ["Table Sharing", "VIP Accompaniment"],
    },
  ];

  return (
    <section
      id="menus"
      className="py-24 bg-[#08090b] border-t border-white/5 relative scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c5a880]/30 bg-[#12141c] text-xs font-mono text-[#e6d5b8]">
            <GlassWater className="w-3.5 h-3.5 text-[#c5a880]" />
            <span className="tracking-widest uppercase">BEVERAGE & CULINARY REPERTOIRE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {language === "en" ? "CURATED MENUS & REPERTOIRE" : "የመጠጥ እና የምግብ ሜኑ"}
          </h2>

          <p className="text-sm sm:text-base text-[#a1a1aa]">
            {language === "en"
              ? "From smoky craft mixology and top-shelf bottle reserves to late-night diaspora tapas, every offering is curated for refined hospitality."
              : "ልዩ ኮክቴሎች፣ ጥራት ያላቸው መጠጦች እና የሌሊት ጣፋጭ ምግቦች።"}
          </p>

          {/* Navigation Category Tabs (>= 44px) */}
          <div className="flex flex-wrap justify-center gap-2.5 pt-6">
            <button
              type="button"
              onClick={() => setActiveTab("cocktails")}
              className={`min-h-[44px] px-6 py-2.5 rounded-md text-xs uppercase tracking-[0.12em] font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === "cocktails"
                  ? "bg-[#c5a880] text-[#08090b] shadow-md"
                  : "bg-[#12141c] text-[#a1a1aa] hover:text-white border border-white/10"
              }`}
            >
              <GlassWater className="w-4 h-4" />
              <span>Craft Cocktails</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("bottles")}
              className={`min-h-[44px] px-6 py-2.5 rounded-md text-xs uppercase tracking-[0.12em] font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === "bottles"
                  ? "bg-[#c5a880] text-[#08090b] shadow-md"
                  : "bg-[#12141c] text-[#a1a1aa] hover:text-white border border-white/10"
              }`}
            >
              <Wine className="w-4 h-4" />
              <span>Bottle Reserves</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("tapas")}
              className={`min-h-[44px] px-6 py-2.5 rounded-md text-xs uppercase tracking-[0.12em] font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === "tapas"
                  ? "bg-[#c5a880] text-[#08090b] shadow-md"
                  : "bg-[#12141c] text-[#a1a1aa] hover:text-white border border-white/10"
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>Diaspora Tapas</span>
            </button>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === "cocktails" ? cocktails : activeTab === "bottles" ? bottles : tapas).map(
            (item) => (
              <div
                key={item.name}
                className="bg-[#0f1117] border border-white/10 hover:border-white/20 rounded-xl p-6 transition-all duration-200 flex flex-col justify-between space-y-4 shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3 border-b border-white/5 pb-2.5">
                    <h3 className="font-serif text-lg font-bold text-white leading-snug">
                      {item.name}
                    </h3>
                    <span className="font-mono text-sm font-semibold text-[#e6d5b8] whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#a1a1aa] leading-relaxed">{item.description}</p>
                </div>

                {item.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-sm bg-[#151821] text-[#c5a880] border border-[#c5a880]/20"
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
