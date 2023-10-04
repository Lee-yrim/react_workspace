import axios from "axios";
import { boardReducers } from "../reducers/board_reducer";

function getBoardList(currentPage) {
  return async (dispatch) => {
    const data = await axios
      .get(`/board/list/${currentPage}`)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
    // dispatch({ type: "list", payload: data });
    dispatch(boardReducers.getBoardList({ data })); //slice를 거쳐 store에 저장
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
    await axios.post("/board/write", formData, config).then((response) => response.data);
  };
}

function getBoardDownload(upload) {
  return async (dispatch) => {
    const data = await axios
      .get(`/board/contentdownload/${upload}`, {
        ////////////BoardView.js에 정의되어 있음//////////////////
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        }, //////////////////////////////////////////////////////
        responseType: "blob", //blob: 멀티미디어 데이터
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

function getBoardDelete(num, config) {
  return async (dispatch) => {
    await axios.delete(`/board/delete/${num}`, config).then((response) => response.data);
  };
}

export const boardActions = {
  getBoardList,
  getBoardDetail,
  getBoardWrite,
  getBoardDownload,
  getBoardUpdate,
  getBoardDelete,
};
