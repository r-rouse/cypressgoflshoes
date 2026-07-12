"use client";

import { useCart } from "@/context/CartContext";
import type { Product, ProductColor } from "@/types/product";

type AddToCartButtonProps = {
  product: Product;
  color: ProductColor;
  size: string;
  disabled?: boolean;
};

export function AddToCartButton({
  product,
  color,
  size,
  disabled = false,
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const image = product.images[0];

  return (
    <button
      type="button"
      className="btn btn-solid w-full sm:w-auto"
      disabled={disabled || !size || !product.inStock}
      onClick={() =>
        addItem({
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          colorId: color.id,
          colorName: color.name,
          size,
          image: image.src,
          imageAlt: image.alt,
        })
      }
    >
      {!product.inStock ? "Sold out" : size ? "Add to cart" : "Select a size"}
    </button>
  );
}
