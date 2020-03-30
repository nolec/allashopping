import axios from "axios";
import {
  LIST_LOAD_SUCCESS,
  DETAIL_LOAD_SUCCESS,
  LIST_LOAD_FAIL,
  CATGORY_LIST_LOAD,
  HOME_CATEGORY_LIST_SUCCESS,
  LIST_LOAD_FOR_TYPE
} from "./types";

const api = "https://manage.allaglobal.com:7443/allamanager";

export const getList = () => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/store/list`);
    dispatch({ type: LIST_LOAD_FOR_TYPE, payload: res.data });
  } catch (error) {
    dispatch({ type: LIST_LOAD_FAIL, payload: "---FAIL---" + error });
  }
};
export const getHomeList = () => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/storeHome/list?pageSize=9999`);
    // const res = await axios({
    //   method: "get",
    //   url: "https://manage.allaglobal.com:6443/allamanager/api/v1/store/list"
    // });
    dispatch({ type: LIST_LOAD_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: LIST_LOAD_FAIL, payload: "---FAIL---" + error });
  }
};
export const getHomeCategoryList = () => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/storeHome/category/list`);
    dispatch({ type: HOME_CATEGORY_LIST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: LIST_LOAD_FAIL, payload: "---FAIL---" + error });
  }
};

export const getDetailList = (type, id) => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/store/info`, {
      params: { type: type, id: id }
    });
    dispatch({ type: DETAIL_LOAD_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: LIST_LOAD_FAIL, payload: "---FAIL---" + error });
  }
};

export const getCategoryList = () => async dispatch => {
  try {
    const res = await axios.get(
      `/api/v1/store/category/list?pageNo=1&pageSize=9999`
    );
    res.data.list.unshift(res.data.list[11]);
    dispatch({ type: CATGORY_LIST_LOAD, payload: res.data });
  } catch (error) {
    dispatch({ type: LIST_LOAD_FAIL, payload: "---FAIL---" + error });
  }
};
