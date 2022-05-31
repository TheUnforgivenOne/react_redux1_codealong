import { INCREMENT, INCREMENT_BY, DECREMENT, DECREMENT_BY, RESET_COUNTER } from "./actions";
import { keepInRange } from "./utils";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT.type:
      return {
        count: keepInRange(state.count + 1),
      };
    case DECREMENT.type:
      return {
        count: keepInRange(state.count - 1),
      };
    case INCREMENT_BY.type:
      return {
        count: keepInRange(state.count + action.payload),
      };
    case DECREMENT_BY.type:
      return {
        count: keepInRange(state.count - action.payload),
      };
    case RESET_COUNTER.type:
      return initialState;
    default:
      return state;
  }
};

export default counterReducer;
