"use client";

import type { Product, ProductColor } from "@/types/product";

type ProductOptionsProps = {
  product: Product;
  selectedColor: ProductColor;
  selectedSize: string;
  onColorChange: (color: ProductColor) => void;
  onSizeChange: (size: string) => void;
};

export function ProductOptions({
  product,
  selectedColor,
  selectedSize,
  onColorChange,
  onSizeChange,
}: ProductOptionsProps) {
  return (
    <div className="space-y-10">
      <fieldset>
        <legend className="mb-4 text-sm text-mute">Color</legend>
        <ul className="space-y-2">
          {product.colors.map((color) => {
            const available = product.availableColors.includes(color.id);
            const selected = selectedColor.id === color.id;
            return (
              <li key={color.id}>
                <button
                  type="button"
                  disabled={!available}
                  aria-pressed={selected}
                  className={`text-left text-sm transition-opacity ${
                    selected ? "text-charcoal" : "text-mute hover:text-charcoal"
                  } ${available ? "" : "cursor-not-allowed opacity-30 line-through"}`}
                  onClick={() => onColorChange(color)}
                >
                  {color.name}
                </button>
              </li>
            );
          })}
        </ul>
      </fieldset>

      <fieldset>
        <legend className="mb-4 text-sm text-mute">Size</legend>
        <div className="flex flex-wrap gap-x-3 gap-y-2">
          {product.sizes.map((size) => {
            const available = product.availableSizes.includes(size);
            const selected = selectedSize === size;
            return (
              <button
                key={size}
                type="button"
                disabled={!available}
                aria-pressed={selected}
                className={`min-w-[1.75rem] text-sm transition-opacity ${
                  selected ? "text-charcoal underline underline-offset-4" : "text-mute hover:text-charcoal"
                } ${available ? "" : "cursor-not-allowed opacity-30 line-through"}`}
                onClick={() => onSizeChange(size)}
              >
                {size}
              </button>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}
