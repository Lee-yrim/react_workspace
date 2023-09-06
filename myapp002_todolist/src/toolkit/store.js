import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todosCreateSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

export default store;
    