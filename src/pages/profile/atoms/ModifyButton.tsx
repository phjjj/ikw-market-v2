import styled from "styled-components";

function ModifyButton() {
  return <ButtonWrapper>프로필 수정</ButtonWrapper>;
}

const ButtonWrapper = styled.button`
  border: none;
  cursor: pointer;
  color: #808080;
`;

export default ModifyButton;
