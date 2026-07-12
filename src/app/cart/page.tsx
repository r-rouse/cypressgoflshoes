import type { Metadata } from "next";
import { CartPageContent } from "@/components/CartPageContent";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your Cypress selections before checkout.",
};

export default function CartPage() {
  return <CartPageContent />;
}
