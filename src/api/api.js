const base_url='http://localhost:5000'


export const fetchbanners=async()=>{

    const response=await fetch(`${base_url}/banners`);
    const banners=await response.json();
   return banners
}

export const fetchcategories=async()=>{

    const response=await fetch(`${base_url}/categories`);
    const categories=await response.json();
   return categories
}

//http://localhost:3000/products

export const fetchproducts=async()=>{

    const response=await fetch(`${base_url}/products`);
    const products=await response.json();
   return products
}

export const addToCart=async(payload)=>{
    const response=await fetch(`${base_url}/addToCart`,{
        method:'POST',
        body: JSON.stringify(payload)
    });
    const products=await response.json();
   return products
}