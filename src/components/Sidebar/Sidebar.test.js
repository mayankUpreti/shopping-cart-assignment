import React  from 'react'
import Sidebar from './Sidebar'
import {shallow} from 'enzyme';

it('testing a custom Sidebar ',()=>{
    const category='Beverages';
    const setCategory=jest.fn()
    expect(shallow(<Sidebar category={category} setCategory={setCategory}/>)).toMatchSnapshot()
})