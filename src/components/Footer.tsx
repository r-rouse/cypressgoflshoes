import Link from "next/link";

const footerLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/journal", label: "Journal" },
  { href: "/our-story", label: "Brand" },
  { href: "/#newsletter", label: "Newsletter" },
  { href: "mailto:hello@cypress.studio", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="pad-x py-12 md:py-16">
        <p className="font-serif text-4xl tracking-tight md:text-5xl">cypress</p>
        <p className="mt-3 text-sm text-mute">Women&apos;s golf shoes · Santa Barbara</p>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm link-underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="pad-x flex flex-col gap-2 border-t border-line py-5 sm:flex-row sm:justify-between">
        <p className="text-sm text-mute">© {new Date().getFullYear()}, Cypress</p>
        <p className="text-sm text-mute">Santa Barbara</p>
      </div>
    </footer>
  );
}
