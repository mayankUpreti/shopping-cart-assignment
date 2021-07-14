import React from 'react'
import { useHistory } from 'react-router'

const CategoryCard=({data,order})=>{
const history=useHistory()
    return(
      <div className={` d-flex ${order%2==0?'flex-row-reverse':'flex-row'} justify-content-around border-bottom my-2 py-3`} >
      <div className=' align-center w-50'>
      <img className='category-image' src={data.imageUrl} alt=''/>
      </div>
        <div className=' align-center flex-column '>
            <h3 className='text-center font-weight-bold'>{data.name}</h3>
            <h5 className='text-center'>{data.description}</h5>
            <button id='product-category' role='button' className='btn btn-primary ' onClick={()=>history.push(`/products`)} >Explore {data.key}</button>
        </div> 
      </div>
    )

}


export default CategoryCard