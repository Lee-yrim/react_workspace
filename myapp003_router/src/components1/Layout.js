import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const activeStyle = (isActive) => {
  return {
    color: isActive ? "green" : "",
    fontSize: isActive ? "2rem" : "",
  };
};

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* <a>요소는 전체를 렌더링하므로 <Link> 또는 <NavLink>을 사용한다. */}
            {/* <a href="/">Homee</a> */}
            {/* <Link to="/">Homee</Link> */}
            {/* NavLink은 선택한 컴포넌트에 스타일 지정이 가능하다. */}
            <NavLink to="/" style={activeStyle}>
              Home
            </NavLink>
            {/* navlink가 a태그해서 주소 이동햇던거 대신임 여기서는 a태그는 리로딩*/}
          </li>

          <li>
            <NavLink to="/about" style={activeStyle}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard" style={activeStyle}>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/nothing-here" style={activeStyle}>
              Nothing here
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
      {/* 아웃렉해주면 메뉴에서 클릭한 내용이 같은페이지의 아래쪽에 뜸 굳이 페이지 이동해서 결과를 확인할 필요가 없는거지 */}
    </div>
  );
};

export default Layout;
