import React  from 'react'
import HomePage from './HomePage'
import {shallow} from 'enzyme'


it('testing homepage ',()=>{

    expect(shallow(<HomePage  />)).toMatchSnapshot()

})