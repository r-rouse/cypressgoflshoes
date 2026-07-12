import Image from "next/image";
import Link from "next/link";
import { ProductCutout } from "@/components/ProductCutout";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/format";

type HeroProps = {
  product: Product;
};

export function Hero({ product }: HeroProps) {
  const lifestyle = product.lifestyleImages[0];
  const packshot = product.images[0];

  return (
    <section>
      <div className="img-reveal relative h-[55svh] min-h-[20rem] w-full bg-ivory md:h-[68svh]">
        <Image
          src={lifestyle.src}
          alt={lifestyle.alt}
          fill
          priority
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
      </div>

      <div className="pad-x grid items-center gap-8 py-10 md:grid-cols-12 md:py-14">
        <div className="md:col-span-6 lg:col-span-5">
          <p className="mb-2 text-sm text-mute">Women&apos;s golf shoe</p>
          <h1 className="chapter max-w-[13ch] text-charcoal">
            Not for
            <br />
            <span className="italic">the clubhouse crowd</span>
          </h1>
          <div className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-3">
            <p className="text-sm text-mute">{product.name}</p>
            <p className="text-sm text-mute">{formatPrice(product.price)}</p>
            <Link
              href={`/product/${product.slug}`}
              className="btn btn-primary text-sm"
            >
              View
            </Link>
          </div>
        </div>

        <div className="relative aspect-[5/4] md:col-span-6 lg:col-span-6 lg:col-start-7">
          <ProductCutout
            src={packshot.src}
            alt={packshot.alt}
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}
