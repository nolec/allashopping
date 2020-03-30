import { SEARCH_RESULT_LOAD, SEARCH_RESULT_FAIL } from "./types";

const getSearchList = term => async dispatch => {
  try {
    dispatch({ type: SEARCH_RESULT_LOAD, payload: "" });
  } catch (error) {
    dispatch({ type: SEARCH_RESULT_FAIL, payload: "---FAIL---" + error });
  }
};
