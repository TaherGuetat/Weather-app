import { combineReducers } from "redux";
import { weatherReducers } from "./weatherReducers";

export const rootReducer=combineReducers({weatherReducers})