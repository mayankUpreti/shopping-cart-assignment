import React, { useState, createContext, useEffect } from "react";

export const ShoppingContext = createContext();

export const ShoppingState = ({ children }) => {
  const [cartitem, setCartItem] = useState([]);
  const [totalamount, setTotalAmount] = useState(0);

  useEffect(() => {
    let amount = cartitem && cartitem.reduce((acc, el) => el.quantity * el.price + acc, 0);
    setTotalAmount(amount)
  }, [cartitem])

  return (
    <ShoppingContext.Provider
      value={{
        cartitem,
        totalamount,
        setCartItem
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
