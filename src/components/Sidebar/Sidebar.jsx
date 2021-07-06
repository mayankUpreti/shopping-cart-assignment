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
   
      <div className="nav flex-column nav-pills sidebar">
        {
          categories && categories.map(el=>
            <div
            key={el.id}
            onClick={()=>setCategory(el.id)}
            className={`nav-link p-3 ${category===el.id?'active':''}`}
            // activeClassName="active"
          >
         
            {el.name}
          </div>
            )
        }
    </div>
    </>
  );
}

export default Sidebar;
