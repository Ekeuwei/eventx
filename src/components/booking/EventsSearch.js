import React, { useState } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import Search from "./Search";
import Slider from "./Slider";

const EventsSearch = () => {
  const history = useHistory();
  
  const [avatar, setAvatar] = useState("/images/avatar.jpg");
  const [thumbnail, setThumbnail] = useState("/images/thumbnail.jpeg");
  const [view, setView] = useState("grid");
  const [modalView, setModalView] = useState(false);

  const toggleView = (value) => setView(value);

  const toggleModal = (value) => setModalView(!modalView);

  return (
    <div className="booking">
      <div className="search-result-head">
        <span onClick={()=> history.goBack()}>
          <i class="fa fa-long-arrow-left fa-lg" aria-hidden="true"></i>
        </span>
        <Route render={({history})=> <Search history={history}/>} />
        {/* <div className="input">
          <i class="fa fa-search" aria-hidden="true"></i>
          <input
            type="text"
            value="Music"
            placeholder="What event are you looking for..."
          />
          <i class="fa fa-sliders" aria-hidden="true" onClick={toggleModal}></i>
        </div> */}
      </div>
      <div className="collection-hr">
        <CategoryButtons category="All" icon="check-square" />
        <CategoryButtons category="Music" icon="music" />
        <CategoryButtons category="Art" icon="play-circle" />
        <CategoryButtons category="Workshop" icon="briefcase" />
      </div>
      <div className="search-result-head">
        <h4>978 found</h4>
        <span>
          <i
            class={`fa fa-list ${view === "list" && "txt-primary"}`}
            aria-hidden="true"
            onClick={() => toggleView("list")}
          ></i>
          <i
            class={`fa fa-th-large ${view === "grid" && "txt-primary"}`}
            aria-hidden="true"
            onClick={() => toggleView("grid")}
          ></i>
        </span>
      </div>
      <div className="event-items">
        <ListEventItem
          thumbnail={thumbnail}
          showTag={false}
          view={view}
          venue={"Edepie School Road, Yenagoa Bayelsa State"}
        />
        <ListEventItem
          thumbnail={thumbnail}
          showTag={false}
          view={view}
          venue={"Grand Park, New York"}
        />
        <ListEventItem
          thumbnail={thumbnail}
          showTag={true}
          view={view}
          venue={"Grand Park, New York"}
        />
        <ListEventItem
          thumbnail={thumbnail}
          showTag={false}
          view={view}
          venue={"Grand Park, New York"}
        />
        <ListEventItem
          thumbnail={thumbnail}
          showTag={false}
          view={view}
          venue={"Grand Park, New York"}
        />
        <ListEventItem
          thumbnail={thumbnail}
          showTag={true}
          view={view}
          venue={"Grand Park, New York"}
        />
      </div>

      <div
        className={`booking--modal${modalView ? "" : "-hide"}`}
        onClick={toggleModal}
      >
        <div className="modal--content" onClick={""}>
          <h3 className="modal--header">Filter</h3>
          <div className="home--subhead">
            <h4>Event Category</h4>
            <Link to="#">See All</Link>
          </div>
          <div className="category--item-collection">
            <div class="item">
              <i class="fa fa-check-square" aria-hidden="true"></i>
              <span>All</span>
            </div>
            <div class="item filled">
              <i class="fa fa-check-square" aria-hidden="true"></i>
              <span>Music</span>
            </div>
            <div class="item">
              <i class="fa fa-check-square" aria-hidden="true"></i>
              <span>Workshop</span>
            </div>
            <div class="item">
              <i class="fa fa-check-square" aria-hidden="true"></i>
              <span>Art</span>
            </div>
            <div class="item">
              <i class="fa fa-check-square" aria-hidden="true"></i>
              <span>Food & Drinks</span>
            </div>
            <div class="item">
              <i class="fa fa-check-square" aria-hidden="true"></i>
              <span>Fashion</span>
            </div>
          </div>
          <div className="my-4">
            <h4 className="mb-4">Ticket Price Range</h4>
            <Slider />
          </div>
          <div className="my-4">
            <h4>Location</h4>
            <div className="input">
              <input type="text" placeholder="Gender" />
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </div>
          </div>

          <div className="my-4">
            <h4>Event Loaction Range (km)</h4>
            <Slider />
          </div>
          <div className="booking-btn-group">
            <span className="btn">Reset</span>
            <button type="submit" className="btn">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ListEventItem = ({ thumbnail, showTag, view, venue }) => {
  return (
    <div className={`${view}`}>
      <div className="image-holder">
        <img src={thumbnail} alt="Display_Photo" />
        {showTag && <span className="tag">Free</span>}
      </div>
      <div className="event-details">
        <h4>Art Workshop</h4>
        <p className="txt-primary ellipsis">
          <small>Mon, Dec 24 · 18.00 - 23.00PM</small>
        </p>
        <div className="venue">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <p className="ellipsis">{venue}</p>
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

const CategoryButtons = ({ category, icon }) => {
  return (
    <div className="category-btn">
      <i class={`fa fa-${icon}`} aria-hidden="true"></i>
      <span>{category}</span>
    </div>
  );
};

const SubHeading = ({ title }) => {
  return (
    <div className="home--subhead">
      <h3>{title}</h3>
      <Link to="#">See All</Link>
    </div>
  );
};

export default EventsSearch;
