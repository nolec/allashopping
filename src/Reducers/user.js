import {
  USER_INFO_LOAD,
  USER_INFO_FAIL,
  USER_ADDRESS_LOAD
} from "../Actions/types";

const initialState = {
  user: {},
  address: [],
  error: "",
  loading: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_INFO_LOAD:
      return { ...state, user: payload, loading: false };
    case USER_INFO_FAIL:
      return { ...state, error: payload, loading: false };
    case USER_ADDRESS_LOAD:
      return { ...state, address: payload.list, loading: false };
    default:
      return state;
  }
};
