import styled from "styled-components";
import { UseFormRegister } from "react-hook-form";
import { useState } from "react";

interface InputProps {
  labelText: string;
  maxLength?: number;
  type?: string;
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>; // Update this line
  value?: string | number;
}

function UploadInput({
  labelText,
  maxLength,
  type,
  placeholder,
  register,
  value,
}: InputProps) {
  const [inputValue, setInputValue] = useState(value);

  // eslint-disable-next-line consistent-return
  const setRegister = () => {
    if (labelText === "상품명") {
      return "title";
    }
    if (labelText === "가격") {
      return "price";
    }
    if (labelText === "거래위치") {
      return "location";
    }
    return "default";
  };

  return (
    <InputContainer>
      <Label htmlFor={labelText}>
        <span>{labelText}</span>
        {maxLength && (
          <span>{`${inputValue?.toLocaleString().length} / ${maxLength}`}</span>
        )}
      </Label>
      <Input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register(setRegister(), {
          required: true,
        })}
        id={labelText}
        maxLength={maxLength}
        type={type}
        placeholder={placeholder}
        onChange={(event) => setInputValue(event.target.value)}
        defaultValue={inputValue}
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

const Input = styled.input`
  height: 42px;
  border-radius: 10px;
  border: 1px solid rgb(204, 204, 204);
  padding: 0 1rem;
`;

export default UploadInput;
