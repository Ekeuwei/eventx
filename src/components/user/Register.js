import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layout/MetaData";

import {
  register,
  clearErrors,
  savePersonalInfo,
} from "../../actions/userActions";

const Register = ({ history }) => {
  const [user, setUser] = useState({
    fullNames: "",
    email: "",
    phone: "",
    state: "",
    password: "",
  });

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "/images/default_avatar.jpg"
  );

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, history]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(register(user));
  };

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <Fragment>
      <MetaData title={"Register User"} />

      <section>
        <div class="col-10 mt-5 mx-auto">
          <form onSubmit={submitHandler}>
            <img
              src="./images/logo_signup.png"
              class="col-6 rounded mx-auto d-block mb-3"
              alt="..."
            />
            <h3 class="mb-5 fw-bold text-uppercase text-center">
              Create Your Account
            </h3>
            <div class="mb-3 bg-form ps-2">
              <span class="badge ps-0 text-muted">FULL NAMES</span>
              <input
                type="text"
                class="form-control shadow-none text-dark"
                id="name"
                name="name"
                onChange={onChange}
                value={user.name}
              />
            </div>
            <div class="mb-3 bg-form ps-2">
              <span class="badge ps-0 text-muted">PHONE NUMBER</span>
              <input
                type="tel"
                class="form-control shadow-none text-dark"
                id="phone"
                name="phone"
                onChange={onChange}
                value={user.phone}
              />
            </div>
            <div class="mb-3 bg-form ps-2">
              <span class="badge ps-0 text-muted">STATE</span>
              <input
                type="text"
                class="form-control shadow-none text-dark"
                id="state"
                name="state"
                onChange={onChange}
                value={user.state}
              />
            </div>
            <div class="mb-3 bg-form ps-2">
              <span class="badge ps-0 text-muted">EMAIL</span>
              <input
                type="text"
                class="form-control shadow-none text-dark"
                id="email"
                name="email"
                onChange={onChange}
                value={user.email}
              />
            </div>
            <div class="mb-3 bg-form ps-2">
              <span class="badge ps-0 text-muted">PASSWORD</span>
              <input
                type="password"
                class="form-control shadow-none text-dark fw-bold"
                style={{ "letter-spacing": ".7rem" }}
                id="password"
                name="password"
                onChange={onChange}
                value={user.password}
              />
            </div>
            <div class="d-grid gap-2 mt-5">
              <button class="btn btn-primary" type="submit">
                Sign up
              </button>
              <button class="btn btn-outline-secondary" type="button" onClick={()=>history.push('/login')}>
                Already have an account
              </button>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Register;
