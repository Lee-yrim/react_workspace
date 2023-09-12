import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const activeStyle = ({ isActive }) => ({
  color: isActive ? "green" : "",
  fontSize: isActive ? "1.2rem" : "",
});

const BaseLayout = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" style={activeStyle} className="nav-link">
                HOME
              </NavLink>
            </li>
            {localStorage.getItem("memberEmail") != null ? (
              <>
                <li className="nav-item">
                  <NavLink to="/editinfo" style={activeStyle} className="nav-link">
                    EDITINFO
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/logout" style={activeStyle} className="nav-link">
                    {localStorage.getItem("memberName") + "LOGOUT"}
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/login" style={activeStyle} className="nav-link">
                    LOGIN
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/joinadd" style={activeStyle} className="nav-link">
                    JOIN
                  </NavLink>
                </li>
              </>
            )}
            <li className="nav-item">
              <NavLink to="/board/list/1" style={activeStyle} className="nav-link">
                BOARD
              </NavLink>
            </li>

            <li>
              <NavLink style={activeStyle} className="nav-link" to="/emp/1">
                EMPLOYEE
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
};

export default BaseLayout;
