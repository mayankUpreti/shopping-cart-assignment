import React, { useState,useEffect } from 'react'

const ProductCard=({data,addItemToCard})=>{

const [imageurl,setImageUrl]=useState('')

useEffect(()=>{
    setImageUrl(`../../../${data.imageURL}`)
},[data])



  return(
   <div className='product-card'>
       <div style={{height:'80px'}} >
       <div className='font-weight-bold mid-heading'>{data.name}</div>
       </div>
       
       <div  className='p-card'>
           <img className='p-img' src={imageurl} alt={data.name}/>
           <div className='p-desc'>
           <div  className='sidebar text-ellipses p-3'>
            {data.description}
           </div>
           <button className='btn btn-primary btn-block my-1 d-view' onClick={()=>addItemToCard(data,'add')}>Buy Now @ Rs.{data.price}</button>
           </div>
       </div>
       <button className='btn btn-primary btn-block my-1 m-view' onClick={()=>addItemToCard(data,'add')}>Buy Now @ Rs.{data.price}</button>
   </div>
    )
}

export default ProductCard