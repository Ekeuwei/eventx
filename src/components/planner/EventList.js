import React, { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { useAlert } from "react-alert";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../actions/eventActions";
import { newEvent } from "../../actions/userActions";
import CreateEvent from "./CreateEvent";
import "./style.css"

const EventList = () => {

  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, events } = useSelector(state => state.events);

  useEffect(()=>{
    if(error){
      alert.error(error.message)
    }

    dispatch(getAllEvents())
  },[alert, error, dispatch])

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = (e, data)=> {
        e.preventDefault();

        const formData = new FormData();

        // title: "",
        // category: "",
        // salesEndDate: "",
        // fromDate: "",
        // toDate: "",
        // eventLogoUrl: imgg,
        // eventType: 0,
        // location:[]

        formData.set('file', data.eventLogoUrl)
        // formData.set('title', data.title)
        // formData.set('category', data.category)
        // formData.set('salesEndDate', data.salesEndDate)
        // formData.set('fromDate', data.fromDate)
        // formData.set('toDate', data.toDate)
        // formData.set('eventType', data.eventType)
        // formData.set('location', data.location)


        dispatch(newEvent({details:data, logo:formData}));

    }

  return (
    <Fragment>
      <div className="planner--nav-bar">
        <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
        <h5 class="nav--title">EVENTS</h5>
      </div>
      <div className="planner">
        <button
            type="button"
            class="btn btn-primary col-12 mt-3"
            onClick={handleShow}
          >
            Create Event
          </button>
        <div class="event">
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
        <div class="event">
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
        {/* <div class="col-4 m-3">
          <div class="row event p-2 text-center flex-column">
            <p class="mb-0 pb-3 fw-bold">Entry #4</p>
            <div class="col">
              <h5>TOTAL IN</h5>
              <p class="fw-bolder">435</p>
            </div>
            <div class="col">
              <h5>TOTAL OUT</h5>
              <p class="fw-bolder">30</p>
            </div>
            <button class="btn danger fw-bold" type="button">
              CLOSED
            </button>
            <div
              class="progress danger mx-auto col-6 mt-1"
              style={{ height: "4px" }}
            ></div>
          </div>
        </div>

        <div class="event">
          <div class="container">
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
        </div> */}

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        contentClassName="bg-transparent border-0 mt-5"
      >
        <Modal.Body>
          <CreateEvent handleClose={handleClose} handleSubmit={handleSubmit} />
        </Modal.Body>
      </Modal>
      </div>
    </Fragment>
  );
};

export default EventList;
