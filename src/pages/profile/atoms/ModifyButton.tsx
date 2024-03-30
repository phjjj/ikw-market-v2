import styled from "styled-components";

function ModifyButton() {
  return <ButtonContainer>프로필 수정</ButtonContainer>;
}

const ButtonContainer = styled.button`
  border: none;
  cursor: pointer;
  color: #808080;
`;

export default ModifyButton;
