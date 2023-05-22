import { GET_BIO_START, GET_BIO_SUCCESS, GET_BIO_FAILURE } from "./constants";
import getBio from "../../../helpers/api/getBio";
import { takeLatest, call, put } from "redux-saga/effects";

function* getBioSaga() {
  try {
    const res = yield call(getBio);
    yield put({ type: GET_BIO_SUCCESS, results: res.data });
  } catch (err) {
    yield put({ type: GET_BIO_FAILURE, err });
  }
}

export default function* biosaga() {
  yield takeLatest(GET_BIO_START, getBioSaga);
}
