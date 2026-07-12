import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand",
  description:
    "Cypress is a Santa Barbara footwear studio making elegant golf shoes for women.",
};

export default function OurStoryPage() {
  return (
    <>
      <section className="pad-x pad-y">
        <p className="mb-6 text-sm text-mute">Brand</p>
        <h1 className="chapter max-w-[16ch]">
          Made beside
          <br />
          <span className="italic">the Pacific</span>
        </h1>
      </section>

      <section>
        <div className="img-reveal relative h-[60svh] min-h-[22rem] bg-ivory md:h-[80svh]">
          <Image
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1600&q=80"
            alt="Motel palms and late California light — off the highway, not the clubhouse"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <section className="pad-x pad-y">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-5 body-editorial lg:col-span-5 lg:col-start-2">
            <p>
              Cypress began in Santa Barbara for women who play golf but refuse
              the costume. We wanted a shoe that could hold a fairway and still
              belong in a real wardrobe — denim, linen, something unexpected.
            </p>
            <p>
              Most options were too loud, too technical, or too temporary. So we
              cut leather ourselves and built soles that stay quiet on purpose.
            </p>
          </div>
          <div className="space-y-5 body-editorial lg:col-span-4 lg:col-start-8">
            <p>
              The Montecito is our first answer. It is not meant to shout. It is
              meant to fit into a wardrobe of linen, soft knits, and well-worn
              denim — and still earn its place on the first tee.
            </p>
            <Link href="/product/montecito" className="btn btn-primary mt-2 inline-flex">
              Shop The Montecito
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
