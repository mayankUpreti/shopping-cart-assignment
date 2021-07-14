import React from 'react'
import {removeItemfromUI,addItemToCard} from '../../context/utils'
const CartItem=({data,cartitem,setCartItem})=>{
    return(
        <div className='row cart-item-body my-1'>
            <div className='col-3'>
            <img className='cart-item-image' src={data.imageURL} alt={data.name}/>
            </div>

            <div className='col-7 d-flex flex-column justify-content-center'>
                <div className='font-weight-bold'>{data.name}</div>
                <div className='d-flex justify-content-around align-items-center'>
                   <span data-testid='cart-decrease' tabIndex={0} role='button' onClick={()=>data.quantity>1?addItemToCard(data,'remove',cartitem,setCartItem):removeItemfromUI(data,cartitem,setCartItem)}>-</span><span data-testid="cart-quantity" className='font-weight-bold'>{data.quantity}</span> <span data-testid='cart-increase'  tabIndex={0} role='button' onClick={()=>addItemToCard(data,'add',cartitem,setCartItem)}>+ </span> x <span> Rs.{data.price}</span>
                </div>
            </div>
            <div className='col-2 d-flex justify-content-center align-items-end p-3'>
                Rs. {data.quantity*data.price}
            </div>
        </div>
    )
}

export default CartItem