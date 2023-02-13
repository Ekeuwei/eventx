import React, { useState } from "react";
import "./style.css";

const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="booking">
      <div className="booking-login-title">
        <img src="./images/eventlogo.png" alt="Logo" />
        <h3>Login to Your Account</h3>
      </div>
      <form action="">
        <div className="input">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <input type="text" placeholder="email@example.com" />
        </div>
        <div className="input">
          <i class="fa fa-lock" aria-hidden="true"></i>
          <input type={show ? "text" : "password"} placeholder="password" />
          <i
            class={`fa fa-eye${show ? "" : "-slash"}`}
            aria-hidden="true"
            onClick={() => setShow((prevShow) => !prevShow)}
          ></i>
        </div>
        <div className="booking--checkbox">
          <input type="checkbox" id="checkbox" />
          <span htmlFor="checkbox">Remember me</span>
        </div>
        <button className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
