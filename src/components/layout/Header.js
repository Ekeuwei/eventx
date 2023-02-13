import React, { Fragment } from "react";
import { Link, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

import Search from "./Search";
import { logout } from "../../actions/userActions";

import "../../App.css";
import { useState } from "react";

const Header = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const { user, loading } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
    setShow(() => !show);
    setLoggedIn(() => !loggedIn);
    // alert.success("Logged out successfully.");
  };

  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg navbar-light head-bg">
        <div class="container-fluid">
          <button
            class={`navbar-toggler ${show ? "collapsed" : ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={show}
            aria-label="Toggle navigation"
            onClick={() => setShow(() => !show)}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link
            to="#"
            class="navbar-brand text-uppercase ms-3 me-auto text-white"
          >
            App Title
          </Link>
          <div
            class={`collapse navbar-collapse mt-4 mt-lg-0 ${
              show ? "" : "show"
            }`}
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto me-lg-0 ms-lg-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link btn bg-white"
                  aria-current="page"
                  onClick={() => setShow(() => !show)}
                  to="/events"
                >
                  Events
                </Link>
                <Link
                  class="nav-link btn bg-white mt-1"
                  aria-current="page"
                  onClick={() => setShow(() => !show)}
                  to="/stats"
                >
                  Event Statistics
                </Link>
                <Link
                  class="nav-link btn bg-white mt-1"
                  aria-current="page"
                  to={loggedIn ? "/" : "/login"}
                  onClick={logoutHandler}
                >
                  {loggedIn ? "Log out" : "Sign in"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
