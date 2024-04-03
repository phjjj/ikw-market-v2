import styled from "styled-components";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: string;
}

function Title({ children, className }: Props) {
  return <TitleWrapper className={className}>{children}</TitleWrapper>;
}

const TitleWrapper = styled.h1`
  margin: 0 0 10px 0;
  padding: 18px 0px 10px 0px;
  font-family: "GmarketSansMedium";
  font-weight: bold;
  &.text-center {
    text-align: center;
  }
  &.fs-sm {
    font-size: 11px;
  }
  &.fs-md {
    font-size: 16px;
  }
  &.fs-lg {
    font-size: 24px;
  }
  &.fs-xl {
    font-size: 32px;
  }
`;

export default Title;
