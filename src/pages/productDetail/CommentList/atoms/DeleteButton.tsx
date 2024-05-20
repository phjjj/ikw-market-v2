import React from "react";
import styled from "styled-components";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function DeleteButton({ onClick }: Props) {
  return (
    <DeleteButtonWrapper onClick={onClick} type="button">
      댓글삭제
    </DeleteButtonWrapper>
  );
}
const DeleteButtonWrapper = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background-color: #f1f3f5;
  border: none;
  border-radius: 5px;
  padding: 0.3rem 0.5rem;
  font-size: 0.8rem;
  color: #495057;
  cursor: pointer;
  &:hover {
    background-color: #e9ecef;
  }
`;
export default DeleteButton;
