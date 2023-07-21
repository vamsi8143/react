import {
  USER_FETCH_REQUEST_ACTION,
  USER_FETCH_RESULT_ERROR,
  USER_FETCH_RESULT_SUCCESS,
} from "./UserTypes";
// import axios from "axios";

const initialState = {
  loading: true,
  userData: {},
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_REQUEST_ACTION:
      return {
        ...state,
        loading: true,
        userData: {},
        error: "",
      };
    case USER_FETCH_RESULT_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
        error: "",
      };
    case USER_FETCH_RESULT_ERROR:
      return {
        ...state,
        loading: false,
        userData: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
