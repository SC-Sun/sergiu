import { GET_BIO_START, GET_BIO_SUCCESS, GET_BIO_FAILURE } from "./constants";


export function getBioStart(params) {
  return {
    type: GET_BIO_START,
    payload: params,
  };
}
