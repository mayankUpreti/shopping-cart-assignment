import React  from 'react'
import ProductCard from './ProductCard'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ShoppingContext } from '../../context/ShoppingContext';
import '@testing-library/jest-dom'

it('testing a product card ',()=>{
   const mockDb={
    id:1212,
    bannerImageUrl:'',
    bannerImageAlt:'yoyo',
    name:'horlics',
    imageUrl:''
   };
   let cartitem=[{id:1212,
    bannerImageUrl:'',
    bannerImageAlt:'yoyo',
    name:'horlics',
    quantity:4,
    imageUrl:''}]
      render( 
    <ShoppingContext.Provider value={cartitem} >
   <ProductCard  data={mockDb} />
   </ShoppingContext.Provider >
 );
 const addcart = screen.getByTestId('add-item');
 const additemcart = screen.getByTestId('add-item-cart');
 userEvent.click(addcart);
 userEvent.click(additemcart);
 expect(addcart).toBeInTheDocument();
 expect(additemcart).toBeInTheDocument();
})
