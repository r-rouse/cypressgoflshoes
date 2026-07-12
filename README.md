# Cypress

A polished, responsive e-commerce frontend for **Cypress**, a women’s golf shoe brand rooted in Santa Barbara coastal elegance.

This project is frontend-only. Product data is mocked locally, and the cart persists in `localStorage` so a real commerce backend (Shopify, Stripe, Medusa, etc.) can be added later.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Lucide React icons
- Local mock product data + React cart state

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, brand statement, featured product, qualities, materials, newsletter |
| `/shop` | Product listing with color, size, and availability filters |
| `/product/[slug]` | Product detail with gallery, options, accordion, related area |
| `/our-story` | Brand story |
| `/journal` | Editorial placeholder |
| `/cart` | Full cart page |
| `/checkout` | Clearly marked checkout placeholder |

## Component architecture

Reusable UI lives in `src/components/`:

- `AnnouncementBar` — top utility bar
- `Header` / `MobileMenu` — navigation and search
- `Hero` — editorial homepage hero
- `ProductCard` — listing card
- `ProductGallery` — large gallery with thumbnails
- `ProductOptions` — color and size selectors
- `AddToCartButton` — cart mutation trigger
- `ProductDetail` — composed PDP experience
- `CartDrawer` / `CartPageContent` — cart surfaces
- `EditorialSection` — image + copy layout
- `NewsletterForm` — email capture UI
- `Footer` — site footer
- `Accordion` — product details disclosure
- `CypressMark` — wordmark + subtle tree mark
- `Providers` — cart provider wiring

Supporting layers:

- `src/types/` — product and cart types
- `src/data/products.ts` — mock catalog
- `src/context/CartContext.tsx` — cart state + `localStorage`
- `src/lib/format.ts` — price and cart id helpers

## Design system

Quiet brand-site language inspired by contemporary footwear houses like Village PM:

- Paper white surfaces, charcoal type
- Cypress / olive / leather used rarely
- **Libre Caslon Text** for chapter headlines and product names
- **Manrope** for interface text

Homepage is paced in chapters: full-bleed image, poetic line, product nested under mood, journal tease. Commerce stays available but visually secondary.

## Extending commerce later

The cart and product models are intentionally simple:

1. Replace `src/data/products.ts` with API-backed product fetching
2. Keep `CartContext` as a client cache, or swap it for a backend cart session
3. Point `/checkout` to Shopify Checkout, Stripe Checkout, or a Medusa storefront flow

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint
# cypressgoflshoes
