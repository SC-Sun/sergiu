import {
  GET_NEWS_START,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILURE,
} from "./constants";

export function getNewsStart(params) {
  return {
    type: GET_NEWS_START,
    payload: params,
  };
}
