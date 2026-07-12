"use client";

import Link from "next/link";
import { CypressWordmark } from "@/components/CypressMark";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  pathname: string;
};

export function MobileMenu({ open, onClose, links, pathname }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-ink/20 transition-opacity duration-700 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Close menu"
        onClick={onClose}
        tabIndex={open ? 0 : -1}
      />

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`absolute inset-y-0 left-0 flex w-[min(100%,20rem)] flex-col bg-paper transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-12 items-center justify-between px-5">
          <CypressWordmark />
          <button
            type="button"
            className="text-sm"
            aria-label="Close menu"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <nav className="flex flex-1 flex-col px-5 pt-10" aria-label="Mobile">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-line py-5 font-serif text-3xl tracking-tight"
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cart"
            className="border-b border-line py-5 font-serif text-3xl tracking-tight"
            onClick={onClose}
          >
            Cart
          </Link>
        </nav>
      </div>
    </div>
  );
}
