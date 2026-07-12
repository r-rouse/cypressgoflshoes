"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { CypressWordmark } from "@/components/CypressMark";
import { MobileMenu } from "@/components/MobileMenu";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/journal", label: "Journal" },
  { href: "/our-story", label: "Brand" },
];

export function Header() {
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchId = useId();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function closeOverlays() {
    setMobileOpen(false);
    setSearchOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-40 bg-paper/95">
        <div className="pad-x grid h-12 grid-cols-[1fr_auto_1fr] items-center md:h-14">
          <div className="flex items-center gap-8">
            <button
              type="button"
              className="text-sm text-charcoal md:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(true)}
            >
              Menu
            </button>
            <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm link-underline"
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={closeOverlays}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <Link
            href="/"
            className="justify-self-center focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
            aria-label="Cypress home"
            onClick={closeOverlays}
          >
            <CypressWordmark />
          </Link>

          <div className="flex items-center justify-end gap-6">
            <button
              type="button"
              className="hidden text-sm md:inline"
              aria-expanded={searchOpen}
              aria-controls={searchId}
              onClick={() => setSearchOpen((prev) => !prev)}
            >
              Search
            </button>
            <button
              type="button"
              className="text-sm"
              aria-label={`Open cart, ${itemCount} items`}
              onClick={openCart}
            >
              Cart({itemCount})
            </button>
          </div>
        </div>

        {searchOpen ? (
          <div id={searchId} className="border-t border-line fade-in">
            <form
              className="pad-x flex items-end gap-6 py-4"
              role="search"
              onSubmit={(event) => {
                event.preventDefault();
                setSearchOpen(false);
              }}
            >
              <label htmlFor="site-search" className="sr-only">
                Search Cypress
              </label>
              <input
                id="site-search"
                name="q"
                type="search"
                placeholder="Search"
                className="input-field"
                autoFocus
              />
              <button
                type="button"
                className="shrink-0 pb-2 text-sm text-mute"
                aria-label="Close search"
                onClick={() => setSearchOpen(false)}
              >
                Close
              </button>
            </form>
          </div>
        ) : null}
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
        pathname={pathname}
      />
    </>
  );
}
