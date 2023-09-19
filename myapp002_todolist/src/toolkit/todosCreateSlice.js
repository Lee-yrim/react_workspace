import { createSlice } from "@reduxjs/toolkit";

const initialState = { list: [] }; //출력해야하는 것이 리스트니까 여기서 리스트로 선언해주면서  초기화

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //원래 리듀스에 작성한거를 여기서는 여기다가 정의해준거임
    //여기 리듀서 객체는 getTodoList라는 액션 유형을 처리하며 해당 액션이 디스패치 될때 실행됨 state.list = action.payload; 이거랑  console.log("state", state.list); 이게 실행됨
    getTodoList(state, action) {
      console.log("action", action);
      //   action.type==='LIST' 여기서는 이거를 안해줘도된대 이유가 뭘까?
      //initialstate때문인거같은디
      //   state = action.payload.data;
      state.list = action.payload;
      //오 알앗다 원래는 store에다가 한번에 박아둿는데 이번에는 store에 저장시킬때 slice해서 따로따로 나눠서 저장해준거래
      console.log("state", state.list);
    },
  },
});

export default todoSlice;
export const { getTodoList } = todoSlice.actions; //여기서 등록해줘야함
