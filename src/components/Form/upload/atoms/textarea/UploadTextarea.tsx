import styled from "styled-components";
import React from "react";

interface InputProps {
  labelText: string;
  maxLength?: number;
  onChangeInputValue: (newValue: string) => void;
  value: string;
}

function UploadTextarea({
  labelText,
  maxLength,
  onChangeInputValue,
  value,
}: InputProps) {
  return (
    <InputWrapper>
      <Label htmlFor={labelText}>
        <span>{labelText}</span>
        {maxLength && <span>{`${value.length} / ${maxLength}`}</span>}
      </Label>
      <Textarea
        id={labelText}
        defaultValue={value}
        maxLength={maxLength}
        onChange={(event) => onChangeInputValue(event.target.value)}
        rows={6}
      />
    </InputWrapper>
  );
}

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
`;

const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Textarea = styled.textarea`
  border-radius: 10px;
  border: 1px solid rgb(204, 204, 204);
  padding: 1rem 1rem 0 0.3rem;
  resize: none;
`;

export default React.memo(UploadTextarea);
