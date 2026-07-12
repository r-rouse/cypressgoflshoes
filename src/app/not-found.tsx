import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pad-x pad-y">
      <h1 className="font-serif text-4xl tracking-tight">Page not found</h1>
      <p className="mt-4 text-sm text-mute">This page isn&apos;t part of Cypress.</p>
      <Link href="/" className="btn btn-primary mt-8 inline-flex">
        Home
      </Link>
    </div>
  );
}
