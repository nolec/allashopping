import { SEARCH_RESULT_LOAD, SEARCH_RESULT_FAIL } from "../Actions/types";

const initialState = {
  searchList: [],
  error: "",
  loading: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_RESULT_LOAD:
      return { ...state, searchList: payload, loading: false };
    case SEARCH_RESULT_FAIL:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
