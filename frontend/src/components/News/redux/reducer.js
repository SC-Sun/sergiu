import {
  GET_NEWS_START,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILURE,
} from "./constants";

const initialState = {
  news: [
    {
      id: "1",
      theme: "new creation",
      text: "so many thing to say..................",
      info: "https://www.google.com/",
    },
    {
      id: "2",
      theme: "wow",
      text: "amazing.................",
      info: "https://www.google.com/",
    },
  ],
  loading: false,
  error: false,
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS_START:
      return {
        ...state,
        news: action.results, //result will be from Saga
        loading: false,
        error: false,
      };
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        tours: action.results,
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
