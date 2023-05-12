import { combineReducers } from "redux";
import toursReducer from "../components/Tours/redux/reducer";
import newsReducer from "../components/News/redux/reducer";
import bioReducer from "../components/Bio/redux/reducer";
import workReducer from "../components/Work/redux/reducer";

const rootReducer = combineReducers({
  bio: bioReducer,
  tours: toursReducer,
  news: newsReducer,
  work: workReducer,
});

export default rootReducer;
