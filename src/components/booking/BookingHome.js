import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, useHistory } from "react-router-dom";
import { getAllEvents } from "../../actions/eventActions";
import EventsSearch from "./EventsSearch";
import Search from "./Search";
import SingleEvent from "./SingleEvent";

const BookingHome = ({match}) => {
  const history = useHistory();
  const dispatch = useDispatch()

  const [avatar, setAvatar] = useState("/images/avatar.jpg");
  const [thumbnail, setThumbnail] = useState("/images/thumbnail.jpeg");

  const keyword = match.params.keyword;

  const { isAuthenticated, token, loading, user } = useSelector(state => state.auth);

  const { events } = useSelector(state => state.events)

  const [categories, setCategories] = useState([
    {name: 'All', selected: true,icon: 'check-square'},
    {name: 'Music', selected: false,icon: 'music'},
    {name: 'Art', selected: false, icon: 'play-circle'},
    {name: 'Workshop', selected: false, icon: 'briefcase'}
  ])

  const selectAction = (name)=> {
    setCategories((prev)=> {
      const newCategories = prev.map(value => {
        if(value.name === name){
          value.selected = !value.selected
        }
        return value
      })

      return newCategories
    })
  }

  useEffect(()=>{
    dispatch(getAllEvents())
  },[dispatch])

  return (
    <div className="booking">
      {keyword? <EventsSearch /> :
      <Fragment>
        <div className="home--head">
          {!isAuthenticated? <Fragment>
            <div className="callout">
              <h5 className="mb-0">Want to create event? 
                <i class="fa fa-hand-o-right txt-primary ms-2" aria-hidden="true"></i>
              </h5>
              <button className="btn" onClick={()=>history.push(isAuthenticated?'/events':'/login')}>{isAuthenticated?'Event':'Login'}</button>
            </div>
          </Fragment>:(<Fragment>
            <div className="avatar-holder">
              <div className="avatar">
                <img src={avatar} alt="User" />
              </div>
            </div>

            <div className="body">
              <p>Welcome back!</p>
              <p>
                <strong>Andre Anthony</strong>
              </p>
            </div>
            <div className="callout">
              <button className="btn" onClick={()=>history.push(isAuthenticated?'/events':'/login')}>{isAuthenticated?'Events':'Login'}</button>
            </div>
            {/* <span onClick={()=> history.push('/booking/notification')}>
              <i class="fa fa-bell-o" aria-hidden="true"></i>
            </span> */}
          </Fragment>)}
        </div>
        <div>

          <Route render={({history})=> <Search history={history}/>} />
        </div>
        <SubHeading title={"Featured"} />
        <div className="event-category">
          <EventItem thumbnail={thumbnail} />
          <EventItem thumbnail={thumbnail} />
        </div>
        <SubHeading title={"Popular Events"} />
        <div className="collection-hr">
          {categories.map(category => <CategoryButtons {...category} onclick={selectAction}/>)}
        </div>
        <div className="event-items">
          {events && events.map(event => 
            <SingleEvent key={event.fromDate} {...event} thumbnail={thumbnail} showTag={false} />
          )}
          <SmallEventItem thumbnail={thumbnail} showTag={false} />
          <SmallEventItem thumbnail={thumbnail} showTag={false} />
          <SmallEventItem thumbnail={thumbnail} showTag={true} />
          <SmallEventItem thumbnail={thumbnail} showTag={false} />
          <SmallEventItem thumbnail={thumbnail} showTag={false} />
          <SmallEventItem thumbnail={thumbnail} showTag={true} />
        </div>
      </Fragment>}
    </div>
  );
};

const SmallEventItem = ({ thumbnail, showTag }) => {
  return (
    <div className="grid">
      <div className="image-holder">
        <img src={thumbnail} alt="Display_Photo" />
        {showTag && <span className="tag">Free</span>}
      </div>
      <h5>Art Workshop</h5>
      <p className="txt-primary ellipsis">
        <small>Mon, Dec 24 · 18.00 - 23.00PM</small>
      </p>
      <div className="venue">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
        <p className="ellipsis">Grand Park, New York</p>
        <i class="fa fa-heart-o" aria-hidden="true"></i>
      </div>
    </div>
  );
};


const CategoryButtons = ({ name, icon, selected, onclick }) => {
  return (
    <div className={`category-btn ${selected && 'filled'}`} onClick={()=>onclick(name)}>
      <i class={`fa fa-${icon}`} aria-hidden="true"></i>
      <span>{name}</span>
    </div>
  );
};

const SubHeading = ({ title }) => {
  return (
    <div className="home--subhead">
      <h3>{title}</h3>
      <Link to="/booking/search/all">See All</Link>
    </div>
  );
};

const EventItem = ({ thumbnail }) => {
  return (
    <div className="event-item">
      <img src={thumbnail} alt="Event Title" />
      <h3>National Music Festival</h3>
      <p className="txt-primary">Mon, Dec 24 · 18.00 - 23.00PM</p>
      <div className="venue">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
        <p>Grand Park, New York</p>
        <i class="fa fa-heart-o" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default BookingHome;
