import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { Modal } from "react-bootstrap";
import Config from "./Config";
import EventSettings from "./EventSettings";

const EventDetails = () => {
  const [show, setShow] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setShowSettings(false);
  };
  const handleShowSettings = () => {
    setShowSettings(true);
    setShow(true);
  };
  return (
    <Fragment>
      <section>
        <div className="row">
          <h3 class="col-7 fw-bold">EVENT STATISTICS</h3>
          <div className="col text-end me-3" onClick={handleShowSettings}>
            <i class="fa fa-sliders fa-lg" aria-hidden="true"></i>
          </div>
        </div>
        {/* <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <EventItem />
              </div>
              <div class="flip-card-back">
                <EventDetailsItem />
              </div>
            </div>
          </div> */}
        <EventItem handleShow={handleShow} />
        <EventItem handleShow={handleShow} />
        <EventItem handleShow={handleShow} />
        <EventItem handleShow={handleShow} />
      </section>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        contentClassName="bg-transparent border-0 mt-5"
      >
        <Modal.Body>
          {showSettings ? (
            <EventSettings handleClose={handleClose} />
          ) : (
            <Config handleClose={handleClose} />
          )}
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

const EventItem = ({ handleShow }) => {
  return (
    <div class="event">
      <div class="container" onClick={handleShow}>
        <p class="ms-2 mb-0 py-3 fw-bold">Event Title</p>
        <div class="row mx-2">
          <div class="col">
            <p class="mb-1">CURRENT IN</p>
          </div>
          <div class="col text-end">
            <p class="mb-1">355/500</p>
          </div>
        </div>
        <div
          class="progress mb-3 mx-3 bg-grey rounded-pill"
          style={{ height: "1em" }}
        >
          <div
            class="progress-bar w-75 bg-progress"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div class="row text-center">
          <div class="col">
            <h5>TOTAL IN</h5>
            <p class="fw-bolder">500</p>
          </div>
          <div class="col">
            <h5>TOTAL OUT</h5>
            <p class="fw-bolder">500</p>
          </div>
          <div class="col">
            <h5>OPENED ENTRIES</h5>
            <p class="fw-bolder">1</p>
          </div>
          <div class="col">
            <h5>CLOSED ENTRIES</h5>
            <p class="fw-bolder">3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventDetailsItem = () => {
  return (
    <div className="event">
      <div class="container">
        <p class="ms-2 mb-0 py-3 fw-bold">Event Title</p>
        <div class="row text-center">
          <div class="col">
            <h5>ENTRIES</h5>
            <p class="fw-bolder">5</p>
          </div>
          <div class="col">
            <h5>MAX PARTICIPANTS</h5>
            <p class="fw-bolder">500</p>
          </div>
          <div class="col">
            <h5>TOTAL PARTICIPANTS</h5>
            <p class="fw-bolder">355</p>
          </div>
        </div>
        <div class="row justify-content-between mx-2 pb-2">
          <button class="col-4 btn btn-primary" type="button">
            TOGGLE ALL
          </button>
          <button class="col-4 btn btn-primary" type="button">
            SEE MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
