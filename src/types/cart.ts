export type CartItem = {
  id: string;
  productId: string;
  slug: string;
  name: string;
  price: number;
  colorId: string;
  colorName: string;
  size: string;
  quantity: number;
  image: string;
  imageAlt: string;
};

export type CartState = {
  items: CartItem[];
  isOpen: boolean;
};
