/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styled from "styled-components";
import Input from "../atoms/Input/Input";

type Props = {
  value?: any;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onInput?: Function;
  placeholder?: string;
  label?: string;
  useTextArea?: boolean;
  name: string;
  inputMode?:
    | "search"
    | "text"
    | "none"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal";
  length?: string;
  required?: boolean;
  style?: StyleProps;
};

type StyleProps = {
  display?: string;
  position?: string;
  alignItems?: string;
  height?: string;
};

const InputGroupLayout = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 20px;
`;

const LengthLayout = styled.span`
  position: absolute;
  right: 0;
`;

function InputGroup({
  name,
  inputMode,
  useTextArea,
  style,
  value,
  onInput,
  label,
  placeholder,
  length,
  required,
}: React.PropsWithChildren<Props>) {
  return (
    <InputGroupLayout {...style}>
      <label>{label}</label>
      <Input
        name={name}
        inputMode={inputMode}
        useTextArea={useTextArea}
        value={value}
        onInput={onInput}
        placeholder={placeholder}
        style={style}
        required={required}
      />
      <LengthLayout>{length}</LengthLayout>
    </InputGroupLayout>
  );
}

export default InputGroup;
