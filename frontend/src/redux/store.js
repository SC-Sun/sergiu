import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";
import toursaga from "../components/Tours/redux/saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(toursaga);

export default store;
