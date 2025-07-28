import { createContext, useState, ReactNode, useContext } from 'react';
import { Book, CartItem } from '../types/bookTypes';

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (book: Book) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

// Changed to CardContext to match filename
const CardContext = createContext<CartContextType | undefined>(undefined);

// Changed export to CardProvider to match filename
export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (book: Book) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === book.id);
      return existingItem
        ? prevItems.map(item =>
            item.id === book.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevItems, { ...book, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CardContext.Provider // Changed to CardContext
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CardContext.Provider> // Changed to CardContext
  );
};

// Keep useCart name for semantic meaning
export const useCart = (): CartContextType => {
  const context = useContext(CardContext); // Changed to CardContext
  if (!context) {
    throw new Error('useCart must be used within a CardProvider');
  }
  return context;
};