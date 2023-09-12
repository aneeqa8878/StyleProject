import React,{useState,useEffect} from 'react'
import { axios } from 'axios';

function Products() {
    
    const [products,setProducts]=useState([])
    const [data,setData]= useState("Arslan")
    const dataFetch=async()=>{
        const response =await axios.get("http://localhost:3000/")
        setProducts(response.data);
    }
    
    console.log(products)
    useEffect(()=>{
        dataFetch();
    },[])

  return (
    <>
           {
      products?.map((item)=>{
        <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src={item.image} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.description}</p>
    <a href="#" class="btn btn-primary">{item.price}</a>
  </div>
</div>
      })
     }

    </>
  )
}

export default Products
