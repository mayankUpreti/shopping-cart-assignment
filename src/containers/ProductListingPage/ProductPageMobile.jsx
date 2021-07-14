import React ,{useState,useEffect} from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';
import { Accordion, Card } from 'react-bootstrap'
import { fetchcategories } from '../../api/api';

const ProductPageMobile=({products,category,setCategory})=>{
    const [categories,setCategories]=useState([]);

    useEffect(async()=>{
      const response=await fetchcategories();
      setCategories(response)
  },[])

    return(
        <Accordion defaultActiveKey={category} className='w-100 d-view' aria-label='categories' tabIndex={0}>
            {
                categories && categories.map((el,i)=>{
                    return(
                        <Card key={el.id}  style={{border:'none'}} >
                        <Accordion.Toggle tabIndex={0} role='button' className={`sidebar font-weight-bold my-1 ${category===el.id ?'active':''}`}  as={Card.Header} eventKey={el.id} onClick={()=>setCategory(el.id)}>
                         {el.name}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={el.id}>
                        <Card.Body>
                            {
                              products && products.filter(ml=>ml.category==el.id).map(ele=>
                                <ProductCard data={ele} key={ele.id}/>
                                )
                            }
                        </Card.Body>
                        </Accordion.Collapse>
                         </Card>
                    )
                })
            }
    
        </Accordion>
    )
}
export default ProductPageMobile