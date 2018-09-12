import { FETCH_COUNTRIES } from "../actions/actionTypes";

export const appReducer = (state={}, action) => {
  switch(action.type) {
    case FETCH_COUNTRIES: 
      return {
      ...state,
      countries: action.countries
      }

    default: 
      return state;
  }
}