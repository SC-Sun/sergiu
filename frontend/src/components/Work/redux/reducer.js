import {
  GET_WORK_START,
  GET_WORK_SUCCESS,
  GET_WORK_FAILURE,
} from "./constants";

const initialState = {work: [],
loading: false,
error: false
 };

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
  
