import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { boardActions } from "../../toolkit/actions/board_action";
import { useDispatch, useSelector } from "react-redux";
import TableRow from "./TableRow";
import PageNavigation from "./PageNavigation";

const BoardList = () => {
  const { currentPage } = useParams();
  const dispatch = useDispatch();
  const getBoardList = (currentPage) => {
    dispatch(boardActions.getBoardList(currentPage));
  };

  useEffect(() => {
    getBoardList(currentPage);
  }, []);

  const boardList = useSelector((state) => state.board.boardList);
  const pv = useSelector((state) => (state.board.pv ? state.board.pv : { currentPage: 1 }));

  return (
    <div>
      <Link className="btn btn-danger" to="/board/write">
        글쓰기
      </Link>
      <h3 className="text-center">게시판 목록</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <colgroup>
          <col width="8%" />
          <col width="*" />
          <col width="12%" />
          <col width="12%" />
        </colgroup>

        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>조회수</th>
          </tr>
        </thead>

        <tbody>
          {boardList &&
            boardList.map((board) => {
              return <TableRow board={board} key={board.num} />;
            })}
        </tbody>
      </table>

      {pv && <PageNavigation getBoardList={getBoardList} />}
    </div>
  );
};

export default BoardList;
