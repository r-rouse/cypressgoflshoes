import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="border-b border-line">
      <div className="pad-x flex items-center justify-between gap-6 py-2.5">
        <p className="meta">Vol. I — Coastal Collection</p>
        <p className="meta hidden md:block">Complimentary shipping within the United States</p>
        <Link href="/shop" className="meta link-underline text-charcoal">
          View collection
        </Link>
      </div>
    </div>
  );
}
