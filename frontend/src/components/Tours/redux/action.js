import { GET_TOURS_START, GET_TOURS_SUCCESS, GET_TOURS_FAILURE} from './constants';


export function getTours(params) {
  return {
    type: GET_TOURS_START,
    payload: params,
  };
} 