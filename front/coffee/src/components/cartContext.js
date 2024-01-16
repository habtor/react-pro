import { createContext, useState, useContext } from "react";

const CartItemsContext = createContext();

export const useCartItems = () => useContext(CartItemsContext);

export const CartItemsProvider = ({ children }) => {
  const [cartItemsIds, setCartItemsIds] = useState([]);

  const toggleCartItems = (itemId) => {
    if (cartItemsIds.includes(itemId)) {
      setCartItemsIds(cartItemsIds.filter((id) => id !== itemId));
    } else {
      setCartItemsIds([...cartItemsIds, itemId]);
    }
  };

  const clearCart = () => {
    setCartItemsIds([]);
  };

  return (
    <CartItemsContext.Provider
      value={{ cartItemsIds, toggleCartItems, clearCart }}
    >
      {children}
    </CartItemsContext.Provider>
  );
};
