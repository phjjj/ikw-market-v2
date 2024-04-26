import "./App.css";
import { RouterProvider } from "react-router-dom";

import { useEffect } from "react";

import { useSetRecoilState } from "recoil";
import router from "./routes/router";
import { kakaoIdAtom, userAtom } from "./recoil/user";
import { getUserDoc } from "./lib/db/user";
import { IUser } from "./types";

const SESSION_TIMEOUT = 30 * 60 * 1000; // 30분

function App() {
  const setKakaoId = useSetRecoilState(kakaoIdAtom);
  const setUser = useSetRecoilState(userAtom);

  useEffect(() => {
    const sessionStorageKakaoId = sessionStorage.getItem("kakaoIdRecoilPerist");
    if (sessionStorageKakaoId) {
      try {
        const { kakaoId: persistedKakaoId, timestamp } = JSON.parse(
          sessionStorageKakaoId,
        );

        const now = Date.now();
        // 현재시간 - 만든시간 <= 30분
        if (now - timestamp <= SESSION_TIMEOUT) {
          setKakaoId(persistedKakaoId);
          getUserDoc(persistedKakaoId)
            .then((userDoc) => {
              if (userDoc && Object.keys(userDoc).length !== 0) {
                setUser(userDoc as IUser);
              } else {
                console.log("사용자 정보가 없습니다.");
              }
            })
            .catch((error) => {
              console.error("사용자 정보 가져오기 오류:", error);
            });
        } else {
          sessionStorage.removeItem("kakaoIdRecoilPerist");
        }
      } catch (error) {
        console.error("세션스토리지 파싱 에러:", error);
        sessionStorage.removeItem("kakaoIdRecoilPerist");
      }
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
