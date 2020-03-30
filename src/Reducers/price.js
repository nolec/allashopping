import { ALLA_KRW_LOAD, ALLA_FAIL } from "../Actions/types";

const initialState = {
  price: null,
  error: "",
  loading: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ALLA_KRW_LOAD:
      return { ...state, price: payload, loading: false };
    case ALLA_FAIL:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
