import React ,{useContext} from 'react'
import CartItems from './CartItems'
import {shallow} from 'enzyme';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {ShoppingContext, ShoppingState} from '../../context/ShoppingContext'
import '@testing-library/jest-dom'
import { addItemToCard, removeItemfromUI } from '../../context/utils';
 

// let wrapper;
//   const  addItemToCard=jest.fn()
//     beforeEach(()=>{
//         const mockDb=[{
//             id:1212,
//             bannerImageUrl:'',
//             bannerImageAlt:'yoyo',
//             name:'horlics',
//             quantity:4
//         }]

//         const mockProps={
//             addItemToCard:addItemToCard,
//             data:mockDb,
//             removeItemfromUI:jest.fn()
//       }
//         wrapper=shallow(<CartItems {...mockProps}/>)
    
//     })
    

// it('testing a custom carousel ',()=>{
//     expect(wrapper).toMatchSnapshot()
// })

test('triggers path change', () => {
    const mockDb={
        id:1212,
        bannerImageUrl:'',
        bannerImageAlt:'yoyo',
        name:'horlics',
        quantity:4,
        imageUrl:''
    };
    const mockProps={
        addItemToCard:jest.fn(),
        data:mockDb,
        removeItemfromUI:jest.fn()
  }
  const cartitem=[{
    id:1212,
    bannerImageUrl:'',
    bannerImageAlt:'yoyo',
    name:'horlics',
    quantity:4,
    imageUrl:''
    }]
    render(
       <ShoppingContext.Provider value={cartitem,removeItemfromUI,addItemToCard} >
        <CartItems  data={mockDb} {...mockProps}  />
       </ShoppingContext.Provider >
   
      
    );
  //cart-quantity
    const decreasecart = screen.getByTestId('cart-decrease');
    const cartquantity = screen.getByTestId('cart-quantity');
    const increasecart = screen.getByTestId('cart-increase');
    expect(decreasecart).toBeInTheDocument();
    expect(cartquantity.textContent).toBe('4')
    userEvent.click(increasecart);
    userEvent.click(decreasecart);
     expect(cartquantity.textContent).toBe('4')
  });