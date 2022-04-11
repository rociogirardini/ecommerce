import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const itemInCart = cart.some(
      (prod) => prod.id === item.id && prod.colorMarco === item.colorMarco
    );
    if (itemInCart) {
      const updatedCart = cart.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, cantidad: item.cantidad + prod.cantidad };
        } else {
          return prod;
        }
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, item]);
    }
  };

  const isInCart = (id) => {
    return cart.some((prop) => prop.id === id);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, prod) => (acc += prod.cantidad), 0);
  };

  const cartTotal = () => {
    return cart.reduce((acc, prod) => (acc += prod.price * prod.cantidad), 0);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const removeItem = (id, colorMarco) => {
    setCart(
      cart.filter(
        (item) => (item.id !== id || item.colorMarco !== colorMarco)
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        isInCart,
        cartQuantity,
        cartTotal,
        emptyCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
