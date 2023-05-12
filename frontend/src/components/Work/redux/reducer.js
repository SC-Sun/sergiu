import {
  GET_WORK_START,
  GET_WORK_SUCCESS,
  GET_WORK_FAILURE,
} from "./constants";

const initialState = {work: [
  { 
    id: '1',
    name: "hopeless",
    about: "no no no no hope",
    media: {
      photo:
        "http://www.sergiumatis.com/_MG_9196%20%C2%A9%20Evgenia%20Chetvertkova%20small.jpg",
      link: "http://www.sergiumatis.com/",
    },
  },
  {
    id: '2',
    name: "hopeless",
    about: "no no no no hope",
    media: {
      photo:
        "http://www.sergiumatis.com/_MG_9196%20%C2%A9%20Evgenia%20Chetvertkova%20small.jpg",
      link: "http://www.sergiumatis.com/",
    },
  },
  {
    id: '3',
    name: "hopeless",
    about: "no no no no hope",
    media: {
      photo:
        "http://www.sergiumatis.com/_MG_9196%20%C2%A9%20Evgenia%20Chetvertkova%20small.jpg",
      link: "http://www.sergiumatis.com/",
    },
    loading: false,
    error: false,
  },
] };

export default function workReducer(state = initialState, action) {
    
    switch (action.type) {
      case GET_WORK_START:
        return {
          ...state,
          loading: true,
          error: false,
        };
      case GET_WORK_SUCCESS:
        return {
          ...state,
          work: action.results,
          loading: false,
          error: false,
        };
      case GET_WORK_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
      default:
        return state;
    }
  }
  
