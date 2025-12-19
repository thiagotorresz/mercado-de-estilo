import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/data/products';

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  favorites: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: number) => boolean;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const toggleFavorite = (product: Product) => {
    setFavorites(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isFavorite = (productId: number) => {
    return favorites.some(p => p.id === productId);
  };

  const cartTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        favorites,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleFavorite,
        isFavorite,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
