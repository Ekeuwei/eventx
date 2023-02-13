import React from "react";
import { Fragment } from "react";

const EventSettings = ({ handleClose }) => {
  return (
    <Fragment>
      <section class="rounded-corner bg-white p-2">
        <div class="container p-2">
          {/* <div class="modal-header">
            <button type="button" class="btn-close"></button>
          </div> */}
          <div class="d-flex align-items-center justify-content-between">
            <button
              type="button"
              class="btn-close ms-auto p-2"
              onClick={handleClose}
            ></button>
          </div>
          <div class="mb-3">
            <h4 class="fw-bold">EVENT SETTINGS</h4>
          </div>
          <div class="mb-3 bg-form ps-2">
            <span class="badge ps-0 text-muted text-uppercase">
              Event title
            </span>
            <input
              type="text"
              class="form-control shadow-none text-dark"
              value="Some event title"
              id="keeperid"
            />
          </div>
          <div class="mb-3 bg-form ps-2">
            <span class="badge ps-0 text-muted text-uppercase">Venue</span>
            <input
              type="text"
              class="form-control shadow-none text-dark"
              value="Some location"
              id="keeperemail"
            />
          </div>
          <div class="d-flex mb-3 column">
            <div class="col-8 my-auto">
              <div class="bg-form">
                <span class="badge ps-0 text-muted text-uppercase">
                  Max participants
                </span>
                <input
                  type="text"
                  class="form-control shadow-none text-dark"
                  value="500"
                  id="keeperemail"
                />
              </div>
            </div>
            <div class="col-2 my-auto text-center">
              <button class="btn btn-circle" type="button">
                +
              </button>
            </div>
            <div class="col-2 my-auto text-center">
              <button class="btn btn-circle" type="button">
                -
              </button>
            </div>
          </div>
          <div class="d-flex mb-3 column">
            <div class="col-8 my-auto">
              <div class="bg-form">
                <span class="badge ps-0 text-muted text-uppercase">
                  Alert point
                </span>
                <input
                  type="text"
                  class="form-control shadow-none text-dark"
                  value="355"
                  id="keeperemail"
                />
              </div>
            </div>
            <div class="col-2 my-auto text-center">
              <button class="btn btn-circle" type="button">
                +
              </button>
            </div>
            <div class="col-2 my-auto text-center">
              <button class="btn btn-circle" type="button">
                -
              </button>
            </div>
          </div>
          <div class="d-flex mb-3 column">
            <div class="col-8 my-auto">
              <div class="bg-form">
                <span class="badge ps-0 text-muted text-uppercase">
                  number of Entries
                </span>
                <input
                  type="text"
                  class="form-control shadow-none text-dark"
                  value="7"
                  id="keeperemail"
                />
              </div>
            </div>
            <div class="col-2 my-auto text-center">
              <button class="btn btn-circle" type="button">
                +
              </button>
            </div>
            <div class="col-2 my-auto text-center">
              <button class="btn btn-circle" type="button">
                -
              </button>
            </div>
          </div>

          <div class="d-grid gap-2 my-4">
            <button class="btn" type="button" onClick={handleClose}>
              SAVE CHANGES
            </button>
          </div>
          <div class="d-grid gap-2 my-4">
            <button class="btn btn-success" type="button">
              Download event statictics
            </button>
          </div>
          <div class="d-grid gap-2 my-4">
            <button class="btn btn-delete" type="button">
              Delete Entery
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default EventSettings;
