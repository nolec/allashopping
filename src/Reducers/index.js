import { combineReducers } from "redux";
import list from "./list";
import search from "./search";
import price from "./price";
import user from "./user";

const rootReducer = combineReducers({ list, search, price, user });

export default rootReducer;
