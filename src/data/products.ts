import type { Product, ProductImage } from "@/types/product";

const womenSizes = ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "11"];

const sharedShipping = [
  "Complimentary shipping on all U.S. orders.",
  "Orders typically leave our studio within two business days.",
  "Free returns within 30 days of delivery on unworn pairs.",
  "Exchanges are available while stock lasts.",
];

const sharedCareLeather = [
  "Wipe with a soft, dry cloth after wear.",
  "Condition leather occasionally with a cream suited to calf leather.",
  "Allow to air dry away from direct heat.",
  "Store with cedar shoe trees when possible.",
];

const sharedCareHybrid = [
  "Wipe uppers with a soft, damp cloth after the round.",
  "Brush mesh panels gently; avoid soaking.",
  "Allow to air dry away from direct heat.",
  "Knock loose grass from the cleats before storing.",
];

/** Off-course, alternative mood — not country-club golf stock. */
const alternativeLifestyle: ProductImage[] = [
  {
    id: "life-desert",
    src: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1600&q=80",
    alt: "Sun-bleached desert hills under a hard California sky",
  },
  {
    id: "life-editorial",
    src: "https://images.unsplash.com/photo-1524504388940-b1c17226555e?w=1600&q=80",
    alt: "Editorial portrait with an unforced, contemporary attitude",
  },
  {
    id: "life-palms",
    src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1600&q=80",
    alt: "Motel palms and late light somewhere off the highway",
  },
  {
    id: "life-fashion",
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=80",
    alt: "Street-cast fashion moment with filmic color",
  },
  {
    id: "life-pool",
    src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1600&q=80",
    alt: "Night pool glow — more afterparty than nineteenth hole",
  },
  {
    id: "life-coast",
    src: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=1600&q=80",
    alt: "Moody coastal mist over rocky shoreline",
  },
];

function lifestylePair(a: number, b: number): ProductImage[] {
  return [alternativeLifestyle[a], alternativeLifestyle[b]];
}

function localPackshots(slug: string, name: string, count = 3): ProductImage[] {
  const angles = [
    "studio packshot, three-quarter view",
    "studio packshot, alternate angle",
    "studio packshot, close crop",
  ];
  return Array.from({ length: count }, (_, index) => ({
    id: `${slug}-${index + 1}`,
    src: `/products/${slug}-${index + 1}.png`,
    alt: `${name} women's golf shoe — ${angles[index]}`,
  }));
}

