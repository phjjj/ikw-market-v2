import styled from "styled-components";
import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  labelText: string;
  maxLength?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
}

function UploadTextarea({ labelText, maxLength, register }: InputProps) {
  const [textareaValue, setTextareaValue] = useState("");

  return (
    <InputContainer>
      <Label htmlFor={labelText}>
        <span>{labelText}</span>
        {maxLength && <span>{`${textareaValue.length} / ${maxLength}`}</span>}
      </Label>
      <Textarea
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register("description")}
        id={labelText}
        defaultValue={textareaValue}
        maxLength={maxLength}
        rows={6}
        onChange={(event) => setTextareaValue(event.target.value)}
      />
    </InputContainer>
  );
}

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
`;

const InputContainer = styled.section`
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
