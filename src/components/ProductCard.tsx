import Link from "next/link";
import { ProductCutout } from "@/components/ProductCutout";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/format";

type ProductCardProps = {
  product: Product;
  index?: number;
};

export function ProductCard({ product }: ProductCardProps) {
  const image = product.images[0];

  return (
    <article>
      <Link
        href={`/product/${product.slug}`}
        className="group block focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
      >
        <div className="relative mb-5 aspect-[5/4] bg-transparent">
          <ProductCutout
            src={image.src}
            alt={image.alt}
            interactive
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
        <p className="mb-2 text-sm text-mute">Women&apos;s Golf Shoe</p>
        <h3 className="font-serif text-2xl tracking-tight md:text-3xl">
          {product.name}
        </h3>
        <ul className="mt-4 space-y-1">
          {product.colors.map((color) => (
            <li
              key={color.id}
              className="flex items-baseline justify-between gap-4 text-sm text-mute"
            >
              <span>{color.name}</span>
              <span>{formatPrice(product.price)}</span>
            </li>
          ))}
        </ul>
        {!product.inStock ? (
          <p className="mt-3 text-sm text-mute">Sold out</p>
        ) : null}
      </Link>
    </article>
  );
}
