import { combineReducers } from "redux";
import log from "./logReducer";
import tech from "./techReducer";

export default combineReducers({ log, tech });
