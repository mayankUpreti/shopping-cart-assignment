import React,{useContext, useState} from 'react'
import { useHistory,Link } from 'react-router-dom'
import Cart from '../Cart/Cart'
import CartSvg from '../../../static/images/cart.svg'
import Logo from '../../../static/images/logo.png'
import { ShoppingContext } from '../../context/ShoppingContext'
const Header=()=>{
    const [show, setShow] = useState(false);
    const {cartitem}=useContext(ShoppingContext)
return(
    <div className='d-flex w-100 py-2'>
       <div className='w-25 text-center'>
       <Link to="/"> <img src={Logo} alt='logo'/></Link>
       </div>
       <div className='w-50 d-flex justify-content-center align-items-end'>
           <span className='p-3'><Link to="/home">Home</Link></span>
           <span className='p-3'><Link to="/products">Products</Link></span>
       </div>
       <div className='w-25 d-flex flex-column justify-content-end align-items-center'>
           <div>
           <div className='d-flex'>
               <span className='p-2' ><Link to="/login">Signin</Link></span>
               <span className='p-2'><Link to="/register">Register</Link></span>
           </div>
           <div className='nav-cart' onClick={()=>setShow(true)}>
               <img className='text-primary' style={{height:'40px'}} src={CartSvg} alt='cart'/>
              <span>{cartitem &&cartitem.length ? cartitem.reduce(((acc,curr)=>curr.quantity+acc),0):0} items</span> 
           </div>
           </div>
       </div>
       <Cart  show={show} setShow={setShow}/>
    </div>
)

}

export default Header