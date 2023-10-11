import axios from "axios";
import React, { useEffect, useState } from 'react'


function Users() {
    const [users,setUsers]=useState([])
    const [loading,setLoading]=useState(true);
    const getUser= async()=>{
      try{
        const response = await axios.get("http://localhost:8000/api/users");
        setUsers(response.data.users)
        setLoading(false);
      }
      catch(error){
        console.error("Error fetching data", error)
        setLoading(false)
      }
        
    }
    useEffect(()=>{
        getUser()
    },[])
if(loading){
  return<div>Loading...</div>
}
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Confirm Password</th>
          </tr>
        </thead>
        <tbody>
            {users.map((item,index)=>{
              
                <tr key={index}>
                <th scope="row">{item.name}</th>
                <td>{item.email}</td>
                <td>{item.password}</td>
               
              </tr>
                
            })}
        </tbody>
        </table>
    </div>
  )
}

export default Users
