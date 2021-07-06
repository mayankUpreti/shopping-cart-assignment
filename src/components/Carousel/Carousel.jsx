import React from 'react'
import {Carousel} from 'react-bootstrap'

const CustomCarousel=({data})=>{

    return(
        <Carousel>
            {
                data && data.map((el,i)=>{
                    return(
                        <Carousel.Item key={el.id}>
                        <img
                          className="d-block w-100"
                          src={el.bannerImageUrl}
                          alt={el.bannerImageAlt}
                        />
                        {/* <Carousel.Caption>
                          <h3>First slide label</h3>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                      </Carousel.Item>
                    )
                })
            }
    
</Carousel>
    )

}


export default CustomCarousel