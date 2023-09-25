import React,{useState} from "react";

function ContactUs() {
  const [username,setUserName]=useState("")
  const [city,setCity]=useState("")
  const[subject,setSubject]=useState("")

const onSubmit=(e)=>{
  e.preventDefault()
console.log("submit clicked")
}


  return (
    <div className="form-container onSubmit={onSubmit}" >
      <h1 className="text-center">Contact Us </h1>

      <label for="username">Username</label>
      <input type="text" name="username" placeholder="Your name.." />

      <label for="city">City</label>
      <select name="city">
        <option value="lahore">Lahore</option>
        <option value="islamabad">Islamabad</option>
        <option value="sheikhupura">Sheikhupura</option>
      </select>

      <label for="subject">Subject</label>
      <textarea
        name="subject"
        placeholder="Write something.."
        style={{ height: "200px" }}
      ></textarea>
      <button className="btn btn-success" type="submit" name="submit">
        {" "}
        Submit
      </button>
    </div>
  );
}

export default ContactUs;
