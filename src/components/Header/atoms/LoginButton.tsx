import { useRecoilValue, useRecoilCallback } from "recoil";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { kakaoIdAtom, userAtom } from "../../../recoil/user";

interface ILoginButtonProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

function LoginButton({ setIsLogin }: ILoginButtonProps) {
  const kakaoId = useRecoilValue(kakaoIdAtom);
  const user = useRecoilValue(userAtom);
  const navigate = useNavigate();

  const isLogin = kakaoId && user;

  const navigateHandler = () => navigate("/login");

  const logoutHandler = useRecoilCallback(({ reset }) => () => {
    sessionStorage.removeItem("kakaoIdRecoilPerist");
    reset(kakaoIdAtom);
    reset(userAtom);
    setIsLogin(false);
  });

  return (
    <Button onClick={!isLogin ? navigateHandler : logoutHandler}>
      {isLogin ? <span>로그아웃</span> : <span>로그인</span>}
    </Button>
  );
}
const Button = styled.button`
  border: none;
  background-color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

export default LoginButton;