export const products: Product[] = [
  {
    id: "prod_montecito",
    slug: "montecito",
    name: "The Montecito",
    shortDescription:
      "A Mary Jane golf shoe with a cushioned sole and pink cleats — feminine line, serious grip.",
    description:
      "The Montecito reworks the women's golf shoe as a strap silhouette: pebbled overlays, a soft mesh vamp, and a sculpted midsole with discreet cushioning. Blush lining and pink traction lugs keep it from looking like anything from a pro shop.",
    price: 295,
    colors: [
      { id: "black", name: "Soft Black", hex: "#1A1A1A" },
      { id: "blush", name: "Blush Cleat", hex: "#E8B4BC" },
    ],
    sizes: womenSizes,
    images: localPackshots("montecito", "The Montecito"),
    lifestyleImages: lifestylePair(2, 1),
    benefits: [
      "Mary Jane strap with secure closure",
      "Sculpted midsole with visible cushioning",
      "Pink traction lugs for the course",
      "Looks intentional off the grass",
    ],
    materials: [
      "Pebbled leather overlays",
      "Fine mesh vamp",
      "Cushioned midsole unit",
      "Rubber outsole with pink cleat lugs",
      "Soft textile lining",
    ],
    care: sharedCareHybrid,
    shippingReturns: sharedShipping,
    editorialNote:
      "Built like equipment. Styled like something you'd actually wear.",
    inStock: true,
    availableSizes: womenSizes,
    availableColors: ["black", "blush"],
    category: "Women's Golf Shoe",
    featured: true,
  },
  {
    id: "prod_rincon",
    slug: "rincon",
    name: "The Rincon",
    shortDescription:
      "The strap golf shoe in a warmer cast — same hybrid line, softer attitude.",
    description:
      "The Rincon shares The Montecito's Mary Jane architecture with a warmer finish. Still a women's golf shoe with real traction — just less interested in looking serious about it.",
    price: 285,
    colors: [
      { id: "sand", name: "Dune Sand", hex: "#C4B49A" },
      { id: "stone", name: "Sea Stone", hex: "#8B8F88" },
    ],
    sizes: womenSizes,
    images: localPackshots("rincon", "The Rincon"),
    lifestyleImages: lifestylePair(0, 3),
    benefits: [
      "Strap closure, no lace theater",
      "Hybrid sole for walking rounds",
      "Warmer tonal finish",
      "Made for golfers who dress sideways",
    ],
    materials: [
      "Textured leather overlays",
      "Mesh and textile upper panels",
      "Cushioned midsole",
      "Cleated rubber outsole",
    ],
    care: sharedCareHybrid,
    shippingReturns: sharedShipping,
    editorialNote: "Same bones as The Montecito. Different mood.",
    inStock: true,
    availableSizes: ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"],
    availableColors: ["sand", "stone"],
    category: "Women's Golf Shoe",
  },
  {
    id: "prod_hope-ranch",
    slug: "hope-ranch",
    name: "The Hope Ranch",
    shortDescription:
      "A darker, quieter take on the strap golf shoe — for nights that start on the course.",
    description:
      "The Hope Ranch keeps the Mary Jane golf last in a deeper black. Same cushioned sole and cleat geometry — tuned for women who want less contrast and more shadow.",
    price: 315,
    colors: [
      { id: "ink", name: "Ink Black", hex: "#0E0E0E" },
      { id: "graphite", name: "Graphite", hex: "#3A3A3A" },
    ],
    sizes: womenSizes,
    images: localPackshots("hope-ranch", "The Hope Ranch"),
    lifestyleImages: lifestylePair(4, 5),
    benefits: [
      "Low-glare black finish",
      "Strap fit with midsole cushioning",
      "Course traction without sportswear costume",
      "Holds up after dark",
    ],
    materials: [
      "Matte leather overlays",
      "Mesh vamp",
      "Cushioned midsole",
      "Cleated rubber outsole",
    ],
    care: sharedCareHybrid,
    shippingReturns: sharedShipping,
    editorialNote: "Black on black — with just enough pink left in the cleats.",
    inStock: true,
    availableSizes: womenSizes,
    availableColors: ["ink", "graphite"],
    category: "Women's Golf Shoe",
  },
  {
    id: "prod_summerland",
    slug: "summerland",
    name: "The Summerland",
    shortDescription:
      "A lifted, sun-washed version of the Cypress strap golf shoe.",
    description:
      "The Summerland lightens the hybrid silhouette for heat. Same Mary Jane line and cleated sole — a little more air, a little less night.",
    price: 245,
    colors: [
      { id: "haze", name: "Coast Haze", hex: "#D8D2C4" },
      { id: "olive", name: "Faded Olive", hex: "#6F7664" },
    ],
    sizes: womenSizes,
    images: localPackshots("summerland", "The Summerland"),
    lifestyleImages: lifestylePair(2, 0),
    benefits: [
      "Lighter tonal finish for warm days",
      "Strap closure and cushioned sole",
      "Cleats that don't look like equipment catalogs",
      "Easy to pack",
    ],
    materials: [
      "Leather and textile upper",
      "Cushioned midsole",
      "Cleated rubber outsole",
    ],
    care: sharedCareHybrid,
    shippingReturns: sharedShipping,
    editorialNote: "For heat. Still not a costume.",
    inStock: true,
    availableSizes: ["5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"],
    availableColors: ["haze", "olive"],
    category: "Women's Golf Shoe",
  },
  {
    id: "prod_miramar",
    slug: "miramar",
    name: "The Miramar",
    shortDescription:
      "Cognac-leaning strap golf shoe — same hybrid last, warmer blood.",
    description:
      "The Miramar takes the Cypress Mary Jane golf shoe into cognac territory. Cushioned sole, pink-kissed cleats, and a strap that means you can leave the laces in another decade.",
    price: 275,
    colors: [
      { id: "cognac", name: "Cognac", hex: "#8B5A3C" },
      { id: "bone", name: "Bone", hex: "#E8E2D6" },
    ],
    sizes: womenSizes,
    images: localPackshots("miramar", "The Miramar"),
    lifestyleImages: lifestylePair(1, 4),
    benefits: [
      "Warm leather-forward finish",
      "Mary Jane strap fit",
      "Course-ready cleated sole",
      "Built for a fast exit into town",
    ],
    materials: [
      "Leather overlays",
      "Mesh vamp",
      "Cushioned midsole",
      "Cleated rubber outsole",
    ],
    care: sharedCareLeather,
    shippingReturns: sharedShipping,
    editorialNote: "Warmth without the country-club brown.",
    inStock: true,
    availableSizes: ["5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "11"],
    availableColors: ["cognac", "bone"],
    category: "Women's Golf Shoe",
  },
  {
    id: "prod_carpinteria",
    slug: "carpinteria",
    name: "The Carpinteria",
    shortDescription:
      "Oxblood cast of the strap golf shoe — limited, currently sold through.",
    description:
      "The Carpinteria was a short oxblood run of the Cypress hybrid Mary Jane. Same architecture, deeper color. Between editions for now.",
    price: 325,
    colors: [
      { id: "oxblood", name: "Oxblood", hex: "#5C2430" },
      { id: "forest", name: "Deep Forest", hex: "#2F3D32" },
    ],
    sizes: womenSizes,
    images: localPackshots("carpinteria", "The Carpinteria"),
    lifestyleImages: lifestylePair(3, 5),
    benefits: [
      "Limited oxblood finish",
      "Hybrid Mary Jane golf last",
      "Cushioned sole with cleat traction",
      "Short edition",
    ],
    materials: [
      "Leather overlays",
      "Mesh vamp",
      "Cushioned midsole",
      "Cleated rubber outsole",
    ],
    care: sharedCareLeather,
    shippingReturns: sharedShipping,
    editorialNote: "A short edition. Worth waiting for if this one has gone.",
    inStock: false,
    availableSizes: [],
    availableColors: [],
    category: "Women's Golf Shoe",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProduct(): Product {
  return products.find((product) => product.featured) ?? products[0];
}

export function getFeaturedProducts(limit = 3): Product[] {
  const featured = products.filter((product) => product.featured);
  const rest = products.filter((product) => !product.featured && product.inStock);
  return [...featured, ...rest].slice(0, limit);
}

export function getRelatedProducts(slug: string, limit = 3): Product[] {
  return products.filter((product) => product.slug !== slug).slice(0, limit);
}

export const brandQualities = [
  {
    title: "Quiet traction",
    description:
      "A sole designed to hold the ground without announcing itself.",
  },
  {
    title: "Leather that softens",
    description:
      "Full-grain calf chosen for how it feels after the first few rounds.",
  },
  {
    title: "A lasting silhouette",
    description:
      "Cut to look considered beside linen, denim, or a soft knit.",
  },
];
