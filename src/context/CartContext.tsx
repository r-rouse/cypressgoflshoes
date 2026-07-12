"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { CartItem } from "@/types/cart";
import { createCartItemId } from "@/lib/format";

const STORAGE_KEY = "cypress-cart-v1";

type AddItemInput = Omit<CartItem, "id" | "quantity"> & {
  quantity?: number;
};

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  itemCount: number;
  subtotal: number;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: AddItemInput) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

type CartStore = {
  items: CartItem[];
  isOpen: boolean;
};

function readStoredItems(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

let store: CartStore = {
  items: typeof window === "undefined" ? [] : readStoredItems(),
  isOpen: false,
};
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function getSnapshot(): CartStore {
  return store;
}

function getServerSnapshot(): CartStore {
  return { items: [], isOpen: false };
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function setStore(partial: Partial<CartStore>) {
  store = { ...store, ...partial };
  if (partial.items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(partial.items));
  }
  emit();
}

export function CartProvider({ children }: { children: ReactNode }) {
  const { items, isOpen } = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const openCart = useCallback(() => setStore({ isOpen: true }), []);
  const closeCart = useCallback(() => setStore({ isOpen: false }), []);
  const toggleCart = useCallback(
    () => setStore({ isOpen: !store.isOpen }),
    [],
  );

  const addItem = useCallback((item: AddItemInput) => {
    const id = createCartItemId(item.productId, item.colorId, item.size);
    const quantity = item.quantity ?? 1;
    const existing = store.items.find((entry) => entry.id === id);
    const nextItems = existing
      ? store.items.map((entry) =>
          entry.id === id
            ? { ...entry, quantity: entry.quantity + quantity }
            : entry,
        )
      : [...store.items, { ...item, id, quantity }];
    setStore({ items: nextItems, isOpen: true });
  }, []);

  const removeItem = useCallback((id: string) => {
    setStore({ items: store.items.filter((item) => item.id !== id) });
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity < 1) {
      setStore({ items: store.items.filter((item) => item.id !== id) });
      return;
    }
    setStore({
      items: store.items.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      ),
    });
  }, []);

  const clearCart = useCallback(() => setStore({ items: [] }), []);

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      isOpen,
      itemCount,
      subtotal,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [
      items,
      isOpen,
      itemCount,
      subtotal,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
