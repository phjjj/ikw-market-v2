import styled from "styled-components";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

/* flexbox 컨테이너 스타일컴포넌트 수평정렬 */
function FlexContainer({ children }: Props) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;
export default FlexContainer;
