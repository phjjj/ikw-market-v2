import styled from "styled-components";

interface InputProps {
  labelText: string;
  maxLength?: number;
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

const Textarea = styled.textarea`
  height: 42px;
  border-radius: 10px;
  border: 1px solid rgb(204, 204, 204);
  padding: 1rem 1rem 0 0.3rem;
  height: 240px;
`;

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
      />
    </InputWrapper>
  );
}

export default UploadTextarea;
