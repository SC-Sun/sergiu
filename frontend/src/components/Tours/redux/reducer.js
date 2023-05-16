import {
  GET_TOURS_START,
  GET_TOURS_SUCCESS,
  GET_TOURS_FAILURE,
} from "./constants";

const initialState = {
  tours: [],
  loading: false,
  error: false,
};
 

export default function toursReducer(state = initialState, action) {
    
  switch (action.type) {
    case GET_TOURS_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_TOURS_SUCCESS:
      return {
        ...state,
        tours: action.results,
        loading: false,
        error: false,
      };
    case GET_TOURS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
