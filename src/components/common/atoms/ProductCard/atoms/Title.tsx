import styled from "styled-components";

type BodyType = {
  body: string;
};

function Title({ body }: BodyType) {
  return <TitleContainer>{body}</TitleContainer>;
}

const TitleContainer = styled.h3`
  margin: 0;
`;

export default Title;
