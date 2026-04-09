import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const clearCart = () => {
    setCartItems([]);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );

      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // 🔥 Single remove function
  const removeFromCart = (id) => {
    const existingItem = cartItems.find((item) => item.id === id);

    if (!existingItem) return;

    if (existingItem.quantity > 1) {
      // decrease quantity
      const updatedCart = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      );

      setCartItems(updatedCart);
    } else {
      // remove completely
      const updatedCart = cartItems.filter((item) => item.id !== id);

      setCartItems(updatedCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
