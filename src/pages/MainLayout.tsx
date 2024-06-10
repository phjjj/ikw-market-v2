import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "64px" }}>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
