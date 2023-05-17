import {
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILURE,
  GET_NEWS_START,
} from "./constants";
import getNews from "../../../helpers/api/getNews";
import { takeLatest, call, put } from "redux-saga/effects";

function* getNewsSaga() {
  try {
    const res = yield call(getNews);
    yield put({ type: GET_NEWS_SUCCESS, results: res.data });
  } catch (err) {
    yield put({ type: GET_NEWS_FAILURE, err });
  }
}

export default function* newssaga() {
  yield takeLatest(GET_NEWS_START, getNewsSaga);
}
