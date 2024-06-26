import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

function DefaultButton({ children, onClick }: Props) {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
}

const Wrapper = styled.button`
  border: none;
  cursor: pointer;
  background-color: #ffaa22;
  height: 50px;
  width: 130px;
  border-radius: 14px;
  border: 1px solid #ffaa22;
  color: #ffffff;
  font-family: Arial;
  font-size: 1.1rem;
  font-weight: 600;
`;
export default DefaultButton;
