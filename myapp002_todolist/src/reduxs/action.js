import axios from "axios";

const getAction = async (dispatch) => {
  await axios
    .get("/todo/all")
    .then((response) => {
      //get에 있는 거를 가져오면 then그러면 그 결과값(리스펀스)를 ....
      dispatch({ type: "LIST", todos: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getAction };
//다른 export할때 뭐싴깽이 길게 준거는 뭐라고? 차이가 뭐라고........?ㅋ 몰라...ㅋ....
