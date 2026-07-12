"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/types/product";

type ShopCatalogProps = {
  products: Product[];
};

export function ShopCatalog({ products }: ShopCatalogProps) {
  const allColors = useMemo(() => {
    const map = new Map<string, string>();
    products.forEach((product) => {
      product.colors.forEach((color) => map.set(color.id, color.name));
    });
    return Array.from(map.entries()).map(([id, name]) => ({ id, name }));
  }, [products]);

  const allSizes = useMemo(() => {
    const sizes = new Set<string>();
    products.forEach((product) => product.sizes.forEach((size) => sizes.add(size)));
    return Array.from(sizes);
  }, [products]);

  const [color, setColor] = useState("all");
  const [size, setSize] = useState("all");
  const [availability, setAvailability] = useState("all");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const colorMatch =
        color === "all" || product.availableColors.includes(color);
      const sizeMatch =
        size === "all" || product.availableSizes.includes(size);
      const availabilityMatch =
        availability === "all" ||
        (availability === "in-stock" && product.inStock) ||
        (availability === "sold-out" && !product.inStock);
      return colorMatch && sizeMatch && availabilityMatch;
    });
  }, [products, color, size, availability]);

  return (
    <div>
      <div className="mb-12 md:mb-16">
        <p className="mb-3 text-sm text-mute">Women&apos;s Golf Shoes</p>
        <h1 className="font-serif text-4xl tracking-tight md:text-6xl">Shop</h1>
      </div>

      <div
        className="mb-10 flex flex-wrap gap-6"
        role="group"
        aria-label="Product filters"
      >
        <label className="sr-only" htmlFor="filter-color">
          Filter by color
        </label>
        <select
          id="filter-color"
          className="select-ghost"
          value={color}
          onChange={(event) => setColor(event.target.value)}
        >
          <option value="all">Color</option>
          {allColors.map((entry) => (
            <option key={entry.id} value={entry.id}>
              {entry.name}
            </option>
          ))}
        </select>

        <label className="sr-only" htmlFor="filter-size">
          Filter by size
        </label>
        <select
          id="filter-size"
          className="select-ghost"
          value={size}
          onChange={(event) => setSize(event.target.value)}
        >
          <option value="all">Size</option>
          {allSizes.map((entry) => (
            <option key={entry} value={entry}>
              {entry}
            </option>
          ))}
        </select>

        <label className="sr-only" htmlFor="filter-availability">
          Filter by availability
        </label>
        <select
          id="filter-availability"
          className="select-ghost"
          value={availability}
          onChange={(event) => setAvailability(event.target.value)}
        >
          <option value="all">Availability</option>
          <option value="in-stock">In stock</option>
          <option value="sold-out">Sold out</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="py-20 text-sm text-mute">No products match these filters.</p>
      ) : (
        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
