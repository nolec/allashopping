import {
  LIST_LOAD_FAIL,
  LIST_LOAD_SUCCESS,
  DETAIL_LOAD_SUCCESS,
  CATGORY_LIST_LOAD,
  HOME_CATEGORY_LIST_SUCCESS,
  LIST_LOAD_FOR_TYPE
} from "../Actions/types";

const initialState = {
  typeList: [],
  list: [],
  homeCategoryList: [],
  page: {},
  result: "",
  detail: {},
  category: {},
  loading: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_LOAD_FOR_TYPE:
      return { ...state, typeList: payload.list, loading: false };
    case CATGORY_LIST_LOAD:
      return {
        ...state,
        category: payload,
        loading: false
      };
    case DETAIL_LOAD_SUCCESS:
      return {
        ...state,
        detail: payload,
        loading: false
      };
    case LIST_LOAD_SUCCESS:
      return {
        ...state,
        list: payload.list,
        page: payload.page,
        loading: false
      };
    case HOME_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        homeCategoryList: payload.list,
        loading: false
      };
    case LIST_LOAD_FAIL:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};
