import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    const user = await axios.post("http://localhost:8000/users", login);
    setLogin({
      email: "",
      password: "",
    });
  };
  const handleChange = (e) => {
    setLogin((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const { email, password } = login;

  return (
    <div>
      <section class="vh-100 gradient-custom">
        <div class="container py-1 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                class="card bg-dark text-white"
                style={{ borderradius: "1rem;" }}
              >
                <form onSubmit={onSubmit}>
                  <div class="card-body p-2">
                    <div class="mb-md-5 mt-md-4 pb-1 ">
                      <h2 class="fw-bold mb-2 text-uppercase text-center">
                        Login
                      </h2>
                      <p class="text-white-50 mb-5 text-center">
                        Please enter your login and password!
                      </p>

                      <div class="form-outline form-white mb-4">
                        <label class="form-label">Email</label>
                        <input
                          type="text"
                          name="email"
                          value={email}
                          onChange={handleChange}
                          class="form-control form-control-lg"
                        />
                      </div>

                      <div class="form-outline form-white mb-2">
                        <label class="form-label">Password</label>
                        <input
                          type="text"
                          name="password"
                          value={password}
                          onChange={handleChange}
                          class="form-control form-control-lg"
                        />
                      </div>

                      <p class="small mb-5 pb-lg-2">
                        <a class="text-white-50" href="#!">
                          Forgot password?
                        </a>
                      </p>

                      <button
                        class="btn btn-outline-light btn-lg text-center"
                        
                      >
                        Login
                      </button>
                    </div>

                    <div>
                      <p class="mb-0 text-center">
                        Don't have an account?{" "}
                        <a href="#!" class="text-white-50 fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
