import React  from 'react'
import CustomCarousel from './Carousel'
import {shallow} from 'enzyme';



it('testing a custom carousel ',()=>{
   const mockDb=[{
       id:1212,
       bannerImageUrl:'',
       bannerImageAlt:'yoyo'
   }]
    expect(shallow(<CustomCarousel data={mockDb}/>)).toMatchSnapshot()

})