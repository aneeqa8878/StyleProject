
import axios from 'axios'
import React, { useEffect, useState } from 'react'


function DbProducts() {
    const [dbproducts,setDbProducts]=useState([])
    const [loading,setLoading]=useState(true)
    const getdbProducts= async()=>{
      try{
        const response= await axios.get("http://localhost:8000/api/product")
        setDbProducts(response.data.products)
        setLoading(false)
      }
      catch(error){
console.error("Error fetching products data",error)
setLoading(false)
      }
       
    }
    useEffect(()=>{
        getdbProducts()
    },[])
   if(loading){
    return <div>Loading...</div>
   }
  return (
    <div>
         <table class="table">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Article</th>
            <th scope="col">Discount %</th>
            <th scope="col">Original Price</th>
            <th scope="col">Discount Price</th>
          </tr>
        </thead>
        <tbody>
            {dbproducts.map((item)=>{
                
                <tr>
                <th scope="row">{item.productName}</th>
                <th scope="row">{item.articleName}</th>
                <td>{item.discountedPercen}</td>
                <td>{item.originalPrice}</td>
                <td>{item. discountedPrice}</td>
               
              </tr>
                
            })}
        </tbody>
        </table>
    </div>
  )
}

export default DbProducts
