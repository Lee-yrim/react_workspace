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

function App() {
  return (
    <div className="container">
      <h1>My Shop</h1>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="joinadd" element={<JoinAdd />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="editinfo" element={<EditInfo />} />
          <Route path="board/list/:currentPage" element={<BoardList />} />
          <Route path="board/view/:num" element={<BoardView />} />
          <Route path="board/write" element={<BoardWrite />} />
          <Route path="board/write/:num" element={<BoardWrite />} />
          {/* 답변글 */}
          <Route path="board/update/:num" element={<BoardUpdate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
