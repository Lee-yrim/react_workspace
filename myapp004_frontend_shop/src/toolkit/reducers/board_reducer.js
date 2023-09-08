import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  boardList: [],
  pv: { currentPage: 1 },
  boardDetail: {},
  boardFile: null,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    getBoardList(state, action) {
      console.log("boardList", action.payload.data.boardList);
      state.boardList = action.payload.data.boardList;
      state.pv = action.payload.data.pv;
    },

    getBoardDetail(state, action) {
      state.boardDetail = action.payload.data;
    },
  },
});

export const boardReducers = boardSlice.actions;
export default boardSlice;
