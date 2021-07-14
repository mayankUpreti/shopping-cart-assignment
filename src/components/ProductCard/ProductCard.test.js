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
    quantity:4,
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
 expect(addcart).toBeInTheDocument();
 expect(additemcart).toBeInTheDocument();
 userEvent.click(addcart);
 userEvent.click(additemcart);
 console.log(cartitem)

})

// it('testing  button clicks for adding item ',()=>{
//     const mockDb=[{
//         id:1212,
//         key:'ssdsd',
//         name:'Tide',
//         description:'a surf is a exccel',
//         bannerImageUrl:'',
//         bannerImageAlt:'yoyo',
//         imageURL:'/'
//     }]
 
//     const addItemToCard=jest.fn();
//     const wrapper=shallow(<ProductCard data={mockDb} addItemToCard={addItemToCard} />)
//        wrapper.find('[id="add-item"]').simulate('click')
//        expect(addItemToCard).toBeCalled()
//        wrapper.find('[id="add-item-cart"]').simulate('click')
//        expect(addItemToCard).toBeCalled()
//  })
 
