import {
  GET_NEWS_START,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILURE,
} from "./constants";

const initialState = {
  news: [],
  loading: false,
  error: false,
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS_START:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        news: action.results, //result will be from Saga
        loading: false,
        error: false,
      };
    case GET_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
