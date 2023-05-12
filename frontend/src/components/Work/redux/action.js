import {
  GET_WORK_START,
  GET_WORK_SUCCESS,
  GET_WORK_FAILURE,
} from "./constants";

export function getWorkStart(params) {
  return {
    type: GET_WORK_START,
    payload: params,
  };
}
