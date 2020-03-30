import {
  USER_INFO_FAIL,
  USER_INFO_LOAD,
  USER_ADDRESS_LOAD,
  USER_ADDRESS_FAIL
} from "./types";
import axios from "axios";

export const getUserInfo = userInfo => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/user/info`, {
      params: {
        user: userInfo.user,
        publicKey: userInfo.publicKey,
        signed: userInfo.signed
      }
    });
    dispatch({ type: USER_INFO_LOAD, payload: res.data });
  } catch (error) {
    dispatch({ type: USER_INFO_FAIL, payload: "---USER_INFO_FAIL---" + error });
  }
};

export const getUserAddress = userInfo => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/user/address/list`, {
      params: {
        user: userInfo.user,
        publicKey: userInfo.publicKey,
        signed: userInfo.signed
      }
    });
    dispatch({ type: USER_ADDRESS_LOAD, payload: res.data });
  } catch (error) {
    dispatch({
      type: USER_ADDRESS_FAIL,
      payload: "---USER_ADDRESS_FAIL---" + error
    });
  }
};
export const addUserAddress = () => async dispatch => {
  try {
  } catch (error) {
    dispatch({
      type: USER_ADDRESS_FAIL,
      payload: "---USER_ADDRESS_FAIL---" + error
    });
  }
};
export const changeUserAddress = () => async dispatch => {
  try {
  } catch (error) {
    dispatch({
      type: USER_ADDRESS_FAIL,
      payload: "---USER_ADDRESS_FAIL---" + error
    });
  }
};
export const deleteUserAddress = () => async dispatch => {
  try {
  } catch (error) {
    dispatch({
      type: USER_ADDRESS_FAIL,
      payload: "---USER_ADDRESS_FAIL---" + error
    });
  }
};
