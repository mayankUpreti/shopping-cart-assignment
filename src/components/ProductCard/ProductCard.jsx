import React, { useState,useEffect } from 'react'

const ProductCard=({data,addItemToCard})=>{

const [imageurl,setImageUrl]=useState('')

useEffect(()=>{
    setImageUrl(`../../../${data.imageURL}`)
},[data])



  return(
   <div className='product-card' tabIndex={0}>
       <div style={{height:'80px'}} >
       <h3 className='font-weight-bold mid-heading' >{data.name}</h3>
       </div>
       
       <div  className='p-card'>
           <img className='p-img mr-1' src={imageurl} alt='' aria-describedby={`${data.id}`}/>
           <div className='p-desc'>
           <div  className='sidebar text-ellipses p-3' id={`${data.id}`}>
            {data.description}
           </div>
           <button className='btn btn-primary btn-block mt-1 d-view' onClick={()=>addItemToCard(data,'add')}>Buy Now @ Rs.{data.price}</button>
           </div>
       </div>
       <button className='btn btn-primary btn-block mt-1 m-view' onClick={()=>addItemToCard(data,'add')}>Buy Now @ Rs.{data.price}</button>
   </div>
    )
}

export default ProductCard