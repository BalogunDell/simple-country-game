import Axios from "axios";
import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_ERROR,
  SELECTED_COUNTRY
} from "./actionTypes";

//***************************************************/
//******************Fetch countries******************/
//***************************************************/

export const fetchCountries = () => dispatch => {
  Axios.get("https://restcountries.eu/rest/v2/all")
  .then((response) => {
    dispatch(fetchCountriesActionSuccess(response.data))
  })
  .catch((error) => {
    dispatch(fetchCountriesActionError(error))
  })
}

const fetchCountriesActionSuccess = (countries) => {
  return {
    type: FETCH_COUNTRIES,
    countries
  }
}

const fetchCountriesActionError = (error) => {
  return {
    type: FETCH_COUNTRIES_ERROR,
    error
  }
}

//***************************************************/
//****************** Get selected country************/
//***************************************************/

export const getSelectedCountry = (payload) => {
  return {
    type: SELECTED_COUNTRY,
    payload
  }
}