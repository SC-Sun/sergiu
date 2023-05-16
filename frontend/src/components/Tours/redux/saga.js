import { takeLatest, put, call } from "redux-saga/effects";
import {
  GET_TOURS_START,
  GET_TOURS_SUCCESS,
  GET_TOURS_FAILURE,
} from "./constants";
import getTours from "../../../helpers/api/getTours";

function* getToursSaga() {
  try {
    const res = yield call(getTours);
    yield put({ type: GET_TOURS_SUCCESS, results: res.data });
  } catch(err) {
    yield put({type: GET_TOURS_FAILURE, err});
  }
}

export default function* toursaga(){
    yield takeLatest(GET_TOURS_START, getToursSaga)
}
