import axios from "axios";
import { boardReducers } from "../reducers/board_reducer";

function getBoardList(currentPage) {
  return async (dispatch) => {
    const data = await axios
      .get(`/board/list/${currentPage}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data);
    dispatch(boardReducers.getBoardList({ data }));
  };
}

function getBoardDetail(num, config) {
  return async (dispatch) => {
    const data = await axios.get(`/board/view/${num}`, config).then((response) => response.data);
    dispatch(boardReducers.getBoardDetail({ data }));
  };
}

function getBoardWrite(formData, config) {
  return async () => {
    await axios.post(`/board/write`, formData, config).then((response) => response.data);
  };
}

function getBoardDownload(upload) {
  return async (dispatch) => {
    const data = await axios
      .get(`/board/contentdownload/${upload}`, {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
        responseType: "blob",
      })
      .then((response) => response.data);
    //dispatch(boardActions.getBoardDownload(data));

    return data;
  };
}

function getBoardUpdate(formData, config) {
  return async () => {
    await axios.put(`/board/update`, formData, config).then((response) => response.data);
  };
}

export const boardActions = {
  getBoardList,
  getBoardDetail,
  getBoardWrite,
  getBoardDownload,
  getBoardUpdate,
}; //다른데서 getBoardDetail 호출한다 치면 boardActions.getBoardDetail이렇게 호출해서 사용함
//로그인 만료시간 너무 짧으면 스프링에서 jwtAuthentic 거기가서 시간 늘려주면됨
