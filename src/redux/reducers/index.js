import {
  FETCH_COUNTRIES, 
  FETCH_COUNTRIES_ERROR,
  SELECTED_COUNTRY 
} from "../actions/actionTypes";

export const appReducer = (state={}, action) => {
  switch(action.type) {
    case FETCH_COUNTRIES: 
      return {
      ...state,
      countries: action.countries
    }

    case FETCH_COUNTRIES_ERROR: 
      return {
      ...state,
      error: action.error
    }

    case SELECTED_COUNTRY: 
      return {
      ...state,
      selectedCountry: action.payload.country,
      showModal: action.payload.showModal
    }

    default: 
      return state;
  }
}