import React from "react";
import { Fragment } from "react";

const NoEvent = () => {
  return (
    <Fragment>
      <section class="row flex-column h-100">
        <div class="col d-flex justify-content-center align-items-end">
          <div class="text-center">
            <img
              src="./images/noevent.png"
              class="col-6 mx-auto d-block"
              alt=""
            />
            <h3>NO EVENTS YET</h3>
          </div>
        </div>
        <div class="col d-flex justify-content-center align-items-center">
          <button type="button" class="btn btn-primary col-12 mt-3">
            Create Event
          </button>
        </div>
      </section>
    </Fragment>
  );
};

export default NoEvent;
