import axios from "axios";
import {
  ALL_EVENTS_FAIL,
  ALL_EVENTS_REQUEST,
  ALL_EVENTS_SUCCESS,
} from "../constants/eventsConstants";

// const allEventData = require('./sample/allEvents.json');
import { BASE_URI } from "../App";

export const getAllEvents =
  (keyword = "", currentPage = 1, price, category, ratings = 0) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_EVENTS_REQUEST });

      let link = `${BASE_URI}/event/getFutureEvents`;
      if (category) {
        link = `${BASE_URI}/event/getFutureEventsByCategory?category=${category}`;
      }

      const {data} = await axios.get(link)

      dispatch({
        type: ALL_EVENTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_EVENTS_FAIL,
        payload: error,
      });
    }
  };
