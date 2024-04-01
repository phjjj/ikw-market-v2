import styled from "styled-components";

interface InputProps {
  labelText: string;
  maxLength?: number;
  type?: string;
  placeholder?: string;
  onChangeInputValue: (newValue: string) => void;
  value: string;
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

const Input = styled.input`
  height: 42px;
  border-radius: 10px;
  border: 1px solid rgb(204, 204, 204);
  padding: 0 1rem;
`;

function UploadInput({
  labelText,
  maxLength,
  type,
  placeholder,
  onChangeInputValue,
  value,
}: InputProps) {
  return (
    <InputWrapper>
      <Label htmlFor={labelText}>
        <span>{labelText}</span>
        {maxLength && <span>{`${value.length} / ${maxLength}`}</span>}
      </Label>
      <Input
        id={labelText}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(event) => onChangeInputValue(event.target.value)}
        defaultValue={value}
      />
    </InputWrapper>
  );
}

export default UploadInput;
