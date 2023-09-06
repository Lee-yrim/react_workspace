import { legacy_createStore as createStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

//값을 저장해주는 무언가 라고함
export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
