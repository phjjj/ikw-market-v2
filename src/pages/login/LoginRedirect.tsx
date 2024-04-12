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
          // eslint-disable-next-line @typescript-eslint/naming-convention
          const { access_token } = result.data;
          localStorage.setItem("kakao_token", access_token);
          axios
            .post(
              "https://kapi.kakao.com/v2/user/me",
              {},
              {
                headers: {
                  Authorization: `Bearer ${access_token}`,
                  "Content-type":
                    "application/x-www-form-urlencoded;charset=utf-8",
                },
              },
            )
            .then((kakaoResult: IKakaoUserResultData) => {
              const {
                data: {
                  id: kakaoId,
                  kakao_account: {
                    email,
                    profile: { nickname: name, profile_image_url: image },
                  },
                },
              } = kakaoResult;

              const userData = {
                kakaoId,
                email,
                name,
                image,
              };
              console.log(userData);
            });
        });
    }
  }, [code]);
  return <h1>로그인 중...</h1>;
}

export default LoginRedirect;
