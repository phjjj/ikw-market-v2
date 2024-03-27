import styled from "styled-components";
import Nav from "./atoms/Nav";
import Logo from "./atoms/Logo";

function Header() {
  return (
    <HeaderLayout>
      <Logo />
      <Nav>
        <Nav.List>
          <Nav.Item to="upload" body="내 물건 팔기" />
          <Nav.Item to="profile/:id" body="내 정보" />
          <Nav.LoginButton />
        </Nav.List>
      </Nav>
    </HeaderLayout>
  );
}
const HeaderLayout = styled.header`
  display: flex;
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  padding: 0.45rem 1.15rem;
`;
export default Header;
