import { configureStore } from "@reduxjs/toolkit";
import boardSlice, { boardReducers } from "./reducers/board_reducer";
import empSlice from "./reducers/emp_reducer";

const store = configureStore({
  reducer: {
    board: boardSlice.reducer,
    employees: empSlice.reducer,
  },
});

export default store;
