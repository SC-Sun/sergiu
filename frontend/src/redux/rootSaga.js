import { all } from "redux-saga/effects";
import toursaga from "../components/Tours/redux/saga";
import newssaga from "../components/News/redux/saga";

export default function* rootSaga() {
  yield all([toursaga(), newssaga()]);
}
