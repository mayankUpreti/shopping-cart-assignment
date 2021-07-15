import React  from 'react'
import CartItems from './CartItems'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'

test('testing cart items change', () => {
    const mockDb={
        id:1212,
        bannerImageUrl:'',
        bannerImageAlt:'yoyo',
        name:'horlics',
        quantity:4,
        imageUrl:''
    };

  const cartitem=[{
    id:1212,
    bannerImageUrl:'',
    bannerImageAlt:'yoyo',
    name:'horlics',
    quantity:4,
    imageUrl:''
    }];

const setCartItem=jest.fn();

    const mockProps={
      cartitem:cartitem,
      data:mockDb,
      setCartItem:setCartItem
}
    render(
        <CartItems  data={mockDb} {...mockProps}  />
    );
  //cart-quantity
    const decreasecart = screen.getByTestId('cart-decrease');
    const cartquantity = screen.getByTestId('cart-quantity');
    const increasecart = screen.getByTestId('cart-increase');
    expect(decreasecart).toBeInTheDocument();
    userEvent.click(increasecart);
    expect(cartquantity.textContent).toBe('4')

  });