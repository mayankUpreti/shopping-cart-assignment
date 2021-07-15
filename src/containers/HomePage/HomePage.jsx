import React,{useState,useEffect, useMemo} from 'react'
import CustomCarousel from '../../components/Carousel/Carousel'
import {fetchbanners, fetchcategories} from '../../api/api'
import CategoryCard from '../../components/CategoryCard/CategoryCard'

const HomePage=()=>{

    const [banners,setBanners]=useState([])
    const [categories,setCategories]=useState([]);
    let order=1;
    useEffect(async()=>{
        const data=await fetchbanners();
        setBanners(data);
        const category=await fetchcategories();
        setCategories(category)
    },[])

return(
    <div className='main-body '>
       <CustomCarousel data={banners}/>
       {
           categories && categories.map((el,i)=>{
               if(el.enabled){
                 order++;
                return (<CategoryCard key={el.key} data={el} order={order}/>)
               }
           
            })
          
        }
    
    </div>
)

}

export default HomePage