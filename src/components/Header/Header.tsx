import styled from "styled-components";
import Nav from "./atoms/Nav";
import Logo from "./atoms/Logo";

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

function Header() {
  return (
    <HeaderLayout>
      <Logo />
      <Nav>
        <Nav.List>
          <Nav.Item to="upload" body="내 물건 팔기" />
          <Nav.Item to="profile/:id" body="내 정보" />
        </Nav.List>
        {/* 로그인 버튼을 Nav에 같이 하지말고 따로 atoms를 뺄까 생각중 */}
        <Nav.LoginButton />
      </Nav>
    </HeaderLayout>
  );
}

export default Header;
