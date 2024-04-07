import styled from "styled-components";

type TitleType = {
  body: string;
};

function Title({ body }: TitleType) {
  return <TitleWrapper>{body}</TitleWrapper>;
}

const TitleWrapper = styled.span`
  font-weight: 300;
  font-size: 18px;
`;

export default Title;
