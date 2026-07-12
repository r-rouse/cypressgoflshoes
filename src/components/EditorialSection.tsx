import Image from "next/image";
import type { ReactNode } from "react";

type EditorialSectionProps = {
  eyebrow?: string;
  title: string;
  body: string;
  image: {
    src: string;
    alt: string;
  };
  caption?: string;
  reverse?: boolean;
  children?: ReactNode;
};

export function EditorialSection({
  title,
  body,
  image,
  caption,
  reverse = false,
  children,
}: EditorialSectionProps) {
  return (
    <section className="pad-y">
      <div className="pad-x mb-10 max-w-4xl md:mb-14">
        <h2 className="chapter text-charcoal">{title}</h2>
        <p className="mt-6 max-w-md body-editorial">{body}</p>
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
      <div className={reverse ? "md:pr-[12vw]" : "md:pl-[12vw]"}>
        <div className="img-reveal relative aspect-[5/6] bg-ivory md:aspect-[16/10]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {caption ? <p className="caption pad-x">{caption}</p> : null}
      </div>
    </section>
  );
}
