import styled from "styled-components";

type BodyType = {
  body: string;
};

function Title({ body }: BodyType) {
  return <TitleWrapper>{body}</TitleWrapper>;
}

const TitleWrapper = styled.h3`
  margin: 0;
`;

export default Title;
