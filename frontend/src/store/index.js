import {} from "react-redux"
import { applyMiddleware, compose, legacy_createStore } from "redux"
import { searchReducer } from "./reducer";
import thunk from "redux-thunk"

export const store = legacy_createStore(searchReducer, applyMiddleware(compose(thunk)));