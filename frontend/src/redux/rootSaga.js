import { all } from "redux-saga/effects";
import toursaga from "../components/Tours/redux/saga";

export default function* rootSaga() {
  yield all([toursaga()]);
}
