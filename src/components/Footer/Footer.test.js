import React  from 'react'
import Footer from './Footer'
import {shallow} from 'enzyme';



it('testing a custom Footer ',()=>{
    expect(shallow(<Footer/>)).toMatchSnapshot()

})