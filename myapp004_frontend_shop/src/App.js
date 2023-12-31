import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";
import Home from "./components/members/Home";
import JoinAdd from "./components/members/JoinAdd";
import Login from "./components/members/Login";
import Logout from "./components/members/Logout";
import EditInfo from "./components/members/EditInfo";
import BoardList from "./components/board/BoardList";
import BoardView from "./components/board/BoardView";
import BoardWrite from "./components/board/BoardWrite";
import BoardUpdate from "./components/board/BoardUpdate";
import EmpList from "./components/emp/EmpList";
import PrivateRoute from "./access/PrivateRoute";

function App() {
  return (
    <div className="container">
      <h1>My Shop</h1>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="joinadd" element={<JoinAdd />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="editinfo" element={<EditInfo />} />
          <Route path="board/list/:currentPage" element={<BoardList />} />
          <Route path="board/view/:num" element={<BoardView />} />
          <Route path="board/write" element={<BoardWrite />} />
          <Route path="board/write/:num" element={<BoardWrite />} /> */}
          {/* 답변글 */}
          {/* <Route path="board/update/:num" element={<BoardUpdate />} /> */}

          {/* 혜륌 */}
          <Route path="joinadd" element={<PrivateRoute isAuth={false} RouteComponent={JoinAdd} />} />
          <Route path="login" element={<PrivateRoute isAuth={false} RouteComponent={Login} />} />
          <Route path="logout" element={<PrivateRoute isAuth={true} RouteComponent={Logout} />} />
          <Route path="editinfo" element={<PrivateRoute isAuth={true} RouteComponent={EditInfo} />} />
          {/* BoardList에 있는 currentPage라는 변수 */}
          {/* privateroute를 트루로 두면 로그인을 해야 접속가능한 페이지고 펄스로 두면 안해도 들어갈수 잇음 */}
          <Route path="board/list/:currentPage" element={<PrivateRoute isAuth={false} RouteComponent={BoardList} />} />
          <Route path="board/view/:num" element={<PrivateRoute isAuth={true} RouteComponent={BoardView} />} />
          <Route path="board/write" element={<PrivateRoute isAuth={true} RouteComponent={BoardWrite} />} />
          <Route path="board/write/:num" element={<PrivateRoute isAuth={true} RouteComponent={BoardWrite} />} />
          <Route path="board/update/:num" element={<PrivateRoute isAuth={true} RouteComponent={BoardUpdate} />} />
          <Route path="emp/:currentPage" element={<PrivateRoute isAuth={false} RouteComponent={EmpList} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
