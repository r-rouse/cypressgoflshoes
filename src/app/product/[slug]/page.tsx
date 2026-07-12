import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetail } from "@/components/ProductDetail";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = getRelatedProducts(product.slug);
  const lifestyle = product.lifestyleImages[0];

  return (
    <>
      <ProductDetail product={product} />

      <section className="border-t border-line">
        <div className="img-reveal relative h-[55svh] min-h-[20rem] bg-ivory md:h-[70svh]">
          <Image
            src={lifestyle.src}
            alt={lifestyle.alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="pad-x py-10 md:py-14">
          <p className="chapter max-w-[16ch]">
            Soft enough
            <br />
            <span className="italic">for the afterparty</span>
          </p>
        </div>
      </section>

      <section className="pad-x pad-y border-t border-line">
        <div className="mb-10 flex items-baseline justify-between gap-4">
          <h2 className="font-serif text-3xl tracking-tight">Related</h2>
          <Link href="/shop" className="btn btn-primary">
            Shop
          </Link>
        </div>

        {related.length > 0 ? (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <ProductCard key={item.id} product={item} index={index + 1} />
            ))}
          </div>
        ) : (
          <p className="max-w-md body-editorial">
            More pieces are ahead. For now, The Montecito stands alone.
          </p>
        )}
      </section>
    </>
  );
}
