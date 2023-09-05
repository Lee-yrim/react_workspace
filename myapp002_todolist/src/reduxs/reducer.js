let initialState = [];
export const reducer = (todos = initialState, action) => {
  //initialState로 초기화시켜준거래
  //파일 마지막에 export해줘도되고 여기서처럼 함수 선언하면서 한방에 내보내줘도된대
  switch (action.type) {
    case "LIST": //목록
      return action.todos;
    default:
      return null;
  }
};
