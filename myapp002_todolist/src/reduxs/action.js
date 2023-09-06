import axios from "axios";

//액션페이지에서는 이벤틏처리해주는거임
const getAction = async (dispatch) => {
  await axios
    .get("/todo/all")
    .then((response) => {
      //get에 있는 거를 가져오면 then그러면 그 결과값(리스펀스)를 ....
      dispatch({ type: "LIST", payload: response.data });
      //여기서 넘겨준 디스패치를 리듀서에서 받아줌
    })
    .catch((error) => {
      console.log(error);
    });
};

const insertAction = async (input) => {
  await axios
    .post("/todo", { todoname: input })
    //post방식으로 백엔드에 요청
    .then((response) => {
      window.location.replace("/"); //리로딩 되면서 불러온대 위에서 정의해준  .get("/todo/all")이거를 리로딩
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteAction = async (id) => {
  await axios
    .delete(`/todo/${id}`) //백에서 delete라는 이름으로 선언해놔서 여기다 맞춰줘야함
    .then((response) => {
      window.location.replace("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateAction = async (id, completed) => {
  await axios
    .put(`/todo/${id}/${completed}`)
    .then((response) => {
      window.location.replace("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getAction, insertAction, deleteAction, updateAction };
//export에서 일일히 해주기 싫으면 함수 정의 전에 export써주는 방법도 있다햇음
