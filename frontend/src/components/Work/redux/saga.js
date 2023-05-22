import {
  GET_WORK_START,
  GET_WORK_SUCCESS,
  GET_WORK_FAILURE,
} from "./constants";

import getWork from "../../../helpers/api/getWork";
import { takeLatest, call, put } from "redux-saga/effects";

function* getWorkSaga() {
  try {
    const res = yield call(getWork);
    yield put({ type: GET_WORK_SUCCESS, results: res.data });
  } catch (err) {
    yield put({ type: GET_WORK_FAILURE, err });
  }
}

export default function* worksaga() {
  yield takeLatest(GET_WORK_START, getWorkSaga);
}
