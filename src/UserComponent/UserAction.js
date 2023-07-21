import {
  USER_FETCH_REQUEST_ACTION,
  USER_FETCH_RESULT_ERROR,
  USER_FETCH_RESULT_SUCCESS,
} from "./UserTypes";
import axios from "axios";

export const userRequestAction = () => {
  return {
    type: USER_FETCH_REQUEST_ACTION,
  };
};

export const userFetchSuccessAction = (user) => {
  return {
    type: USER_FETCH_RESULT_SUCCESS,
    payload: user,
  };
};

export const userFetchErrorAction = (error) => {
  return {
    type: USER_FETCH_RESULT_ERROR,
    payload: error,
  };
};

export const userFetchAction = () => {
  return (dispatch) => {
    dispatch(userRequestAction());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        dispatch(userFetchSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(userFetchErrorAction(err.message));
      });
  };
};
