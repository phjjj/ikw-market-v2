import { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

type ItemType = {
  body: string;
  to: string;
};

const Container = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 3.2rem;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  margin-right: 2.8rem;
`;

const Button = styled.button`
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

function Nav({ children }: Props) {
  return <Container>{children}</Container>;
}

function List({ children }: Props) {
  return <Ul>{children}</Ul>;
}

function Item({ body, to }: ItemType) {
  return (
    <Li>
      <NavLink to={to}>{body}</NavLink>
    </Li>
  );
}

function LoginButton() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Button onClick={() => setIsLogin(!isLogin)}>
      {isLogin ? <span>로그아웃</span> : <span>로그인</span>}
    </Button>
  );
}

Nav.List = List;
Nav.Item = Item;
Nav.LoginButton = LoginButton;
export default Nav;
