import "./App.css";
import { RouterProvider } from "react-router-dom";

import { useEffect } from "react";

import { useSetRecoilState } from "recoil";
import router from "./routes/router";
import { userIdAtom } from "./recoil/user";

const SESSION_TIMEOUT = 30 * 60 * 1000; // 30분

function App() {
  const setUserId = useSetRecoilState(userIdAtom);

  useEffect(() => {
    const sessionStorageUserId = sessionStorage.getItem("userIdPeristAtom");
    if (sessionStorageUserId) {
      try {
        const { userId: persistedUserId, timestamp } =
          JSON.parse(sessionStorageUserId);

        const now = Date.now();
        // 현재시간 - 만든시간 <= 30분
        if (now - timestamp <= SESSION_TIMEOUT) {
          setUserId(persistedUserId);
        } else {
          sessionStorage.removeItem("userIdPeristAtom");
        }
      } catch (error) {
        console.error("세션스토리지 파싱 에러:", error);
        sessionStorage.removeItem("userIdPeristAtom");
      }
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
