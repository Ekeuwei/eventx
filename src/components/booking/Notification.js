import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

const Notification = () => {
  const history = useHistory()
  const [content] = useState(true);
  return (
    <Fragment>

      <div className="notification-nav-bar">
        <span onClick={()=> history.goBack()}>
          <i class="fa fa-long-arrow-left fa-lg" aria-hidden="true"></i>
        </span>
        <h3>Notification</h3>
        <span>
          {/* <i class="fa fa-ellipsis-h fa-lg" aria-hidden="true"></i> */}
        </span>
      </div>
      {content ? (
        <>
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
        </>
      ) : (
        <BlankNotification />
      )}
    </Fragment>
  );
};

const NotificationItem = () => {
  return (
    <div className="notification-item">
      <div className="notification-item-head">
        <span className="icon">
          <i class="fa fa-calendar fa-lg" aria-hidden="true"></i>
        </span>
        <div className="notification-item-body">
          <h4>Booking Successfull!</h4>
          <p>20 Dec. 2022 | 20:49PM</p>
        </div>
        <span className="label">New</span>
      </div>
      <p>
        You have successfully booked the Art Workshops. The event will be held
        on Sunday, December 22, 2022, 13.00 - 14.00 PM. Don't forget to activate
        your reminder. Enjoy the event!
      </p>
    </div>
  );
};

const BlankNotification = () => {
  const [blank] = useState("/images/blank.png");
  return (
    <Fragment>
      <div className="notification-body">
        <img src={blank} alt="Blank_Document" />
        <h4>Empty</h4>
        <p>You dont't have any notification at this moment</p>
      </div>
    </Fragment>
  );
};

export default Notification;
