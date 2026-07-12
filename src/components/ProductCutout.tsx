import Image from "next/image";

type ProductCutoutProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  interactive?: boolean;
};

/** Product-only packshot: shoe isolated on the page, soft shadow on the site ground. */
export function ProductCutout({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  interactive = false,
}: ProductCutoutProps) {
  return (
    <div
      className={`product-cutout-stage relative flex h-full w-full items-center justify-center ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`product-packshot object-contain p-[10%] md:p-[12%] fade-in ${
          interactive
            ? "transition-transform duration-700 ease-out group-hover:-translate-y-1"
            : ""
        }`}
      />
    </div>
  );
}
