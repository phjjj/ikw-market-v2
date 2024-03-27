import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

function Info({ children }: Props) {
  return <InfoWrapper>{children}</InfoWrapper>;
}

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 0.5rem;
  overflow: hidden;
  white-space: nowrap;
  padding: 0.5rem;
`;

export default Info;
