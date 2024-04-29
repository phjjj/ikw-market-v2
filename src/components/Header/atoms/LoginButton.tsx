import { useRecoilValue, useRecoilCallback } from "recoil";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { userIdAtom } from "../../../recoil/user";

function LoginButton() {
  const kakaoId = useRecoilValue(userIdAtom);
  const navigate = useNavigate();

  const navigateHandler = () => navigate("/login");

  const logoutHandler = useRecoilCallback(({ reset }) => () => {
    sessionStorage.removeItem("kakaoIdRecoilPerist");
    reset(userIdAtom);
  });

  return (
    <Button onClick={kakaoId ? logoutHandler : navigateHandler}>
      <span>{kakaoId ? "로그아웃" : "로그인"}</span>
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
