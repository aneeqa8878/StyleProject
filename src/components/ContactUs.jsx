import React, { useState } from "react";

function ContactUs() {
  const [data, setData] = useState({
    username: "",
    city: "",
    subject: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.username]: e.target.value,
    }));
  };
  const { username, city, subject } = data;

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <h1 className="text-center">Contact Us </h1>

        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Your name.."
        />

        <label for="city">City</label>

        <select name="city" value={city} onChange={handleChange}>
          <option value="lahore">Lahore</option>
          <option value="islamabad">Islamabad</option>
          <option value="sheikhupura">Sheikhupura</option>
        </select>

        <label for="subject">Subject</label>
        <textarea
          name="subject"
          value={subject}
          onChange={handleChange}
          placeholder="Write something.."
          style={{ height: "200px" }}
        ></textarea>
        <button className="btn btn-success"> Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
