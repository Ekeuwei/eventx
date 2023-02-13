import {
    ALL_EVENTS_FAIL,
  ALL_EVENTS_REQUEST,
  ALL_EVENTS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/eventsConstants";

export const eventsReducer = (state = { events: [] }, action) => {
  switch (action.type) {
    case ALL_EVENTS_REQUEST:
      return {
        loading: true,
        events: [],
      };
    case ALL_EVENTS_SUCCESS:
      return {
        loading: false,
        events: action.payload,
      };
    case ALL_EVENTS_FAIL:
        return{
            loading: false,
            error: action.payload
        }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
