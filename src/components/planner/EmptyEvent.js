import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import EventSettings from "./EventSettings";

const EmptyEvent = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <section class="main-content">
      <div class="row flex-column h-100">
        <div class="col d-flex justify-content-center align-items-end">
          <div class="text-center">
            <img src="./img/noevent.png" class="col-6 mx-auto d-block" alt="" />
            <h3>NO EVENTS YET</h3>
          </div>
        </div>
        <div class="col d-flex justify-content-center align-items-center">
          <button
            type="button"
            class="btn btn-primary col-12 mt-3"
            onClick={handleShow}
          >
            Create Event
          </button>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        contentClassName="bg-transparent border-0 mt-5"
      >
        <Modal.Body>
          <EventSettings handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default EmptyEvent;
