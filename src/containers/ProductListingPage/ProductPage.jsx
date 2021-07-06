import React, { useEffect,useState,useContext } from 'react'
import { fetchproducts } from '../../api/api'
import Sidebar from '../../components/Sidebar/Sidebar'
import ProductCard from '../../components/ProductCard/ProductCard'

import { ShoppingContext } from '../../context/ShoppingContext'

const ProductPage=()=>{
  const [products,setProducts]=useState([]);
  const [category,setCategory]=useState('');
  const {addItemToCard}=useContext(ShoppingContext)

  useEffect(async ()=>{
    const data=await fetchproducts();
    setProducts(data);
  },[])

  return(
   <div className='w-100 d-flex product-page'>
     <div className='col-3'>
     <Sidebar category={category} setCategory={setCategory} />
     </div>
   <div className='col-9 d-flex flex-wrap justify-content-around'>
   {
      products && products.filter(el=>
        {  if(category){
         return el.category===category
        }else return el
       }
        ).map((el,i)=>{
         return <ProductCard data={el} key={el.id} addItemToCard={addItemToCard}/>
       })
     }
   </div>
    
   </div>
    )
}

export default ProductPage