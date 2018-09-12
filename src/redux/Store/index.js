import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { appReducer } from "../reducers";

const initialState = {};
const Store = () => {
  return createStore(
    appReducer,
    initialState,
    compose(applyMiddleware(thunk), window.devToolsExtension 
      && process.env.NODE_ENV === "development" 
      ?
      window.devToolsExtension()
      : () => {}
      )
  )
}

export default Store;