import styled from "styled-components";

type TextType = {
  body: string;
};
function Text({ body }: TextType) {
  return (
    <TextWrapper>
      <p>{body}</p>
    </TextWrapper>
  );
}
const TextWrapper = styled.div`
  p {
    margin: 0;
  }
`;
export default Text;
