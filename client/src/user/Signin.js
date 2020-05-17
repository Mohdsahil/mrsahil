import React, { useState } from "react";
import Layout from "../core/Layout";
import { Redirect } from "react-router-dom";

import { signin, authenticate, isAuthenticated } from "../auth/helper";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });
  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const loadingMessage = () => {
    return loading && <div className="alert alert-info">Loading...</div>;
  };
  const errorMessage = () => {
    return error && <div className="alert-alert-danger">Error: {error}</div>;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({ ...values, didRedirect: true });
        });
      }
    });
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="admin/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const singnInform = () => {
    return (
      <div className="row text-center">
        <div className="col-md-6 ml-auto mr-auto text-left">
          <form>
            <div className="form-group">
              <label htmlFor="email" className="text-light">
                Email
              </label>
              <input
                type="email"
                onChange={handleChange("email")}
                value={email}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="text-light">
                Password
              </label>
              <input
                type="password"
                onChange={handleChange("password")}
                value={password}
                className="form-control"
              />
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Layout title="Sign In Page" description="Admin Sign In Page">
      {loadingMessage()}
      {errorMessage()}
      {singnInform()}
      {performRedirect()}
      <p className="text-white text-center">{JSON.stringify(values)}</p>
    </Layout>
  );
};

export default Signin;
