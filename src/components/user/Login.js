import React, { Fragment, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";

import { login, clearErrors } from "../../actions/userActions";

const Login = ({ history, location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (isAuthenticated) {
      history.push(redirect);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <Fragment>
      <MetaData title={"Login"} />

      <section>
        <div class="col-10 mt-5 mx-auto">
          <img
            src="./images/logo_signin.png"
            class="col-6 rounded mx-auto d-block mb-3"
            alt="..."
          />
          <h3 class="mb-5 fw-bold text-uppercase text-center">
            Welcome Back
          </h3>
          <form onSubmit={submitHandler}>
            <div class="mb-3 bg-form ps-2">
              <span class="badge ps-0 text-muted">EMAIL</span>
              <input
                type="text"
                class="form-control shadow-none text-dark"
                id="email"
                value={email}
                onChange={e=> setEmail(e.target.value)}
              />
            </div>
            <div class="mb-3 bg-form ps-2">
              <span class="badge ps-0 text-muted">PASSWORD</span>
              <input
                type="password"
                class="form-control shadow-none text-dark fw-bold"
                style={{ "letter-spacing": "0.7rem" }}
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div class="d-grid gap-2 mt-5">
              <button disabled={loading} class="btn btn-primary" type="submit">
                {loading? 'loading...':'Sign in'}
              </button>
              <Link
                to="/register"
                class="btn btn-outline-secondary"
                type="button"
              >
                Create New Account
              </Link>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
