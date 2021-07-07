import React, { useState, createContext, useEffect } from "react";
import { addToCart } from "../api/api";


export const ShoppingContext = createContext();

export const ShoppingState = ({ children }) => {
  const [cartitem, setCartItem] = useState([]);
  const [totalamount, setTotalAmount] = useState(0);

  useEffect(() => {
    let amount = cartitem && cartitem.reduce((acc, el) => el.quantity * el.price + acc, 0);
    setTotalAmount(amount)
  }, [cartitem])

  const addItemToCard = async (data, type) => {
    let isexist = cartitem.filter((el, i) => el.id === data.id);
    let payload = {
      id: data.id
    }
    const response = await addToCart(payload);
    if (response.response === 'Success') {
      if (isexist && isexist.length) {
        if (type == 'add') {
          setCartItem(cartitem.map(el =>
            el.id === data.id ?
              { ...el, quantity: el.quantity + 1 }
              : el))
        } else if (type == 'remove') {

          setCartItem(cartitem.map(el =>
            el.id === data.id ?
              { ...el, quantity: el.quantity - 1 }
              : el))

        }

      } else {
        setCartItem([...cartitem, {
          ...data,
          quantity: 1
        }])
      }
    }

  }

  const removeItemfromUI = (data) => {
    const cart = cartitem.filter((el) => el.id !== data.id)
    setCartItem(cart)
  }


  return (
    <ShoppingContext.Provider
      value={{
        cartitem,
        addItemToCard,
        removeItemfromUI,
        totalamount
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
