import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";
import toursaga from "../components/Tours/redux/saga";
import newssaga from "../components/News/redux/saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
//sagaMiddleware.run(toursaga, newssaga);
 sagaMiddleware.run(rootSaga);
export default store;
