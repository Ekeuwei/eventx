import React, { Fragment, useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // Import the default design of the slider

import MetaData from "./layout/MetaData";

import { useDispatch, useSelector } from "react-redux";
import Loader from "./layout/Loader";
import { useAlert } from "react-alert";
import SearchComponent from "./SearchComponent";
import Search from "./layout/Search";
import { Route } from "react-router-dom";
import EventList from "./planner/EventList";
import NoEvent from "./planner/NoEvent";
import EventDetails from "./planner/EventDetails";
import EventSettings from "./planner/EventSettings";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Home = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 100000]);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);



  const alert = useAlert();

  const dispatch = useDispatch();

  const {
    loading,
    artisans,
    error,
    artisansCount,
    resPerPage,
    filteredArtisansCount,
  } = useSelector((state) => state.artisans);

  const keyword = match.params.keyword;

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    // dispatch(getArtisans(keyword, currentPage, price, category, rating))
  }, [dispatch, alert, error, keyword, currentPage, category, price, rating]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  let count = artisansCount;
  if (keyword) {
    count = filteredArtisansCount;
  }

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Event Planner App"} />
          {keyword ? (
            <SearchComponent
              keyword={keyword}
              artisans={artisans}
              count={artisansCount}
            />
          ) : (
            <Fragment />
            // <EventSettings />
            // <EventDetails />
            // <NoEvent />
            // <EventList />
          )}

          {resPerPage <= count && (
            <div className="d-flex justify-content-center mt-5">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resPerPage}
                totalItemsCount={artisansCount}
                onChange={setCurrentPageNo}
                nextPageText={"Next"}
                prevPageText={"Prev"}
                firstPageText={"First"}
                lastPageText={"Last"}
                itemClass="page-items"
                linkClass="page-link"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
