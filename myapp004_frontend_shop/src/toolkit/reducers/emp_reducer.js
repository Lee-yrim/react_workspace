import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  empList: [],
  pv: { currentPage: 1 },
};

const empSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    getEmpList(state, action) {
      console.log("empList(reducer)", action.payload.data);
      state.empList = action.payload.data.empList;
      state.pv = action.payload.data.pv;
    },
  },
});

export const empReducers = empSlice.actions;
export default empSlice;
