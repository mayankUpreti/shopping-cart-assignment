import { addToCart } from "../api/api";

export const addItemToCard = async (data, type,cartitem,setCartItem) => {
    let isExist = cartitem.filter((el, i) => el.id === data.id);
    let payload = {
      id: data.id
    }
    const response = await addToCart(payload);
    if (response.response === 'Success') {
      if (isExist && isExist.length) {
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


  export const removeItemfromUI = (data,cartitem,setCartItem) => {
    const cart = cartitem.filter((el) => el.id !== data.id)
    setCartItem(cart)
  }