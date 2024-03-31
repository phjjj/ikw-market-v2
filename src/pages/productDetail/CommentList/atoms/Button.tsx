import styled from "styled-components";

function Button() {
  return <ButtonWrapper type="button">등록</ButtonWrapper>;
}
const ButtonWrapper = styled.button`
  width: 65px;
  border: none;
  height: 100%;
  cursor: pointer;
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
`;
export default Button;
