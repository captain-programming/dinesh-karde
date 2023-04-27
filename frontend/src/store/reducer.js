import { ERROR, LOADING, SEARCH_ADS } from "./types"

const initialState = {
  loading: false,
  error: false,
  errorMessage:"",
  searchList: [],
}

export const searchReducer = (state=initialState, {type, payload}) => {
  switch(type){
    case LOADING: return {...state, loading: true }
    case SEARCH_ADS: return {...state, searchList: payload, loading: false, error: false, errorMessage:""}
    case ERROR: return {...state, loading: false, error: true, errorMessage: payload}
    default: return state;
  }
}