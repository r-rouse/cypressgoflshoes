"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";

export function CartPageContent() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="pad-x pad-y">
        <h1 className="font-serif text-4xl tracking-tight">Cart</h1>
        <p className="mt-4 text-sm text-mute">Your cart is empty.</p>
        <Link href="/shop" className="btn btn-primary mt-8 inline-flex">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pad-x pad-y">
      <h1 className="mb-12 font-serif text-4xl tracking-tight md:text-5xl">
        Cart
      </h1>

      <div className="grid gap-14 lg:grid-cols-12">
        <ul className="space-y-8 lg:col-span-8">
          {items.map((item) => (
            <li key={item.id} className="grid grid-cols-[5.5rem_1fr] gap-5 sm:grid-cols-[7rem_1fr]">
              <div className="relative aspect-[5/4] bg-transparent">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="product-packshot object-contain p-2"
                  sizes="112px"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <Link
                      href={`/product/${item.slug}`}
                      className="font-serif text-2xl tracking-tight link-underline"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-2 text-sm text-mute">
                      {item.colorName} · Size {item.size}
                    </p>
                  </div>
                  <p className="text-sm">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between pt-5">
                  <div
                    className="flex items-center gap-4 text-sm"
                    role="group"
                    aria-label={`Quantity for ${item.name}`}
                  >
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="text-sm text-mute"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="lg:col-span-3 lg:col-start-10">
          <div className="flex items-baseline justify-between text-sm">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-3 text-sm text-mute">
            Shipping and taxes calculated at checkout.
          </p>
          <Link href="/checkout" className="btn btn-solid mt-8 w-full">
            Check out
          </Link>
          <Link href="/shop" className="btn btn-primary mt-5 w-full">
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
