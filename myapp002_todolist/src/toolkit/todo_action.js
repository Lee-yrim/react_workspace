import axios from "axios";
import { getTodoList } from "./todosCreateSlice";

const getAction = async (dispatch) => {
  await axios
    .get("/todo/all")
    .then((response) => {
      console.log(response.data);
      //   dispatch({ type: "LIST", payload: response.data });
      dispatch(getTodoList(response.data)); // 여기서 호출하면 투두크리에이트슬아이스로감
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getAction };
