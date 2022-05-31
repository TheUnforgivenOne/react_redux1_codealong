import { createSlice } from "@reduxjs/toolkit";
import { keepInRange } from "./utils";

const initialState =  {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    increaseCount: (state, action) => {
      state.count = keepInRange(state.count + action.payload);
    },
    decreaseCount: (state, action) => {
      state.count = keepInRange(state.count - action.payload);
    },
    resetCount: () => initialState,
  }
});

export const { increaseCount, decreaseCount, resetCount } = counterSlice.actions;
export default counterSlice.reducer;
