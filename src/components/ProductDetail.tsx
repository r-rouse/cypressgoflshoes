"use client";

import { useMemo, useState } from "react";
import { Accordion } from "@/components/Accordion";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductOptions } from "@/components/ProductOptions";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/types/product";

type ProductDetailProps = {
  product: Product;
};

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState("");

  const accordionItems = useMemo(
    () => [
      {
        id: "details",
        title: "Details",
        content: (
          <ul className="space-y-2">
            {product.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        ),
      },
      {
        id: "materials",
        title: "Materials & care",
        content: (
          <div className="space-y-4">
            <ul className="space-y-2">
              {product.materials.map((material) => (
                <li key={material}>{material}</li>
              ))}
            </ul>
            <ul className="space-y-2">
              {product.care.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
        ),
      },
      {
        id: "shipping",
        title: "Shipping & returns",
        content: (
          <ul className="space-y-2">
            {product.shippingReturns.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ),
      },
    ],
    [product],
  );

  return (
    <div className="grid lg:grid-cols-12">
      <div className="lg:col-span-7">
        <div className="lg:sticky lg:top-14">
          <ProductGallery images={product.images} productName={product.name} />
        </div>
      </div>

      <div className="pad-x py-10 lg:col-span-5 lg:py-16 lg:pl-12 lg:pr-[clamp(1rem,3.5vw,2.5rem)]">
        <div className="lg:max-w-sm">
          <p className="mb-4 text-sm text-mute">Women&apos;s Golf Shoe</p>
          <h1 className="font-serif text-4xl tracking-tight md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-3 text-sm">{formatPrice(product.price)}</p>
          <p className="mt-6 body-editorial">{product.shortDescription}</p>

          <div className="mt-10">
            <ProductOptions
              product={product}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              onColorChange={setSelectedColor}
              onSizeChange={setSelectedSize}
            />
          </div>

          <div className="mt-10">
            <AddToCartButton
              product={product}
              color={selectedColor}
              size={selectedSize}
            />
          </div>

          <p className="mt-12 font-serif text-xl italic leading-relaxed text-charcoal">
            {product.editorialNote}
          </p>

          <div className="mt-12">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
