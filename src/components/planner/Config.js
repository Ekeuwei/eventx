import React from "react";

const Config = ({ handleClose }) => {
  return (
    <section class="main-content">
      <div class="rounded-corner bg-white p-2">
        <div class="container p-2">
          {/* <!-- <div class="modal-header">
            <button type="button" class="btn-close"></button>
          </div> --> */}
          <div class="d-flex align-items-center justify-content-between">
            <button
              type="button"
              class="btn-close ms-auto p-2"
              onClick={handleClose}
            ></button>
          </div>
          <div class="text-center mb-3">
            <h4 class="fs-5 mx-auto">ENTRY CONFIG</h4>
          </div>
          <div class="mb-3 bg-form ps-2">
            <span class="badge ps-0 text-muted text-uppercase">
              Door keeper’s id
            </span>
            <input
              type="text"
              class="form-control shadow-none text-dark"
              value="Door keeper’s ID/name"
              id="keeperid"
            />
          </div>
          <div class="mb-3 bg-form ps-2">
            <span class="badge ps-0 text-muted text-uppercase">
              door keeper’s email
            </span>
            <input
              type="text"
              class="form-control shadow-none text-dark"
              value="Some email address"
              id="keeperemail"
            />
          </div>
          <div class="d-grid gap-2 my-4">
            <button class="btn" type="button">
              Add Keeper
            </button>
          </div>
          <div class="my-3">
            <h4 class="fs-5 mx-auto">KEEPER(S)</h4>
          </div>
          <div class="mb-3 bg-form-outline ps-2">
            <div class="row">
              <div class="col-10">
                <span class="badge ps-0 text-muted text-uppercase">
                  door keeper’s email
                </span>
                <p class="mb-0">Some email address</p>
              </div>
              <div class="col-2 text-center my-auto">
                <i class="fa fa-trash fa-lg text-danger" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div class="mb-3 bg-form-outline ps-2">
            <div class="row">
              <div class="col-10">
                <span class="badge ps-0 text-muted text-uppercase">
                  door keeper’s email
                </span>
                <p class="mb-0">Some email address</p>
              </div>
              <div class="col-2 text-center my-auto">
                <i class="fa fa-trash fa-lg text-danger" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div class="mb-3 bg-form-outline ps-2">
            <div class="row">
              <div class="col-10">
                <span class="badge ps-0 text-muted text-uppercase">
                  door keeper’s email
                </span>
                <p class="mb-0">Some email address</p>
              </div>
              <div class="col-2 text-center my-auto">
                <i class="fa fa-trash fa-lg text-danger" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div class="d-grid gap-2 my-4">
            <button class="btn btn-delete" type="button">
              Delete Entery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Config;
