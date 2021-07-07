import React, { useEffect,useState,useContext } from 'react'
import { fetchproducts } from '../../api/api'
import Sidebar from '../../components/Sidebar/Sidebar'
import ProductCard from '../../components/ProductCard/ProductCard'
import {useLocation,useRouteMatch} from 'react-router-dom'
import { ShoppingContext } from '../../context/ShoppingContext'

import ProductPageMobile from './ProductPageMobile'

const ProductPage=()=>{
  const [products,setProducts]=useState([]);
  const [category,setCategory]=useState('');

  const handleCategory=(el)=>{

    if(el===category){
      setCategory('')
    }else{
      setCategory(el)
    }

  }

  const {addItemToCard}=useContext(ShoppingContext)

  useEffect(async ()=>{
    const data=await fetchproducts();
    setProducts(data);
  },[])

  return(
   <div className='w-100 d-flex'>
     <div className='col-md-3 m-view'>
     <Sidebar category={category} setCategory={handleCategory} />
     </div>
    <div className='col-md-9 d-flex flex-wrap justify-content-around m-view'>
    {
      products && products.filter(el=>
        {  if(category){
         return el.category===category
        }else return el
        }
        )&& products.filter(el=>
          {  if(category){
           return el.category===category
          }else return el
          }
          ).length? products.filter(el=>
          {  if(category){
           return el.category===category
          }else return el
         }
          ).map((el,i)=>{
         return <ProductCard data={el} key={el.id} addItemToCard={addItemToCard}/>
       }):<div className='align-center h-100 font-weight-bold h3'>
         No Items available
       </div>
     }
   </div>
   <ProductPageMobile products={products} addItemToCard={addItemToCard} category={category} setCategory={handleCategory}/>
   </div>
    )
}

export default ProductPage