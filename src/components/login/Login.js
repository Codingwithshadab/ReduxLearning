import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [agreement, setAgreement] = useState(false);
  const [submit, setSubmit] = useState(false);

  const [login, setLogin] = useState({
    name: "",
    password: "",
  });
  const handleChange = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    const cloneData = { ...login };
    cloneData[name] = val;
    setLogin(cloneData);
    setAgreement(e.target.checked);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(login));
    localStorage.setItem("isLogin", true);
    setSubmit(true)
    if (login.name && login.password) {
      navigate("/");
    }
  };
  return (
    <>
      <section className="loginSec sectionSpace">
        <div className="container">
          <div className="loginCard">
            <div className="sectionTitle">
              <h1 className="text-primary text-center">Login</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="form-control"
                  autoComplete="off"
                  name="name"
                  onChange={handleChange}
                />
                {submit && !login.name ? (
                  <span className="text-danger">Please enter your name</span>
                ) : null}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="name">Password</label>
                <input
                  type="password"
                  placeholder="password"
                  className="form-control"
                  autoComplete="off"
                  name="password"
                  onChange={handleChange}
                />
                {submit && !login.name ? (
                  <span className="text-danger">Please enter your password</span>
                ) : null}
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="agreement"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Accept all the Agreement
                </label>
              </div>

              <div className="form-group mb-3">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
