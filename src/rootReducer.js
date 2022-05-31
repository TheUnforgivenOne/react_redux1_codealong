import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import counterSlice from "./counterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  counterToolkit: counterSlice,
});

export default rootReducer;
