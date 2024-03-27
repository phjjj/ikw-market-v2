import { useState } from "react";
import styled from "styled-components";

function LoginButton() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Button onClick={() => setIsLogin(!isLogin)}>
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
