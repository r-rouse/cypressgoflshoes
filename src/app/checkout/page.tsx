import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Checkout placeholder for the Cypress storefront.",
};

export default function CheckoutPage() {
  return (
    <div className="pad-x pad-y">
      <div className="max-w-md">
        <h1 className="font-serif text-4xl tracking-tight">Checkout</h1>
        <p className="mt-5 body-editorial">
          Placeholder for a future commerce backend — Shopify, Stripe, or
          Medusa.
        </p>
        <div className="mt-8 flex flex-wrap gap-6">
          <Link href="/cart" className="btn btn-primary">
            Return to cart
          </Link>
          <Link href="/shop" className="btn btn-primary">
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
