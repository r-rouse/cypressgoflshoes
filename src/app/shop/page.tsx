import type { Metadata } from "next";
import { ShopCatalog } from "@/components/ShopCatalog";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop Cypress women's golf shoes, made in Santa Barbara.",
};

export default function ShopPage() {
  return (
    <div className="pad-x pad-y">
      <ShopCatalog products={products} />
    </div>
  );
}
