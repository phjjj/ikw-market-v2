import styled from "styled-components";

type BodyType = {
  body: string;
};

function Name({ body }: BodyType) {
  return <TitleWrapper>{body}</TitleWrapper>;
}

const TitleWrapper = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export default Name;
