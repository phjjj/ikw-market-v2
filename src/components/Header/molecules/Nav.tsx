import { ReactNode } from "react";
import styled from "styled-components";
import Item from "../atoms/Item";

interface Props {
  children: ReactNode;
}

function Nav({ children }: Props) {
  return (
    <NavWrapper>
      <Ul>{children}</Ul>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
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

Nav.Item = Item;

export default Nav;
