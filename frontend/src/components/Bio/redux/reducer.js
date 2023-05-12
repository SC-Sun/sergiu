import { GET_BIO_START, GET_BIO_SUCCESS, GET_BIO_FAILURE } from "./constants";

const initialState = {
  bio: "i am so pretty i am so pretty i am so pretty i am so pretty i am so pretty i am so pretty i am so pretty i am so pretty i am so pretty i am so pretty i am so pretty i am so pretty",
};

export default function bioReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BIO_START:
      return {
        ...state,
        bio: action.results, //result will be from Saga
        loading: false,
        error: false,
      };
    case GET_BIO_SUCCESS:
      return {
        ...state,
        bio: action.results,
        loading: false,
        error: false,
      };
    case GET_BIO_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
