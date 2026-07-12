export type ProductColor = {
  id: string;
  name: string;
  hex: string;
};

export type ProductImage = {
  id: string;
  src: string;
  alt: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  colors: ProductColor[];
  sizes: string[];
  images: ProductImage[];
  lifestyleImages: ProductImage[];
  benefits: string[];
  materials: string[];
  care: string[];
  shippingReturns: string[];
  editorialNote: string;
  inStock: boolean;
  availableSizes: string[];
  availableColors: string[];
  category: string;
  featured?: boolean;
};
