import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { boardActions } from "../../toolkit/actions/board_action";

//게시물 하나 눌러서 들어갓을 때 나오는 페이지
const BoardView = () => {
  const { num } = useParams();
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const boardDetail = useSelector((state) => state.board.boardDetail);
  // const boardFile = useSelector((state) => state.board.boardFile);
  const pv = useSelector((state) => state.board.pv);

  const config = {
    headers: {
      Authorization: localStorage.getItem("Authorization"),
    },
  };
  useEffect(() => {
    dispatch(boardActions.getBoardDetail(num, config));
  }, [dispatch, num]);

  //handleDownload : 다운로드 받아주는 함수
  const handleDownload = async () => {
    const boardFile = await dispatch(boardActions.getBoardDownload(boardDetail.upload, config));

    // await dispatch(boardActions.getBoardDownload(boardDetail.upload));

    const fileName = boardDetail.upload.substring(boardDetail.upload.indexOf("_") + 1); //난수값
    console.log(fileName);

    const url = window.URL.createObjectURL(new Blob([boardFile]), {
      type: "application/octet-stream",
    });

    console.log("url: ", url);
    const link = document.createElement("a");
    link.href = url; //<a href='첨부파일경로' downloasd=''></a>
    link.setAttribute("download", fileName);
    link.style.cssText = "display:none";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  const handleDelete = () => {};
  return (
    <>
      <h1>view</h1>
      <form>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <tbody>
            <tr>
              <th width="20%">글쓴이</th>
              <td>{boardDetail["membersDTO"] ? boardDetail["membersDTO"]["memberName"] : null}</td>

              <th width="20%">조회수</th>
              <td>{boardDetail.readcount}</td>
            </tr>

            <tr>
              <th>제목</th>
              <td colSpan="3">{boardDetail.subject}</td>
            </tr>

            <tr>
              <th>메일</th>
              <td colSpan="3">{boardDetail.memberEmail}</td>
            </tr>
            <tr>
              <th>내용</th>
              <td colSpan="3" style={{ whiteSpace: "pre-line" }}>
                {boardDetail.content}
              </td>
            </tr>

            <tr>
              <th>파일</th>
              <td colSpan="3">
                <button onClick={handleDownload}>{boardDetail.upload ? boardDetail.upload.substring(boardDetail.upload.indexOf("_") + 1) : null}</button>
              </td>
            </tr>
          </tbody>
        </table>
        <Link className="btn btn-primary" to={`/board/list/${pv.currentPage}`}>
          리스트
        </Link>
        <Link className="btn btn-primary" to={`/board/write/${num}`}>
          답변
        </Link>

        {localStorage.getItem("memberEmail") === (boardDetail["memberEmail"] && boardDetail["memberEmail"]) && (
          <>
            <Link className="btn btn-primary" to={`/board/update/${num}`}>
              수정
            </Link>

            <button className="btn btn-primary" onClick={handleDelete}>
              삭제
            </button>
          </>
        )}
      </form>
    </>
  );
};

export default BoardView;
