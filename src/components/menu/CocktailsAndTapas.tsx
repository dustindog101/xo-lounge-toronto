"use client";

import { useState } from "react";

interface MenuProps {
  language: "en" | "am";
}

interface MenuItem {
  name: string;
  price: string;
  description: string;
  provenance?: string;
  category: "cocktails" | "bottles" | "tapas";
}

const MENU_DATA: MenuItem[] = [
  // Craft Cocktails
  {
    category: "cocktails",
    name: "Amharic Gold",
    price: "$24 CAD",
    description:
      "Hennessy VSOP, Ethiopian wild honey & korerima cardamom reduction, fresh lemon juice, finished with edible 24k gold leaf.",
    provenance: "Ethiopian Forest Honey & Korerima",
  },
  {
    category: "cocktails",
    name: "Queen East Smoked Old Fashioned",
    price: "$22 CAD",
    description:
      "Woodford Reserve Bourbon, Angostura & Seville orange bitters, demerara reduction, presented tableside under toasted applewood smoke.",
    provenance: "Toasted Applewood Smoke",
  },
  {
    category: "cocktails",
    name: "Hibiscus Mezcalita",
    price: "$21 CAD",
    description:
      "Artisanal Oaxacan Mezcal, wild hibiscus calyx infusion, cold-pressed Persian lime, smoked berbere sea salt rim.",
    provenance: "Berbere Smoked Sea Salt",
  },
  {
    category: "cocktails",
    name: "Black Diamond Espresso Martini",
    price: "$22 CAD",
    description:
      "Grey Goose Vodka, freshly pulled double espresso, coffee liqueur, Madagascar bourbon vanilla bean reduction.",
    provenance: "Freshly Pulled Espresso",
  },
  {
    category: "cocktails",
    name: "XO Passionfruit Spritz",
    price: "$20 CAD",
    description:
      "Flor de Caña aged rum, tart passionfruit coulis, hand-muddled organic mint, sparkling prosecco float.",
    provenance: "Prosecco Float & Mint",
  },
  {
    category: "cocktails",
    name: "Violet Botanical Collins",
    price: "$20 CAD",
    description:
      "Empress 1908 Indigo Gin, Japanese yuzu, St. Germain elderflower cordial, clarified lemon, effervescent club soda.",
    provenance: "Yuzu & Elderflower",
  },

  // Bottle Reserves
  {
    category: "bottles",
    name: "Don Julio 1942 Añejo Tequila",
    price: "$1,100 CAD",
    description:
      "Artisanal small-batch tequila aged in American white oak for rich caramel, vanilla, and roasted agave notes. VIP presentation included.",
    provenance: "Jalisco, Mexico • Dedicated Presentation",
  },
  {
    category: "bottles",
    name: "Clase Azul Reposado Tequila",
    price: "$950 CAD",
    description:
      "Presented in the iconic cobalt blue-and-white handcrafted ceramic decanter. Silky, smooth agave with hazelnut undertones.",
    provenance: "Handcrafted Ceramic Decanter",
  },
  {
    category: "bottles",
    name: "Dom Pérignon Brut Vintage Champagne",
    price: "$950 CAD",
    description:
      "The gold standard of French prestige champagne. Intense sensory depth, smoky minerality, and fine bead effervescence.",
    provenance: "Épernay, France • Chilled Flutes",
  },
  {
    category: "bottles",
    name: "Hennessy XO Cognac",
    price: "$850 CAD",
    description:
      "Complex blend of over one hundred eaux-de-vie offering rich nuances of candied fruit, sweet cinnamon, and toasted cocoa.",
    provenance: "Cognac, France • Tableside Service",
  },
  {
    category: "bottles",
    name: "Moët & Chandon Nectar Impérial Rosé",
    price: "$450 CAD",
    description:
      "Sensory palate of wild strawberry, raspberry and peach. The signature celebration bottle with dedicated sparkler parade.",
    provenance: "Sparkler Presentation Parade",
  },
  {
    category: "bottles",
    name: "Casamigos Reposado / Blanco",
    price: "$400 CAD",
    description:
      "Small-batch 100% Blue Weber agave tequila. Accompanied by house garnishes, freshly pressed juices, and premium mixers.",
    provenance: "Unlimited Premium Mixers Included",
  },

  // Diaspora Tapas
  {
    category: "tapas",
    name: "Crispy Prime Beef Sambusas (3 Pcs)",
    price: "$16 CAD",
    description:
      "Hand-rolled golden pastry stuffed with prime minced beef, fresh green chili, garlic, and wild coriander. Served with spiced awaze dip.",
    provenance: "Awaze Chili Dip",
  },
  {
    category: "tapas",
    name: "Korerima Glazed Lamb Riblets",
    price: "$24 CAD",
    description:
      "Slow-roasted crisp lamb ribs glazed in Ethiopian black cardamom honey, fresh mint chimichurri, and pomegranate arils.",
    provenance: "Black Cardamom Honey Glaze",
  },
  {
    category: "tapas",
    name: "Honey-Garlic Beef Suqaar Sliders (3 Pcs)",
    price: "$22 CAD",
    description:
      "Tender sirloin suqaar, caramelized sweet shallots, melted smoked gouda, house aioli on toasted buttery brioche.",
    provenance: "Toasted Brioche & Gouda",
  },
  {
    category: "tapas",
    name: "Suya Spiced Jumbo Wings (8 Pcs)",
    price: "$20 CAD",
    description:
      "Crispy wings coated in authentic roasted peanut, ginger, and chili suya spice with cooling yogurt drizzle.",
    provenance: "West African Suya Dry Rub",
  },
  {
    category: "tapas",
    name: "Truffle & 24-Month Parmesan Fries",
    price: "$15 CAD",
    description:
      "Hand-cut crisp russet potatoes tossed in black truffle oil, freshly grated 24-month Parmigiano-Reggiano, and garlic aioli.",
    provenance: "Black Truffle Oil",
  },
  {
    category: "tapas",
    name: "XO Reserve Charcuterie Board",
    price: "$38 CAD",
    description:
      "Curated artisan cured bresaola, aged cheeses, spiced marcona almonds, mission figs, cornichons, and warm grilled flatbread.",
    provenance: "Table Sharing • VIP Accompaniment",
  },
];

