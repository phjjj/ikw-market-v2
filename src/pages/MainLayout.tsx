import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <header>
        <Link to="/"> 로고 이미지</Link>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "isActive" : "")}
                end
              >
                홈
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "isActive" : "")}
              >
                로그인
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/upload"
                className={({ isActive }) => (isActive ? "isActive" : "")}
              >
                상품 업로드
              </NavLink>
            </li>
            <li>
              <Link to=".." relative="path">
                뒤로 가기
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
