import React,{useState,useEffect} from "react";
import { NavLink,useHistory } from "react-router-dom";
import { fetchcategories } from "../../api/api";

const Sidebar=({category,setCategory})=>{
  const [categories,setCategories]=useState([]);
  useEffect(async()=>{
    const response=await fetchcategories();
    setCategories(response)
},[])

  return (
    <>
   
      <div className="nav flex-column nav-pills sidebar h-100" tabIndex={0} aria-label='categories'>
        {
          categories && categories.map(el=>
            <a
            key={el.id}
            role='button'
            tabIndex='0'
            onClick={()=>setCategory(el.id)}
            className={`nav-link p-3 ${category===el.id?'active':''}`}
            aria-label={el.name}
            
          >
         
            {el.name}
          </a>
            )
        }
    </div>
    </>
  );
}

export default Sidebar;
