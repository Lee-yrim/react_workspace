import axios from "axios";
import { empReducers } from "../reducers/emp_reducer";

function getEmpList(currentPage) {
  return async (dispatch) => {
    const data = await axios
      .get(`/emp/${currentPage}`)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
    dispatch(empReducers.getEmpList({ data }));
  };
}

export const empActions = { getEmpList };
