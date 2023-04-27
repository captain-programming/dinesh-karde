import { ERROR, LOADING, SEARCH_ADS } from "./types"
import axios from "axios";

export const SearchText = (text) => async(dispatch) => {
  dispatch({type: LOADING});
  try{
    let {data} = await axios.get(`http://localhost:8080/ads/search?search=${text}`);
    dispatch({type: SEARCH_ADS, payload: data})
  }catch(err){
    dispatch({type: ERROR, payload: err.message})
  }
}