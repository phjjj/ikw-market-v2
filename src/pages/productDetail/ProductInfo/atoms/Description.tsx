import styled from "styled-components";

type DescriptionType = {
  body: string;
};

function Description({ body }: DescriptionType) {
  return <ParagraphWrraper>{body}</ParagraphWrraper>;
}

const ParagraphWrraper = styled.p`
  margin: 0;
`;
export default Description;
