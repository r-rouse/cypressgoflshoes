import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { NewsletterForm } from "@/components/NewsletterForm";
import { ProductCutout } from "@/components/ProductCutout";
import { getFeaturedProduct, getFeaturedProducts } from "@/data/products";
import { formatPrice } from "@/lib/format";

export default function HomePage() {
  const product = getFeaturedProduct();
  const featured = getFeaturedProducts(3);
  const lifestyle = product.lifestyleImages[0];

  return (
    <>
      <Hero product={product} />

      {featured.map((item, index) => (
        <section key={item.id} className="pad-x py-8 md:py-12">
          <div
            className={`relative bg-transparent ${
              index === 1
                ? "aspect-[5/4] md:ml-auto md:max-w-[60%]"
                : "aspect-[16/9] md:aspect-[2.2/1]"
            }`}
          >
            <ProductCutout
              src={item.images[0].src}
              alt={item.images[0].alt}
              interactive
              sizes="100vw"
            />
          </div>
          <div
            className={`mt-8 max-w-3xl ${
              index === 1 ? "md:ml-auto md:max-w-md md:text-right" : ""
            }`}
          >
            <p className="mb-2 text-sm text-mute">Women&apos;s Golf Shoe</p>
            <h2 className="font-serif text-3xl tracking-tight md:text-5xl">
              {item.name}
            </h2>
            <ul
              className={`mt-6 space-y-2 ${
                index === 1 ? "md:ml-auto md:max-w-xs" : "max-w-sm"
              }`}
            >
              {item.colors.map((color) => (
                <li
                  key={color.id}
                  className="flex items-baseline justify-between gap-6 text-sm text-mute"
                >
                  <span>{color.name}</span>
                  <span>
                    {item.inStock ? formatPrice(item.price) : "Sold out"}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href={`/product/${item.slug}`}
              className="btn btn-primary mt-6 inline-flex"
            >
              View
            </Link>
          </div>

          {index === 0 ? (
            <div className="pad-y px-0">
              <h2 className="chapter max-w-[14ch]">
                After the round
                <br />
                <span className="italic">somewhere better</span>
              </h2>
            </div>
          ) : null}
        </section>
      ))}

      <section>
        <div className="img-reveal relative h-[70svh] min-h-[24rem] bg-ivory md:h-[85svh]">
          <Image
            src={lifestyle.src}
            alt={lifestyle.alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="pad-x py-10 md:py-14">
          <p className="font-serif text-2xl tracking-tight md:text-4xl">
            Golf shoes for women who dress like themselves.
            <br />
            Soft enough for town. Strange enough for Cypress.
          </p>
          <div className="mt-6 flex flex-wrap gap-6">
            <Link href="/shop" className="btn btn-primary">
              Shop
            </Link>
            <Link href="/our-story" className="btn btn-primary">
              Brand
            </Link>
          </div>
        </div>
      </section>

      <section className="pad-x py-6 md:py-10">
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-4 border-t border-line pt-10">
          <p className="font-serif text-2xl tracking-tight md:text-3xl">
            Journal
          </p>
          <Link href="/journal" className="btn btn-primary">
            Explore
          </Link>
        </div>
      </section>

      <NewsletterForm />
    </>
  );
}
