import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../../../assets/logo/logo.png";

function Logo() {
  return (
    <LogoLink to="/">
      <img height="44px" src={LogoImg} alt="로고" />
      <h3>경운마켓</h3>
    </LogoLink>
  );
}

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export default Logo;
