import styled from "styled-components";
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  labelText: string;
  maxLength?: number;
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
}

function UploadTextarea({ labelText, maxLength, value, register }: InputProps) {
  return (
    <InputContainer>
      <Label htmlFor={labelText}>
        <span>{labelText}</span>
        {maxLength && <span>{`${value.length} / ${maxLength}`}</span>}
      </Label>
      <Textarea
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register("description")}
        id={labelText}
        defaultValue={value}
        maxLength={maxLength}
        rows={6}
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
