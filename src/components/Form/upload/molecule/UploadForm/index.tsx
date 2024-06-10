/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";

import { SubmitHandler } from "react-hook-form";
import UploadImageList from "../UploadImageList";
import UploadInput from "../../atoms/Input/UploadInput";
import UploadTextarea from "../../atoms/textarea/UploadTextarea";
import DefaultButton from "../../../../common/atoms/Button/DefaultButton";

interface UploadFormProps {
  children: React.ReactNode;
  onSubmit: SubmitHandler<any>; // Replace 'any' with the actual form data type if known
  handleSubmit: (data: any) => any; // Adjusted to expect a Promise<void> return type
}

function UploadForm({
  children,
  onSubmit: onValid,
  handleSubmit,
}: UploadFormProps) {
  return (
    <UploadFormContainer onSubmit={handleSubmit(onValid)}>
      {children}
    </UploadFormContainer>
  );
}
const UploadFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #000;
`;

UploadForm.ImageList = UploadImageList;
UploadForm.Input = UploadInput;
UploadForm.Textarea = UploadTextarea;
UploadForm.Button = DefaultButton;

export default UploadForm;
