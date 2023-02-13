import React, { useState } from "react";
import "./style.css";

const AccountSetup = () => {
  const [avatar, setAvatar] = useState("/images/default_avatar.png");
  return (
    <div className="">
      <form action="">
        <div className="booking--avatar">
          <img src={avatar} alt="Avatar" />
          <span>
            <i class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i>
          </span>
        </div>
        <div className="input">
          <input type="text" placeholder="Full Name" />
        </div>
        <div className="input">
          <input type="text" placeholder="Nickname" />
        </div>
        <div className="input">
          <input type="text" placeholder="Date of Birth" />
          <i class="fa fa-calendar" aria-hidden="true"></i>
        </div>
        <div className="input">
          <input type="text" placeholder="Email" />
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </div>
        <div className="input">
          <i class="fa fa-flag" aria-hidden="true"></i>
          <input type="text" placeholder="+1000 000 000" />
        </div>
        <div className="input">
          <input type="text" placeholder="Gender" />
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>
      </form>
    </div>
  );
};

export default AccountSetup;
