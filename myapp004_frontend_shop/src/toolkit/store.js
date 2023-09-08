import { configureStore } from "@reduxjs/toolkit";
import boardSlice, { boardReducers } from "./reducers/board_reducer";

const store = configureStore({
  reducer: {
    board: boardSlice.reducer,
  },
});

export default store;
