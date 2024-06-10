import styled from "styled-components";

function TextArea() {
  return (
    <TextAreaWrapper>
      <textarea placeholder="댓글 작성하기" />
    </TextAreaWrapper>
  );
}
const TextAreaWrapper = styled.div`
  width: 100%;
  height: 100%;

  textarea {
    resize: none;
    width: 100%;
    height: 100%;
    box-shadow:
      rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
      rgb(209, 213, 219) 0px 0px 0px 1px inset;
    padding: 0;
    border: 0;
  }
`;
export default TextArea;
