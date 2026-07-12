"use client";

import { useState, type FormEvent } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setStatus("success");
    setEmail("");
  }

  return (
    <section id="newsletter" className="border-t border-line">
      <div className="pad-x pad-y max-w-xl">
        <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
          Newsletter
        </h2>
        <p className="mt-4 body-editorial">
          Occasional notes from the studio.
        </p>
        {status === "success" ? (
          <p className="mt-8 text-sm" role="status">
            Thank you.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              className="input-field sm:flex-1"
            />
            <button type="submit" className="btn btn-primary shrink-0 pb-2">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
