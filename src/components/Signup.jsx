import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const signup = await axios.post("http://localhost:8000/", data);
    setData({
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };
  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const { name, email, password, confirmpassword } = data;
  return (
    <div>
      <section
        class="vh-100 bg-image"
        style={{
          backgroundimage:
            "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');",
        }}
      >
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100 mt-4">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" style={{ color: "black" }}>
                  <div class="card-body p-2 ml-3">
                    <h2 class="text-uppercase text-center mb-2">
                      Create an account
                    </h2>

                    <form onSubmit={onSubmit}>
                      <div class="form-outline mb-2 ml-1">
                        <label class="name">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={name}
                          onChange={handleChange}
                        />
                      </div>

                      <div class="form-outline mb-2">
                        <label class="email">Your Email</label>
                        <input
                          type="text"
                          name="email"
                          value={email}
                          onChange={handleChange}
                        />
                      </div>

                      <div class="form-outline mb-2">
                        <label class="password">Password</label>
                        <input
                          type="text"
                          name="password"
                          value={password}
                          onChange={handleChange}
                        />
                      </div>

                      <div class="form-outline mb-2">
                        <label class="confirmpassword">
                          Repeat your password
                        </label>
                        <input
                          type="text"
                          name="confirmpassword"
                          value={confirmpassword}
                          onChange={handleChange}
                        />
                      </div>

                      <div class="">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <label class="form-check-label mx-1 ">
                          I agree all statements in{" "}
                          <a href="#!" class="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div class="d-flex justify-content-center">
                        <button className="button2">Register</button>
                      </div>
                      <div>
                        {" "}
                        <p class="text-center text-muted mt-2 mb-1">
                          Have already an account?{" "}
                          <Link
                            class="fw-bold text-body"
                            to={`/successregister`}
                          >
                            <u>Login here</u>
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
