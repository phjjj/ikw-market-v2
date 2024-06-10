import { useState } from "react";
import styled from "styled-components";

// 이름을 수정하는 폼 컴포넌트
function NameEditForm({
  onNameEditComplete,
  initialName,
}: {
  onNameEditComplete: (newName: string) => void;
  initialName: string;
}) {
  const [name, setName] = useState(initialName);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNameEditComplete(name);
  };

  return (
    <NameEditFormContainer onSubmit={handleSubmit}>
      <NameInput
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <EditProfileButton type="submit">수정 완료</EditProfileButton>
    </NameEditFormContainer>
  );
}

export default NameEditForm;

const EditProfileButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  color: #007bff;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid #007bff;
  }
`;
const NameEditFormContainer = styled.form`
  display: flex;
  align-items: center;
`;

const NameInput = styled.input`
  padding: 5px;
  font-size: 2rem;
  border: none;
  border-bottom: 1px solid #ccc;
  margin-right: 10px;
`;
