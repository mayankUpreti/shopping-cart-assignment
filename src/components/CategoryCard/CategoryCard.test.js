import React  from 'react'
import CategoryCard from './CategoryCard'
import  {shallow} from 'enzyme';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom'
it('testing a custom carousel ',()=>{
   const mockDb=[{
       id:1212,
       key:'ssdsd',
       name:'Tide',
       description:'a surf is a exccel',
       bannerImageUrl:'',
       bannerImageAlt:'yoyo'
   }]
    expect(shallow(<CategoryCard data={mockDb} order={1}/>)).toMatchSnapshot()

})


test('triggers path change', () => {
    const history = createMemoryHistory();
    const mockDb=[{
        id:1212,
        key:'ssdsd',
        name:'Tide',
        description:'a surf is a exccel',
        bannerImageUrl:'',
        bannerImageAlt:'yoyo'
    }] 
    render(
      <Router history={history}>
        <CategoryCard data={mockDb} order={1}/>
      </Router>
    );
  
    const productcategory = screen.getByRole('button');
    expect(productcategory).toBeInTheDocument();
  
    userEvent.click(productcategory);
    expect(history.location.pathname).toBe('/products');
  });