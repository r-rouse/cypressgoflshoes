"use client";

import Image from "next/image";
import { useState } from "react";
import { ProductCutout } from "@/components/ProductCutout";
import type { ProductImage } from "@/types/product";

type ProductGalleryProps = {
  images: ProductImage[];
  productName: string;
};

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex] ?? images[0];

  return (
    <div>
      <div className="relative aspect-[5/4] bg-transparent lg:min-h-[85vh] lg:aspect-auto">
        <ProductCutout
          key={active.id}
          src={active.src}
          alt={active.alt}
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>

      {images.length > 1 ? (
        <ul
          className="mt-2 flex gap-3 overflow-x-auto pad-x pb-2 lg:px-0"
          aria-label={`${productName} image gallery`}
        >
          {images.map((image, index) => {
            const selected = index === activeIndex;
            return (
              <li key={image.id} className="shrink-0">
                <button
                  type="button"
                  className={`relative h-16 w-20 bg-transparent transition-opacity duration-500 ${
                    selected ? "opacity-100" : "opacity-35 hover:opacity-70"
                  }`}
                  aria-label={`View image ${index + 1}: ${image.alt}`}
                  aria-pressed={selected}
                  onClick={() => setActiveIndex(index)}
                >
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    className="product-cutout-thumb object-contain p-1"
                    sizes="80px"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
