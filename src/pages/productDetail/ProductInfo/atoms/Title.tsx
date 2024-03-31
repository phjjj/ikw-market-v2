import styled from "styled-components";

type TitleType = {
  body: string;
};

function Title({ body }: TitleType) {
  return <TitleWrapper>{body}</TitleWrapper>;
}

const TitleWrapper = styled.h3`
  font-weight: 300;
  margin: 0;
`;

export default Title;
