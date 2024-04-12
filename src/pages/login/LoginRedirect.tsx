import axios from "axios";
import { useEffect } from "react";
import { IKakaoUserResultData } from "../../types";

function LoginRedirect() {
  const code = new URL(window.location.href).searchParams.get("code");
  const grantType = "authorization_code";
  useEffect(() => {
    if (code) {
      axios
        .post(
          `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&code=${code}`,
          {},
          {
            headers: {
              "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          },
        )
        .then((result) => {
          const { access_token: accessToken } = result.data;
          localStorage.setItem("kakao_token", accessToken);
          axios
            .post(
              "https://kapi.kakao.com/v2/user/me",
              {},
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                  "Content-type":
                    "application/x-www-form-urlencoded;charset=utf-8",
                },
              },
            )
            .then((kakaoResult: IKakaoUserResultData) => {
              if (kakaoResult) {
                console.log(kakaoResult);
              }
            });
        });
    }
  }, [code]);
  return <h1>로그인 중...</h1>;
}

export default LoginRedirect;
