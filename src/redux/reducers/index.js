import { combineReducers } from "redux";
import visibilityFilter from "./visibiltyFilter";
import todos from "./todos";

export default combineReducers({ todos, visibilityFilter });
