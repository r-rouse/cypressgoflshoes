"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";

export function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, updateQuantity, removeItem } =
    useCart();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeCart]);

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-ink/25 transition-opacity duration-700 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Close cart"
        onClick={closeCart}
        tabIndex={isOpen ? 0 : -1}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-paper transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <h2 className="text-sm">Cart({items.length})</h2>
          <button
            ref={closeRef}
            type="button"
            className="text-sm"
            aria-label="Close cart"
            onClick={closeCart}
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col justify-center gap-5">
              <p className="text-sm text-mute">Your cart is empty.</p>
              <Link href="/shop" className="btn btn-primary w-fit" onClick={closeCart}>
                Continue shopping
              </Link>
            </div>
          ) : (
            <ul className="space-y-8">
              {items.map((item) => (
                <li key={item.id} className="grid grid-cols-[4.5rem_1fr] gap-4">
                  <div className="relative aspect-[5/4] bg-transparent">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      
                      className="product-cutout-thumb object-contain p-1"
                      sizes="72px"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          href={`/product/${item.slug}`}
                          className="text-sm link-underline"
                          onClick={closeCart}
                        >
                          {item.name}
                        </Link>
                        <p className="mt-1 text-sm text-mute">
                          {item.colorName} · {item.size}
                        </p>
                      </div>
                      <p className="text-sm">{formatPrice(item.price)}</p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div
                        className="flex items-center gap-3 text-sm"
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
          )}
        </div>

        {items.length > 0 ? (
          <div className="border-t border-line px-5 py-5">
            <div className="mb-5 flex items-baseline justify-between text-sm">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/checkout" className="btn btn-solid w-full" onClick={closeCart}>
                Check out
              </Link>
              <Link href="/cart" className="btn btn-primary mx-auto" onClick={closeCart}>
                View cart
              </Link>
            </div>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
