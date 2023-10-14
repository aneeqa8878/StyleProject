import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Quries() {
  const [queries, setQueries] = useState([]);
  const getQuery = async () => {
    const response = await axios.get("http://localhost:8000/users");
    setQueries(response.data.users);
  };

  useEffect(() => {
    getQuery();
  }, []);
  const deleteData=async(id)=>{
    try{
      await axios.deleteData(`http://localhost:8000/user/${id}`)
      window.location.reload(true)
    }
    catch(error){
      console.error("Error deleting data:",error)
    }
  }
  const updateData=async(id)=>{
    try{
     
      await axios.update(`http://localhost:8000/user/${id}`)
      {console.log(id)}
      window.location.reload(true)
    }
    catch(error){
      console.error("Error deleting data:",error)
    }
  }
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Subject</th>
            <th scope="col">Message</th>
            <th scope="col">Delete User</th>
            <th scope="col">Update User</th>
          </tr>
        </thead>
        <tbody>
          {queries.map((item) => {
            return (
              <tr>
                <th scope="row">{item.name}</th>
                <td>{item.email}</td>
                <td>{item.subject}</td>
                <td>{item.message}</td>
                <td>
                  <button className="ml-4" onClick={()=>deleteData(item._id)}>Delete</button>
                </td>
                <td> 
                  <Link to={`${item._id}`}>Update</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Quries;
