import styled from "styled-components";
import Nav from "./molecules/Nav";
import Logo from "./atoms/Logo";
import LoginButton from "./atoms/LoginButton";

function Header() {
  return (
    <HeaderLayout>
      <Logo />
      {/* 로그인버튼을 atom으로 빼서 Nav안에 넣는게 좀 이상하지만 스타일 적용에 어려움이 생겨 넣었음.. */}
      <Nav>
        <Nav.Item to="upload" body="내 물건 팔기" />
        <Nav.Item to="profile/:id" body="내 정보" />
        <LoginButton />
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
  z-index: 999;
`;
export default Header;
