import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import counter from "./counter";
import inputData from "./input";

export default combineReducers({
	routing: routerReducer,
	counter,
	inputData
});
