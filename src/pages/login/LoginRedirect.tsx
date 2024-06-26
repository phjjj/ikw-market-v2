import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userAddDoc } from "../../lib/db/user";
import { userIdAtom } from "../../recoil/user";
import { IKakaoUserResultData, IUser } from "../../types/user";

function LoginRedirect() {
  const code = new URL(window.location.href).searchParams.get("code");
  const prevPath = new URL(window.location.href).searchParams.get("state");
  const grantType = "authorization_code";
  const navigate = useNavigate();
  const setUserId = useSetRecoilState(userIdAtom);

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
          const { access_token: accessToken } = result.data; // 1. JWT Token, Firebase Auth 이용해서 토큰 받기. 조사할것, 2. 유저 보안에 대해서 어떻게 구축할지 알아보기!!
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
            .then(async (kakaoResult: IKakaoUserResultData) => {
              const userObj: IUser = {
                kakaoId: kakaoResult.data.id,
                name: kakaoResult.data.kakao_account.profile.nickname,
                image: kakaoResult.data.kakao_account.profile.profile_image_url,
                id: "",
                createdAt: 0,
              };
              const user = await userAddDoc(userObj);
              setUserId(user.id);
              navigate(prevPath || "/");
            });
        });
    }
  }, [code]);
  return <h1>로그인 중...</h1>;
}

export default LoginRedirect;
