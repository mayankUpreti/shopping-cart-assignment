import React, { useContext } from 'react'

import { Modal,Button } from 'react-bootstrap'
import { ShoppingContext } from '../../context/ShoppingContext';
import CartItem from './CartItems';
import Lowest from '../../../static/images/lowest-price.png'

const Cart=({show,setShow})=>{
    const handleClose = () => setShow(false);
    const { cartitem,removeItemfromUI,
        addItemToCard,totalamount}=useContext(ShoppingContext)
    return(
        <div>
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="cart-modal"
      >
        <Modal.Header  className="cart-header" closeButton>
          <Modal.Title className='cart-title'>My Cart({cartitem &&cartitem.length ? cartitem.reduce(((acc,curr)=>curr.quantity+acc),0):0} items)</Modal.Title>
        </Modal.Header>
        <Modal.Body className={` cart-body ${ cartitem && cartitem.length? '': 'cart-item-body'}`}>
          {
              cartitem && cartitem.length ? 
              
              cartitem.map((el,i)=>
              <CartItem key={el.id} data={el} addItemToCard={addItemToCard} removeItemfromUI={removeItemfromUI} />
            
              )
              :<div className='h-100 align-center flex-column'>
                  <h3 className='font-weight-bold'>No Items in your cart</h3>
                  <div>Your favorite items are just a click away</div>
              </div>
          }  
          {
            cartitem && cartitem.length ? <div className='d-flex align-items-center cart-item-body mt-2'>
            <img src={Lowest} alt='Lowest price'/> You won't find this cheaper anywhere
          </div>:''
          }
             
        </Modal.Body>
        <Modal.Footer className='cart-footer' >
          <div>Promo code can be applied on payment page</div>
          <Button variant="primary" className='btn-lg w-100 d-flex align-items-center justify-content-between' onClick={handleClose}>
            {
              cartitem && cartitem.length ?
              <>
              <span>{  'Proceed to Checkout' }</span>
              <span className='align-middle'>Rs. {totalamount} &nbsp;&nbsp; &#62;</span>
              </>
              :
              <div className='text-center w-100'>Start Shopping</div>
            }
     
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default Cart