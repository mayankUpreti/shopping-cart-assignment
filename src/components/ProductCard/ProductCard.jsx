import React, { useState,useEffect } from 'react'

const ProductCard=({data,addItemToCard})=>{

const [imageurl,setImageUrl]=useState('')

useEffect(()=>{
    setImageUrl(`../../../${data.imageURL}`)
},[data])



  return(
   <div className='product-card'>
       <div style={{height:'100px'}}>
       <h4 className='font-weight-bold'>{data.name}</h4>
       </div>
       
       <div  className='d-flex flex-column'>
           <img style={{height:'250px'}} src={imageurl} alt={data.name}/>
           <div style={{height:'200px'}} className='nav-cart text-ellipses'>
            {data.description}
           </div>
       </div>
       <button className='btn btn-primary btn-block my-1' onClick={()=>addItemToCard(data,'add')}>Buy Now @ Rs.{data.price}</button>
   </div>
    )
}

export default ProductCard