export default function CocktailsAndTapas({ language }: MenuProps) {
  const [activeTab, setActiveTab] = useState<"all" | "cocktails" | "bottles" | "tapas">("all");

  const filteredItems =
    activeTab === "all" ? MENU_DATA : MENU_DATA.filter((item) => item.category === activeTab);

  return (
    <section id="menus" className="py-24 bg-[#040507] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="font-sculpted text-xs tracking-[0.25em] text-[#d4af37] uppercase block font-semibold">
            CULINARY & LIBATION REPERTOIRE
          </span>

          <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white tracking-tight">
            {language === "en" ? "Curated Spirits, Cocktails & Tapas" : "የመጠጥ እና የምግብ ሜኑ"}
          </h2>

          <p className="text-sm sm:text-base text-[#9ea2ac] leading-relaxed">
            {language === "en"
              ? "From tableside smoked bourbon and Ethiopian honey infusions to prestige champagne parades and late-night diaspora small plates, every offering is crafted for elevated hospitality."
              : "ልዩ ኮክቴሎች፣ ጥራት ያላቸው መጠጦች እና የሌሊት ጣፋጭ ምግቦች።"}
          </p>

          {/* Clean Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-4 border-b border-white/10 pb-4">
            {[
              { id: "all", label: "Full Repertoire" },
              { id: "cocktails", label: "Craft Cocktails" },
              { id: "bottles", label: "Bottle Reserves" },
              { id: "tapas", label: "Diaspora Tapas" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`min-h-[44px] px-5 py-2 text-xs font-sculpted tracking-[0.15em] uppercase transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? "text-[#040507] bg-[#d4af37] font-bold shadow-md shadow-[#d4af37]/20"
                    : "text-[#9ea2ac] hover:text-white bg-[#0b0d13] border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Printed Broadsheet 2-Column Menu Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
          {filteredItems.map((item) => (
            <div
              key={item.name}
              className="border-b border-white/10 pb-6 flex flex-col justify-between space-y-2 group"
            >
              <div className="flex items-baseline justify-between w-full">
                <h3 className="font-editorial text-xl font-normal text-white tracking-wide group-hover:text-[#f3e5ab] transition-colors">
                  {item.name}
                </h3>
                <div className="menu-dots" />
                <span className="font-mono text-sm font-semibold text-[#d4af37] whitespace-nowrap ml-2">
                  {item.price}
                </span>
              </div>

              <p className="font-serif italic text-xs sm:text-sm text-[#9ea2ac] leading-relaxed">
                {item.description}
              </p>

              {item.provenance && (
                <div className="pt-1">
                  <span className="font-mono text-[10px] tracking-wider text-[#6b707d] uppercase">
                    {item.provenance}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Botanical Provenance Dossier Box */}
        <div className="mt-20 border border-white/10 bg-[#0b0d13] p-8 sm:p-10 space-y-4">
          <span className="font-sculpted text-xs tracking-[0.25em] text-[#d4af37] uppercase block font-semibold">
            DIASPORA BOTANICAL LEGEND
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 text-xs text-[#a1a1aa] leading-relaxed">
            <div>
              <strong className="text-white block mb-1 font-serif text-sm">Korerima (ኮረሪማ)</strong>
              <span>
                Wild black cardamom harvested in the mountain forests of southwestern Ethiopia,
                lending sweet, menthol-citrus botanical complexity to syrups and savory glazes.
              </span>
            </div>
            <div>
              <strong className="text-white block mb-1 font-serif text-sm">Tej Honey (ማር)</strong>
              <span>
                Traditional Ethiopian wild blossom honey wine base, gently simmered into a velvet
                reduction to balance aged cognacs and mezcals.
              </span>
            </div>
            <div>
              <strong className="text-white block mb-1 font-serif text-sm">Awaze (አዋዜ)</strong>
              <span>
                Slow-fermented blend of sun-dried Ethiopian berbere chili, garlic, ginger, and tej,
                providing deep warmth to our hand-rolled sambusas.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
