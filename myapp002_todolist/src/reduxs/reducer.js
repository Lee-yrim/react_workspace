let initialState = [];
//리듀스에서는 스토어에 저장하는 거 하는 페이지
//이벤트 발생 - 스토어에 저장 -저장된거 가져와서 사용할때는 투두4 로 가서 투두즈에서 useselector 사용해서 함
export const reducer = (state = initialState, action) => {
  //여기 액션에는 결과값 받아온거랑 타입이 담겨있다....?
  //애ㅣㄱ션.ㅓㄴ에 보면 dispatch부분에 타입은 리스트고 어쩌고 그줄에 해당하는 내용인듯
  //initialState로 초기화시켜준거래
  //파일 마지막에 export해줘도되고 여기서처럼 함수 선언하면서 한방에 내보내줘도된대
  switch (action.type) {
    case "LIST": //넘어온 타입이 리스트이면 액션의 페이로드값을 스테이트에 저장
      //return [...state, { a: action.payload.a }];
      //만약 1줄에 초기값이 설정돼있으면 리턴을 이렇게 해줘야하는데 지금은 비어잇잖아 그러니까 안해줌
      return action.payload; //이 리턴값이 위의 state에 저장되어있는거고 그대로 가지고 투두4로 가는거임
    default:
      return null;
  }
};
