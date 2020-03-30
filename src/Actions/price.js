import { ALLA_FAIL, ALLA_KRW_LOAD } from "./types";
import axios from "axios";

export const getALLAKRW = () => async dispatch => {
  try {
    const res = await axios.get(`/v1/ticker?currencyPair=ALLA/KRW`);
    // const api = axios.create({
    //   baseURL: "https://public-beta.namebit.co.kr",
    //   withCredentials: true
    // });
    // const res = api.get(`/v1/ticker?currencyPair=ALLA/KRW`);
    dispatch({ type: ALLA_KRW_LOAD, payload: res.data });
  } catch (error) {
    dispatch({ type: ALLA_FAIL, payload: "---ALLA_KRW_FAIL---" + error });
  }
};
