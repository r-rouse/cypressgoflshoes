import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes from the Cypress studio — materials, place, and process.",
};

const entries = [
  {
    title: "Notes on full-grain leather",
    excerpt:
      "How we choose calf leather for The Montecito, and what softens after the first few rounds.",
  },
  {
    title: "A morning at Sandpiper",
    excerpt:
      "Coastal light, early tee times, and the kind of shoe that disappears until you need it.",
  },
  {
    title: "Fitting the last",
    excerpt:
      "Why a quiet silhouette takes longer than a loud one — and why we prefer it that way.",
  },
];

export default function JournalPage() {
  return (
    <div className="pad-x pad-y">
      <div className="mb-14 max-w-2xl">
        <h1 className="font-serif text-4xl tracking-tight md:text-6xl">
          Journal
        </h1>
        <p className="mt-5 body-editorial">
          Notes from the studio — materials, California light, and process.
        </p>
      </div>

      <ul>
        {entries.map((entry) => (
          <li key={entry.title} className="border-t border-line py-8 md:py-10">
            <h2 className="font-serif text-2xl tracking-tight md:text-4xl">
              {entry.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-mute">
              {entry.excerpt}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-mute">
        <Link href="/#newsletter" className="link-underline text-charcoal">
          Newsletter
        </Link>
      </p>
    </div>
  );
}
